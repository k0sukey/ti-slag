var _ = require('lodash'),
	fs = require('fs'),
	path = require('path'),
	vm = require('vm');

var slag = function(file, options){
	// options
	options = options || {};
	options.titanium = options.titanium || null;
	options.platform = options.platform || null;
	options.module = options.module || {};
	options.injection = options.injection || null;
	options.silent = options.silent || false;

	process.env.SLAG_STRICT = _.isBoolean(options.strict) ? options.strict : true;

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
		options.platform !== 'android') {
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
	vm.runInContext(code, context);

	return context;
};
module.exports = slag;