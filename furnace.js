var _ = require('lodash'),
	acorn = require('acorn'),
	escodegen = require('escodegen'),
	fs = require('fs'),
	path = require('path');

var apis = require('./Titanium_4.0.0.GA.json'),
	root = path.join(__dirname, 'lib', 'titanium', '4.0.0.GA');

function getType(type) {
	var result;

	switch (true) {
		case /void/.test(type):
			result = undefined;
			break;
		case /Point/.test(type):
			result = '{ x: 0, y: 0 }';
			break;
		case /Dimension/.test(type):
			result = '{ x: 0, y: 0, width: 0, height: 0 }';
			break;
		case /Boolean/.test(type):
			result = 'true';
			break;
		case /String/.test(type):
			result = '\'\'';
			break;
		case /Number/.test(type):
			result = '0';
			break;
		case /Date/.test(type):
			result = 'new Date()';
			break;
		case /Gradient/.test(type):
			result = '{}';
			break;
		case /Array.*/.test(type):
			result = '[]';
			break;
		case /Titanium.*/.test(type):
		case /titleAttributesParams/.test(type):
			result = '{}';
			break;
		default:
			result = '{}';
	}

	return result;
}

_.each(apis, function(api, namespace){
	var code = 'var crypto = require(\'crypto\');',
		namespaces = namespace.split('.');

	var dir = root;
	for (var i = 0; i < namespaces.length - 1; i++) {
		dir = path.join(dir, namespaces[i]);

		if (!fs.existsSync(dir)) {
			fs.mkdirSync(dir);
		}
	}

	var apiname = namespaces[namespaces.length - 1];
	if (apiname === '2DMatrix') {
		apiname = 'TwoDMatrix';
	} else if (apiname === '3DMatrix') {
		apiname = 'ThreeDMatrix';
	}

	if (apiname === 'CoreMotionRotationMatrix') {
		_.each(api.properties, function(item, index){
			if (item.name === 'm11-m33') {
				api.properties.splice(index, 1);

				_.each(['m11', 'm12', 'm13', 'm21', 'm22', 'm23', 'm31', 'm32', 'm33'], function(m){
					api.properties.push(_.cloneDeep(_.extend(item, {
						name: m
					})));
				});
			}
		});
	}

	var properties = [],
		names = [];

	_.each(api.properties, function(item){
		var platforms = [];

		_.each(item.platforms, function(platform){
			if (platform.name === 'iphone' || platform.name === 'ipad') {
				platform.name = 'ios';
			}

			if (_.indexOf(platforms, '\'' + platform.name + '\'') === -1) {
				platforms.push('\'' + platform.name + '\'');
			}
		});

		names.push('\'' + item.name + '\'');

		if (item.name === 'apiName') {
			properties.push('if (__SLAG_PROPERTIES.' + item.name + ') { throw new Error(\'' + namespace.replace(/^Titanium/, 'Ti') + '.' + item.name + ' is read only property\'); }');
			properties.push('this.' + item.name + ' = \'' + namespace.replace(/^Titanium/, 'Ti') + '\';'); 
		} else {
			if (item.deprecated) {
				properties.push('if (__SLAG_PROPERTIES.' + item.name + ') { throw new Error(\'' + namespace.replace(/^Titanium/, 'Ti') + '.' + item.name + ' was deprecated, since ' + item.deprecated.since + '\'); }');
				return;
			}

			if (_.isArray(item.type)) {
				item.type = item.type[0];
			}

			var defaults = getType(item.type);

			if (namespace === 'Titanium.Platform' && (item.name === 'name' || item.name === 'osname' || item.name === 'model' || item.name === 'version' || item.name === 'architecture' || item.name === 'ostype')) {
				properties.push('if (__SLAG_PROPERTIES.' + item.name + ') { throw new Error(\'' + namespace.replace(/^Titanium/, 'Ti') + '.' + item.name + ' is read only property\'); }');
				properties.push('if ([' + platforms.join(', ') + '].indexOf(process.env.SLAG_PLATFORM) === -1) { this.' + item.name + ' = undefined; } else { this.' + item.name + ' = __SLAG_DEVICE.' + item.name + ' || ' + defaults + '; }');
				return;
			}

			if (namespace === 'Titanium.Platform.DisplayCaps' && (item.name === 'density' || item.name === 'dpi' || item.name === 'platformWidth' || item.name === 'platformHeight')) {
				properties.push('if (__SLAG_PROPERTIES.' + item.name + ') { throw new Error(\'' + namespace.replace(/^Titanium/, 'Ti') + '.' + item.name + ' is read only property\'); }');
				properties.push('if ([' + platforms.join(', ') + '].indexOf(process.env.SLAG_PLATFORM) === -1) { this.' + item.name + ' = undefined; } else { this.' + item.name + ' = __SLAG_DEVICE.displayCaps.' + item.name + ' || ' + defaults + '; }');
				return;
			}

			if (item.permission && item.permission === 'read-only') {
				properties.push('if (__SLAG_PROPERTIES.' + item.name + ') { throw new Error(\'' + namespace.replace(/^Titanium/, 'Ti') + '.' + item.name + ' is read only property\'); }');
				properties.push('if ([' + platforms.join(', ') + '].indexOf(process.env.SLAG_PLATFORM) === -1) { this.' + item.name + ' = undefined; } else { this.' + item.name + ' = ' + defaults + '; }');
			} else {
				properties.push('if ([' + platforms.join(', ') + '].indexOf(process.env.SLAG_PLATFORM) === -1) { this.' + item.name + ' = undefined; } else { this.' + item.name + ' = __SLAG_PROPERTIES.' + item.name + ' || ' + defaults + '; }');
			}
		}
	});

	if (namespace === 'Titanium.App.Properties') {
		properties.push('this.__SLAG_SIMULATE_PROPERTIES = {};');
	}

	if (namespace === 'Titanium.Database.ResultSet') {
		properties.push('this.__SLAG_SIMULATE_IS_VALID_ROW = true;');
	}

	names.push('\'id\'');
	properties.push('this.id = __SLAG_PROPERTIES.id || \'\';');

	code += 'function ' + apiname + '(__SLAG_PROPERTIES) {';
	code += '__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};';
	code += 'var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);';
	code += 'var __SLAG_CHECKS = [], __SLAG_NAMES = [' + names.join(', ') + '];';
	code += 'if (__SLAG_NAMES.length > 0 && process.env.SLAG_STRICT === \'true\') { for (var __SLAG_NAME in __SLAG_PROPERTIES) { if (__SLAG_NAMES.indexOf(__SLAG_NAME) === -1) { throw new Error(\'Use user custom property \' + __SLAG_NAME); } } } else if (__SLAG_NAMES.length === 0 && __SLAG_PROPERTIES.length > 0 && process.env.SLAG_STRICT === \'true\') { throw new Error(\'Use user custom properties. \' + __SLAG_PROPERTIES.join(\', \')); }';
	code += 'var md5 = crypto.createHash(\'md5\'); md5.update(crypto.randomBytes(32), \'binary\');';
	code += 'this.__SLAG_ID = md5.digest(\'hex\');';
	code += 'this.__SLAG_PARENT;';
	code += properties.join('');
	code += 'return this; }';

	var methods = [];

	_.each(api.methods, function(item){
		var platforms = [];

		_.each(item.platforms, function(platform){
			if (platform.name === 'iphone' || platform.name === 'ipad') {
				platform.name = 'ios';
			}

			if (_.indexOf(platforms, '\'' + platform.name + '\'') === -1) {
				platforms.push('\'' + platform.name + '\'');
			}
		});

		if (item.deprecated) {
			methods.push(apiname + '.prototype.' + item.name + ' = function(){ throw new Error(\'' + namespace.replace(/^Titanium/, 'Ti') + '.' + item.name + ' was deprecated, since ' + item.deprecated.since + '\'); };');
			return;
		}

		if (item.name === 'getChildren') {
			methods.push(apiname + '.prototype.getParent = function(){ return this.__SLAG_PARENT; };');
		}

		if (item.name === 'add' && _.indexOf(names, '\'children\'') > -1) {
			methods.push(apiname + '.prototype.add = function(__SLAG_PARAMETER){ this.children.push(__SLAG_PARAMETER); __SLAG_PARAMETER.__SLAG_PARENT = this; };');
			return;
		}

		if (item.name === 'remove' && _.indexOf(names, '\'children\'') > -1) {
			methods.push(apiname + '.prototype.remove = function(__SLAG_PARAMETER){ for (var __SLAG_COUNTER = 0; __SLAG_COUNTER < this.children.length; __SLAG_COUNTER++) { if (this.children[__SLAG_COUNTER].__SLAG_ID === __SLAG_PARAMETER.__SLAG_ID) { this.children.splice(__SLAG_COUNTER, 1); break; } } __SLAG_PARAMETER.__SLAG_PARENT = undefined; };');
			return;
		}

		if (item.name === 'applyProperties') {
			methods.push(apiname + '.prototype.applyProperties = function(__SLAG_PROPERTIES){ for (var __SLAG_NAME in __SLAG_PROPERTIES) { this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME]; } };');
			return;
		}

		if (namespace === 'Titanium.App.Properties' && (item.name === 'getBool' || item.name === 'getDouble' || item.name === 'getInt' || item.name === 'getList' || item.name === 'getObject' || item.name === 'getString')) {
			methods.push(apiname + '.prototype.' + item.name + ' = function(__SLAG_PROPERTY, __SLAG_DEFAULT){ if ([' + platforms.join(', ') + '].indexOf(process.env.SLAG_PLATFORM) === -1) { throw new Error(\'This method is not support specified platform\'); } ' +
				'if (this.__SLAG_SIMULATE_PROPERTIES.hasOwnProperty(__SLAG_PROPERTY)) { return this.__SLAG_SIMULATE_PROPERTIES[__SLAG_PROPERTY]; } else { return __SLAG_DEFAULT || null; } };');
			return;
		}

		if (namespace === 'Titanium.App.Properties' && (item.name === 'setBool' || item.name === 'setDouble' || item.name === 'setInt' || item.name === 'setList' || item.name === 'setObject' || item.name === 'setString')) {
			methods.push(apiname + '.prototype.' + item.name + ' = function(__SLAG_PROPERTY, __SLAG_VALUE){ if ([' + platforms.join(', ') + '].indexOf(process.env.SLAG_PLATFORM) === -1) { throw new Error(\'This method is not support specified platform\'); } ' +
				'this.__SLAG_SIMULATE_PROPERTIES[__SLAG_PROPERTY] = __SLAG_VALUE; };');
			return;
		}

		if (namespace === 'Titanium.App.Properties' && item.name === 'hasProperty') {
			methods.push(apiname + '.prototype.' + item.name + ' = function(__SLAG_PROPERTY){ if ([' + platforms.join(', ') + '].indexOf(process.env.SLAG_PLATFORM) === -1) { throw new Error(\'This method is not support specified platform\'); } ' +
				'if (this.__SLAG_SIMULATE_PROPERTIES.hasOwnProperty(__SLAG_PROPERTY)) { return true; } else { return false; } };');
			return;
		}

		if (namespace === 'Titanium.App.Properties' && item.name === 'listProperties') {
			methods.push(apiname + '.prototype.' + item.name + ' = function(){ if ([' + platforms.join(', ') + '].indexOf(process.env.SLAG_PLATFORM) === -1) { throw new Error(\'This method is not support specified platform\'); } ' +
				'return Object.keys(this.__SLAG_SIMULATE_PROPERTIES) };');
			return;
		}

		if (namespace === 'Titanium.App.Properties' && item.name === 'removeProperty') {
			methods.push(apiname + '.prototype.' + item.name + ' = function(__SLAG_PROPERTY){ if ([' + platforms.join(', ') + '].indexOf(process.env.SLAG_PLATFORM) === -1) { throw new Error(\'This method is not support specified platform\'); } ' +
				'delete this.__SLAG_SIMULATE_PROPERTIES[__SLAG_PROPERTY] };');
			return;
		}

		var childPath,
			childFile;

		if (namespace === 'Titanium.Database' && item.name === 'open') {
			childPath = path.join(namespaces[namespaces.length - 1], 'DB');

			if (item.deprecated) {
				methods.push(apiname + '.prototype.' + item.name + ' = function(){ throw new Error(\'' + namespace.replace(/^Titanium/, 'Ti') + '.' + item.name + ' was deprecated, since ' + item.deprecated.since + '\'); };');
			} else {
				methods.push(apiname + '.prototype.' + item.name + ' = function(__SLAG_PROPERTY){ if ([' + platforms.join(', ') + '].indexOf(process.env.SLAG_PLATFORM) === -1) { throw new Error(\'This method is not support specified platform\'); } var DB = require(\'./' + childPath + '\'); return DB(); };');
			}

			return;
		}

		if (namespace === 'Titanium.Database.DB' && item.name === 'execute') {
			if (item.deprecated) {
				methods.push(apiname + '.prototype.' + item.name + ' = function(){ throw new Error(\'' + namespace.replace(/^Titanium/, 'Ti') + '.' + item.name + ' was deprecated, since ' + item.deprecated.since + '\'); };');
			} else {
				methods.push(apiname + '.prototype.' + item.name + ' = function(__SLAG_PROPERTY){ if ([' + platforms.join(', ') + '].indexOf(process.env.SLAG_PLATFORM) === -1) { throw new Error(\'This method is not support specified platform\'); } var ResultSet = require(\'./ResultSet\'); return ResultSet(); };');
			}

			return;
		}

		if (namespace === 'Titanium.Database.ResultSet' && item.name === 'isValidRow') {
			if (item.deprecated) {
				methods.push(apiname + '.prototype.' + item.name + ' = function(){ throw new Error(\'' + namespace.replace(/^Titanium/, 'Ti') + '.' + item.name + ' was deprecated, since ' + item.deprecated.since + '\'); };');
			} else {
				methods.push(apiname + '.prototype.' + item.name + ' = function(){ if ([' + platforms.join(', ') + '].indexOf(process.env.SLAG_PLATFORM) === -1) { throw new Error(\'This method is not support specified platform\'); } var __SLAG_SIMULATE_IS_VALID_ROW = this.__SLAG_SIMULATE_IS_VALID_ROW; this.__SLAG_SIMULATE_IS_VALID_ROW = !this.__SLAG_SIMULATE_IS_VALID_ROW; return __SLAG_SIMULATE_IS_VALID_ROW; };');
			}

			return;
		}

		if (/^create.+/.test(item.name)) {
			childFile = item.name.replace(/^create/, '');
			childPath = path.join(namespaces[namespaces.length - 1], childFile);

			if (childFile === '2DMatrix') {
				childFile = 'TwoDMatrix';
			} else if (childFile === '3DMatrix') {
				childFile = 'ThreeDMatrix';
			} else if (childFile === 'BroadcastIntent' ||
				childFile === 'IntentChooser' ||
				childFile === 'ServiceIntent') {
				childFile = 'Intent';
				childPath = path.join(namespaces[namespaces.length - 1], childFile);
			}

			if (item.deprecated) {
				methods.push(apiname + '.prototype.' + item.name + ' = function(){ throw new Error(\'' + namespace.replace(/^Titanium/, 'Ti') + '.' + item.name + ' was deprecated, since ' + item.deprecated.since + '\'); };');
			} else {
				methods.push(apiname + '.prototype.' + item.name + ' = function(__SLAG_PROPERTY){ if ([' + platforms.join(', ') + '].indexOf(process.env.SLAG_PLATFORM) === -1) { throw new Error(\'This method is not support specified platform\'); } var ' + childFile + ' = require(\'./' + childPath + '\'); return ' + childFile + '(__SLAG_PROPERTY); };');
			}

			return;
		}

		if (apiname === 'API' &&
			(item.name === 'debug' || item.name === 'error' || item.name === 'info' ||
			item.name === 'log' || item.name === 'trace' || item.name === 'warn')) {
			if (item.name === 'debug') {
				methods.push(apiname + '.prototype.' + item.name + ' = function(__SLAG_PARAMETER){ console.info(__SLAG_PARAMETER); };');
			} else {
				methods.push(apiname + '.prototype.' + item.name + ' = function(__SLAG_PARAMETER){ console.' + item.name + '(__SLAG_PARAMETER); };');
			}
			return;
		}

		if (_.isArray(item.returns)) {
			item.returns = {
				type: item.returns[0].type
			};
		}

		var returns = getType(item.returns.type),
			guessprop = item.name.length > 3 ? item.name[3].toLowerCase() + item.name.substr(4) : '';

		if (/void/.test(item.returns.type)) {
			returns = '';
		} else {
			returns = 'return ' + returns + ';';
		}

		if (/^set[A-Z0-9]/.test(item.name) && _.indexOf(names, '\'' + guessprop + '\'') > -1) {
			methods.push(apiname + '.prototype.' + item.name + ' = function(__SLAG__PROPERTY){ if ([' + platforms.join(', ') + '].indexOf(process.env.SLAG_PLATFORM) === -1) { throw new Error(\'This method is not support specified platform\'); } this.' + guessprop + ' = __SLAG__PROPERTY; };');
		} else if (/^get[A-Z0-9]/.test(item.name) && _.indexOf(names, '\'' + guessprop + '\'') > -1) {
			methods.push(apiname + '.prototype.' + item.name + ' = function(){ if ([' + platforms.join(', ') + '].indexOf(process.env.SLAG_PLATFORM) === -1) { throw new Error(\'This method is not support specified platform\'); } return this.' + guessprop + '; };');
		} else {
			methods.push(apiname + '.prototype.' + item.name + ' = function(){ if ([' + platforms.join(', ') + '].indexOf(process.env.SLAG_PLATFORM) === -1) { throw new Error(\'This method is not support specified platform\'); } ' + returns + ' };');
		}
	});
	code += methods.join('');

	code += 'module.exports = function(properties){ return new ' + apiname + '(properties); };';

	var ast = acorn.parse(code);
	code = escodegen.generate(ast, {
		format: {
			indent: {
				style: '\t'
			}
		}
	});

	fs.writeFileSync(path.join(dir, namespaces[namespaces.length - 1] + '.js'), code);
});