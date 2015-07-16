var _ = require('lodash'),
	acorn = require('acorn'),
	backbone = require('./lib/vendor/backbone-0.9.2'),
	escodegen = require('escodegen'),
	fs = require('fs'),
	path = require('path');

var apis = require('./Titanium_4.1.0.GA.json'),
	root = path.join(__dirname, 'lib', 'titanium', '4.1.0.GA'),
	isAlloy = false;
/* var apis = require('./Alloy_1.6.2.json'),
	root = path.join(__dirname, 'lib', 'alloy', '1.6.2'),
	isAlloy = true; */

_.each(apis, function(api, namespace){
	var code = '',
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

	var properties = [];
	_.each(api.properties, function(item){
		if (item.deprecated) {
			properties.push('\tif(properties.' + item.name + ') { throw new Error(\'' + namespace.replace(/^Titanium/, 'Ti') + '.' + item.name + ' was deprecated, since ' + item.deprecated.since + '\'); }');
		} else if (item.name === 'apiName') {
			properties.push('\tthis.' + item.name + ' = \'' + namespace.replace(/^Titanium/, 'Ti') + '\';'); 
		} else {
			var defaults = '';

			if (_.isArray(item.type)) {
				item.type = item.type[0];
			}

			switch (true) {
				case /void/.test(item.type):
					defaults = undefined;
					break;
				case /Point/.test(item.type):
					defaults = '{ x: 0, y: 0 }';
					break;
				case /Dimension/.test(item.type):
					defaults = '{ x: 0, y: 0, width: 0, height: 0 }';
					break;
				case /Boolean/.test(item.type):
					defaults = 'true';
					break;
				case /String/.test(item.type):
					defaults = '\'\'';
					break;
				case /Number/.test(item.type):
					defaults = '0';
					break;
				case /Date/.test(item.type):
					defaults = 'new Date()';
					break;
				case /Gradient/.test(item.type):
					defaults = '{}';
					break;
				case /Array.*/.test(item.type):
					defaults = '[]';
					break;
				case /Titanium.*/.test(item.type):
				case /titleAttributesParams/.test(item.type):
					defaults = '{}';
					break;
				default:
					defaults = '{}';
			}

			properties.push('\tthis.' + item.name + ' = properties.' + item.name + ' || ' + defaults + ';');
		}
	});

	code += 'function ' + apiname + '(properties) {\n\tproperties = properties || {};\n\n';
	code += properties.join('\n');
	code += '\n\treturn this;\n}\n\n';

	if (isAlloy) {
		if (apiname === 'Controller' || apiname === 'Widget') {
			_.each(_.keys(backbone.Events), function(event){
				api.method.push({
					name: event,
					returns: {
						type: 'void'
					},
					description: '',
					parameters: [],
					filename: ''
				});
			});
		} else if (apiname === 'Collections') {
			_.each(_.keys(backbone.Collection.prototype), function(event){
				api.method.push({
					name: event,
					returns: {
						type: 'void'
					},
					description: '',
					parameters: [],
					filename: ''
				});
			});
		} else if (apiname === 'Models') {
			_.each(_.keys(backbone.Model.prototype), function(event){
				api.method.push({
					name: event,
					returns: {
						type: 'void'
					},
					description: '',
					parameters: [],
					filename: ''
				});
			});
		}
	}

	var methods = [];
	_.each(api.methods, function(item){
//	_.each(api.method, function(item){
		if (item.name === 'applyProperties') {
			methods.push(apiname + '.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };');
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

		if (isAlloy && namespace === 'Alloy.Controller' && item.name === 'getView') {
			methods.push(apiname + '.prototype.' + item.name + ' = function(params){ return require(\'../TiProxy\'); };');
			return;
		}

		if (item.deprecated) {
			methods.push(apiname + '.prototype.' + item.name + ' = function(){ throw new Error(\'' + namespace.replace(/^Titanium/, 'Ti') + '.' + item.name + ' was deprecated, since ' + item.deprecated.since + '\'); };');
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

		var returns = '';

		if (_.isArray(item.returns)) {
			item.returns = {
				type: item.returns[0].type
			};
		}

		switch (true) {
			case /void/.test(item.returns.type):
				break;
			case /Point/.test(item.returns.type):
				returns = ' return { x: 0, y: 0 }; ';
				break;
			case /Dimension/.test(item.returns.type):
				returns = ' return { x: 0, y: 0, width: 0, height: 0 }; ';
				break;
			case /Boolean/.test(item.returns.type):
				returns = ' return true; ';
				break;
			case /String/.test(item.returns.type):
				returns = ' return \'\'; ';
				break;
			case /Number/.test(item.returns.type):
				returns = ' return 0; ';
				break;
			case /Date/.test(item.returns.type):
				returns = ' return new Date(); ';
				break;
			case /Gradient/.test(item.returns.type):
				returns = ' return {}; ';
				break;
			case /Array.*/.test(item.returns.type):
				returns = ' return []; ';
				break;
			case /Titanium.*/.test(item.returns.type):
			case /titleAttributesParams/.test(item.returns.type):
				returns = ' return {}; ';
				break;
			default:
				returns = ' return {}; ';
		}

		var guessprop = item.name.length > 3 ? item.name[3].toLowerCase() + item.name.substr(4) : '';

		if (/set.+/.test(item.name) && _.indexOf(properties, guessprop) > -1) {
			methods.push(apiname + '.prototype.' + item.name + ' = function(property){ this.' + guessprop + ' = property; };');
		} else if (/get.+/.test(item.name) && _.indexOf(properties, guessprop) > -1) {
			methods.push(apiname + '.prototype.' + item.name + ' = function(){ return this.' + guessprop + '; };');
		} else {
			methods.push(apiname + '.prototype.' + item.name + ' = function(){' + returns + '};');
		}
	});
	code += methods.join('\n\n');

	code += '\n\nmodule.exports = function(properties){ return new ' + apiname + '(properties); };';

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