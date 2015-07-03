var _ = require('lodash'),
	fs = require('fs'),
	path = require('path'),
	vm = require('vm');

module.exports = function(file, version, platform, modules){
	var alloyversion,
		alloypath,
		alloy,
		Alloy;

	// version check
	if (Object.prototype.toString.apply(version).slice(8, -1) === 'Object') {
		// has Alloy
		if (_.has(version, 'alloy')) {
			alloyversion = version.alloy;
		}

		if (_.has(version, 'titanium')) {
			version = version.titanium;
		}
	}

	var sdkpath = path.join(__dirname, 'lib', 'titanium', version + '.js');

	// check file path the JavaScript file
	if (!fs.existsSync(file)) {
		throw new Error('File does not exist ' + file);
	}

	// check the Titanium SDK version
	if (!fs.existsSync(sdkpath)) {
		throw new Error('Invalid SDK version ' + version);
	}

	// check the Alloy version
	if (alloyversion) {
		alloypath = path.join(__dirname, 'lib', 'alloy', alloyversion + '.js');

		if (!fs.existsSync(alloypath)) {
			throw new Error('Invalid Alloy version ' + alloyversion);
		}
	}

	// check the platform
	if (platform !== 'ios' &&
		platform !== 'android') {
		throw new Error('Invalid platform specified ' + platform);
	} else if (platform === 'ios') {
		// ios is iphone
		platform = 'iphone';
	}

	modules = modules || {};

	// module check
	if (Object.prototype.toString.apply(modules).slice(8, -1) !== 'Object') {
		throw new Error('Invalid modules specified ' + JSON.stringify(modules));
	}

	// load the Titanium SDK
	var titanium = require(sdkpath),
		Titanium = titanium(path.join(__dirname, 'lib', 'titanium', version), {
			version: version.replace(/\.GA$/, ''),
			platform: platform
		});

	// load the Alloy
	if (alloypath) {
		alloy = require(alloypath);
		Alloy = alloy(path.join(__dirname, 'lib', 'alloy', alloyversion));

		// load the Backbone.js and Underscore.js
		_.extend(modules, {
			alloy: _.extend(Alloy, {
				Backbone: require('backbone'),
				_: require('underscore')
			})
		});

		// extend "Alloy" namespace 
		if (_.has(modules, 'Alloy')) {
			_.extend(modules.alloy, modules.Alloy);
			delete modules.Alloy;
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
			console: console,
			alert: function(params){ console.log(params); },
			exports: {},
			module: module,
			require: function(original){
				var source = path.resolve(path.join(path.dirname(file), original + '.js')),
					newcontext;

				if (fs.existsSync(source)) {
					newcontext = createContext();
					vm.runInContext(fs.readFileSync(source, 'utf8'), newcontext);

					return _.isEmpty(newcontext.exports) ? newcontext.module.exports : newcontext.exports;
				} else if (_.has(modules, original)) {
					return modules[original];
				} else if (alloypath && original === 'alloy/controllers/BaseController') {
					source = path.resolve(path.join(__dirname, 'lib', 'alloy', alloyversion, 'BaseController.js'));

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