var _ = require('lodash'),
	fs = require('fs'),
	path = require('path'),
	vm = require('vm');

module.exports = function(file, sdk, platform){
	var sdkpath = path.join(__dirname, 'lib', sdk + '.js');

	if (!fs.existsSync(file)) {
		throw new Error('File does not exist ' + file);
	}

	if (!fs.existsSync(sdkpath)) {
		throw new Error('Invalid SDK version ' + sdk);
	}

	if (platform !== 'ios' &&
		platform !== 'android') {
		throw new Error('Invalid platform specified ' + platform);
	} else if (platform === 'ios') {
		platform = 'iphone';
	}

	var titanium = require(sdkpath),
		Titanium = titanium(path.join(__dirname, 'sdk', sdk), {
			version: sdk.replace(/\.GA$/, ''),
			platform: platform
		});

	function createContext() {
		var context = vm.createContext({
			Titanium: Titanium,
			Ti: Titanium,
			L: function(params){
				return params;
			},
			String: _.extend(String, {
				format: function(params){ return params; },
				formatCurrency: function(params){ return params; },
				formatDate: function(params){ return params; },
				formatDecimal: function(params){ return params; },
				formatTime: function(params){ return params; }
			}),
			JSON: JSON,
			console: console,
			alert: function(params){
				console.log(params);
			},
			exports: {},
			module: module,
			require: function(original){
				var source = path.resolve(path.join(path.dirname(file), original + '.js'));

				if (fs.existsSync(source)) {
					var context = createContext();
					vm.runInContext(fs.readFileSync(source, 'utf8'), context);

					return _.isEmpty(context.exports) ? context.module.exports : context.exports;
				} else {
					throw new Error('Unknown module detect ' + original);
				}
			}
		});

		return context;
	}

	var context = createContext();
	vm.runInContext(fs.readFileSync(file, 'utf8'), context);

	return context;
};