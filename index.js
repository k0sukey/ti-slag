var _ = require('lodash'),
	fs = require('fs'),
	istanbul = require('istanbul'),
	instrumenter = new istanbul.Instrumenter({
		coverageVariable: '__coverage__'
	}),
	path = require('path'),
	vm = require('vm');

var slag = function(file, options){
	// options
	options = options || {};
	options.titanium = options.titanium || null;
	options.platform = options.platform || null;
	options.device = options.device || { displayCaps: {} };
	options.module = options.module || {};
	options.injection = options.injection || null;
	options.silent = options.silent || false;
	options.coverage = options.coverage || false;

	process.env.SLAG_STRICT = _.isBoolean(options.strict) ? options.strict : true;
	process.env.SLAG_PLATFORM = options.platform;
	process.env.SLAG_DEVICE = JSON.stringify(options.device);

	var titaniumpath,
		titanium,
		Titanium;

	// check file path the JavaScript file
	if (!fs.existsSync(file)) {
		throw new Error('File does not exist ' + file);
	}

	// check the Titanium SDK version
	titaniumpath = path.join(__dirname, 'lib', 'titanium', options.titanium + '.js');
	if (!fs.existsSync(titaniumpath)) {
		throw new Error('Invalid SDK version ' + options.titanium);
	}

	// check the platform
	if (options.platform !== 'ios' &&
		options.platform !== 'android' &&
		options.platform !== 'windowsphone') {
		throw new Error('Invalid platform specified ' + options.platform);
	}

	// load the Titanium SDK
	titanium = require(titaniumpath);
	Titanium = titanium(path.join(__dirname, 'lib', 'titanium', options.titanium), {
		version: options.titanium.replace(/\.GA$/, ''),
		platform: options.platform === 'ios' ? 'iphone' : options.platform
	});

	function createContext() {
		var context = vm.createContext({
			Titanium: Titanium,
			Ti: Titanium,
			L: function(params){ return params; },
			String: _.extend(String, {
				format: function(params){ return params; },
				formatCurrency: function(params){ return params; },
				formatDate: function(params){ return params; },
				formatDecimal: function(params){ return params; },
				formatTime: function(params){ return params; }
			}),
			JSON: JSON,
			setInterval: setInterval,
			setTimeout: setTimeout,
			clearInterval: clearInterval,
			clearTimeout: clearTimeout,
			console: !options.silent ? console : function(){},
			alert: !options.silent ? function(params){ console.log(params); } : function(){},
			exports: {},
			module: module,
			require: function(original){
				var source = path.resolve(path.join(path.dirname(file), original + '.js')),
					newcontext;

				if (_.has(options.module, original)) {
					return options.module[original];
				} else if (original.startsWith('/alloy') && _.has(options.module, original.substring(1))) {
					// Catch up ALOY-1523 Update Alloy old require-paths
					return options.module[original.substring(1)];
				} else if (fs.existsSync(source)) {
					newcontext = createContext();
					vm.runInContext(fs.readFileSync(source, 'utf8'), newcontext);

					return _.isEmpty(newcontext.exports) ? newcontext.module.exports : newcontext.exports;
				} else {
					throw new Error('Unknown module detect ' + original);
				}
			}
		});

		return context;
	}

	// running in vm
	var context = createContext(),
		code = fs.readFileSync(file, 'utf8');

	options.injection && (code = options.injection(code));

	if (options.coverage) {
		vm.runInContext(instrumenter.instrumentSync(code, path.relative(process.cwd(), file)), context);
	} else {
		vm.runInContext(code, context);
	}

	return context;
};
module.exports = slag;