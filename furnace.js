var _ = require('lodash'),
	fs = require('fs'),
	path = require('path');

var apis = require('./api_3.5.1.GA.json'),
	root = path.join(__dirname, 'sdk', '3.5.1.GA');

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

	var properties = [];
	_.each(api.properties, function(item){
		properties.push(item.name);
	});

	code += 'function ' + apiname + '(properties) {\n\tproperties = properties || {};\n\n';
	_.each(properties, function(item){
		if (item === 'apiName') {
			code += '\tthis.' + item + ' = \'' + namespace + '\';\n'; 
		} else {
			code += '\tthis.' + item + ' = properties.' + item + ' || undefined;\n'; 
		}
	});
	code += '\n\treturn this;\n}\n\n';

	var methods = [];
	_.each(api.methods, function(item){
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

			methods.push(apiname + '.prototype.' + item.name + ' = function(params){ var ' + childFile + ' = require(\'./' + childPath + '\'); return ' + childFile + '(params); };');
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
				return ' return {}; ';
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

	fs.writeFileSync(path.join(dir, namespaces[namespaces.length - 1] + '.js'), code);
});