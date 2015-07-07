var _ = require('lodash'),
	fs = require('fs'),
	path = require('path'),
	vm = require('vm');

module.exports = function(file, options){
	// options
	options = options || {};
	options.titanium = options.titanium || null;
	options.alloy = options.alloy || null;
	options.platform = options.platform || null;
	options.module = options.module || {};
	options.backbone = options.backbone || '0.9.2';
	options.silent = options.silent || false;

	var titaniumpath,
		titanium,
		Titanium,
		alloypath,
		alloy,
		Alloy;

	// check file path the JavaScript file
	if (!fs.existsSync(file)) {
		throw new Error('File does not exist ' + file);
	}

	// check the Titanium SDK version
	titaniumpath = path.join(__dirname, 'lib', 'titanium', options.titanium + '.js');
	if (!fs.existsSync(titaniumpath)) {
		throw new Error('Invalid SDK version ' + options.titanium);
	}

	// check the Alloy version
	if (options.alloy) {
		alloypath = path.join(__dirname, 'lib', 'alloy', options.alloy + '.js');

		if (!fs.existsSync(alloypath)) {
			throw new Error('Invalid Alloy version ' + options.alloy);
		}
	}

	// check the platform
	if (options.platform !== 'ios' &&
		options.platform !== 'android') {
		throw new Error('Invalid platform specified ' + options.platform);
	} else if (options.platform === 'ios') {
		// ios is iphone
		options.platform = 'iphone';
	}

	// load the Titanium SDK
	titanium = require(titaniumpath);
	Titanium = titanium(path.join(__dirname, 'lib', 'titanium', options.titanium), {
		version: options.titanium.replace(/\.GA$/, ''),
		platform: options.platform
	});

	// load the Alloy
	if (alloypath) {
		alloy = require(alloypath);
		Alloy = alloy(path.join(__dirname, 'lib', 'alloy', options.alloy));

		// load the Backbone.js and Underscore.js
		_.extend(options.module, {
			alloy: _.extend(Alloy, {
				Backbone: require(path.join(__dirname, 'lib', 'vendor', 'backbone-' + options.backbone)),
				_: require(path.join(__dirname, 'lib', 'vendor', 'underscore-1.6.0'))
			})
		});

		// extend "Alloy" namespace 
		if (_.has(options.module, 'Alloy')) {
			_.extend(options.module.alloy, options.module.Alloy);
			delete options.module.Alloy;
		}
	}

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

				if (fs.existsSync(source)) {
					newcontext = createContext();
					vm.runInContext(fs.readFileSync(source, 'utf8'), newcontext);

					return _.isEmpty(newcontext.exports) ? newcontext.module.exports : newcontext.exports;
				} else if (_.has(options.module, original)) {
					return options.module[original];
				} else if (alloypath && original === 'alloy/controllers/BaseController') {
					source = path.resolve(path.join(__dirname, 'lib', 'alloy', options.alloy, 'BaseController.js'));

					if (fs.existsSync(source)) {
						newcontext = createContext();
						vm.runInContext(fs.readFileSync(source, 'utf8'), newcontext);

						return _.isEmpty(newcontext.exports) ? newcontext.module.exports : newcontext.exports;
					} else {
						throw new Error('Unknown module detect ' + source);
					}
				} else {
					throw new Error('Unknown module detect ' + original);
				}
			}
		});

		return context;
	}

	// running in vm
	var context = createContext();
	vm.runInContext(fs.readFileSync(file, 'utf8'), context);

	return context;
};