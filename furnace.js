var _ = require('lodash'),
	acorn = require('acorn'),
	escodegen = require('escodegen'),
	fs = require('fs'),
	path = require('path');

var apis = require('./Titanium_3.5.1.GA.json'),
	root = path.join(__dirname, 'lib', 'titanium', '3.5.1.GA');

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
		names.push('\'' + item.name + '\'');

		if (item.name === 'apiName') {
			properties.push('if (__SLAG__properties.' + item.name + ') { throw new Error(\'' + namespace.replace(/^Titanium/, 'Ti') + '.' + item.name + ' is read only property\'); }');
			properties.push('this.' + item.name + ' = \'' + namespace.replace(/^Titanium/, 'Ti') + '\';'); 
		} else {
			if (item.deprecated) {
				properties.push('if (__SLAG__properties.' + item.name + ') { throw new Error(\'' + namespace.replace(/^Titanium/, 'Ti') + '.' + item.name + ' was deprecated, since ' + item.deprecated.since + '\'); }');
				return;
			}

			if (_.isArray(item.type)) {
				item.type = item.type[0];
			}

			var defaults = getType(item.type);

			if (item.permission && item.permission === 'read-only') {
				properties.push('if (__SLAG__properties.' + item.name + ') { throw new Error(\'' + namespace.replace(/^Titanium/, 'Ti') + '.' + item.name + ' is read only property\'); }');
				properties.push('this.' + item.name + ' = ' + defaults + ';');
			} else {
				properties.push('this.' + item.name + ' = __SLAG__properties.' + item.name + ' || ' + defaults + ';');
			}
		}
	});

	names.push('\'id\'');
	properties.push('this.id = __SLAG__properties.id || \'\';');

	code += 'function ' + apiname + '(__SLAG__properties) {';
	code += '__SLAG__properties = __SLAG__properties || {};';
	code += 'var __SLAG__checks = [], __SLAG__names = [' + names.join(', ') + '];';
	code += 'if (__SLAG__names.length > 0 && process.env.SLAG_STRICT === \'true\') { for (var __SLAG__name in __SLAG__properties) { if (__SLAG__names.indexOf(__SLAG__name) === -1) { throw new Error(\'Use user custom property \' + __SLAG__name); } } } else if (__SLAG__names.length === 0 && __SLAG__properties.length > 0 && process.env.SLAG_STRICT === \'true\') { throw new Error(\'Use user custom properties. \' + __SLAG__properties.join(\', \')); }';
	code += 'var md5 = crypto.createHash(\'md5\'); md5.update(crypto.randomBytes(32), \'binary\');';
	code += 'this.__SLAG_ID = md5.digest(\'hex\');';
	code += 'this.__SLAG_PARENT;';
	code += properties.join('');
	code += 'return this; }';

	var methods = [];

	_.each(api.methods, function(item){
		if (item.deprecated) {
			methods.push(apiname + '.prototype.' + item.name + ' = function(){ throw new Error(\'' + namespace.replace(/^Titanium/, 'Ti') + '.' + item.name + ' was deprecated, since ' + item.deprecated.since + '\'); };');
			return;
		}

		if (item.name === 'getChildren') {
			methods.push(apiname + '.prototype.getParent = function(){ return this.__SLAG_PARENT; };');
		}

		if (item.name === 'add' && _.indexOf(names, '\'children\'') > -1) {
			methods.push(apiname + '.prototype.add = function(params){ this.children.push(params); params.__SLAG_PARENT = this; };');
			return;
		}

		if (item.name === 'remove' && _.indexOf(names, '\'children\'') > -1) {
			methods.push(apiname + '.prototype.remove = function(params){ for (var __SLAG_COUNTER = 0; __SLAG_COUNTER < this.children.length; __SLAG_COUNTER++) { if (this.children[__SLAG_COUNTER].__SLAG_ID === params.__SLAG_ID) { this.children.splice(__SLAG_COUNTER, 1); break; } } params.__SLAG_PARENT = undefined; };');
			return;
		}

		if (item.name === 'applyProperties') {
			methods.push(apiname + '.prototype.applyProperties = function(params){ for (var __SLAG__name in params) { this[__SLAG__name] = params[__SLAG__name]; } };');
			return;
		}

		if (/^create.+/.test(item.name)) {
			var childFile = item.name.replace(/^create/, ''),
				childPath = path.join(namespaces[namespaces.length - 1], childFile);

			if (childFile === '2DMatrix') {
				childFile = 'TwoDMatrix';
			} else if (childFile === '3DMatrix') {
				childFile = 'ThreeDMatrix';
			}

			if (item.deprecated) {
				methods.push(apiname + '.prototype.' + item.name + ' = function(){ throw new Error(\'' + namespace.replace(/^Titanium/, 'Ti') + '.' + item.name + ' was deprecated, since ' + item.deprecated.since + '\'); };');
			} else {
				methods.push(apiname + '.prototype.' + item.name + ' = function(params){ var ' + childFile + ' = require(\'./' + childPath + '\'); return ' + childFile + '(params); };');
			}

			return;
		}

		if (apiname === 'API' &&
			(item.name === 'debug' || item.name === 'error' || item.name === 'info' ||
			item.name === 'log' || item.name === 'trace' || item.name === 'warn')) {
			if (item.name === 'debug') {
				methods.push(apiname + '.prototype.' + item.name + ' = function(params){ console.info(params); };');
			} else {
				methods.push(apiname + '.prototype.' + item.name + ' = function(params){ console.' + item.name + '(params); };');
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
			methods.push(apiname + '.prototype.' + item.name + ' = function(property){ this.' + guessprop + ' = property; };');
		} else if (/^get[A-Z0-9]/.test(item.name) && _.indexOf(names, '\'' + guessprop + '\'') > -1) {
			methods.push(apiname + '.prototype.' + item.name + ' = function(){ return this.' + guessprop + '; };');
		} else {
			methods.push(apiname + '.prototype.' + item.name + ' = function(){ ' + returns + ' };');
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