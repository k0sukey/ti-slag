var _ = require('lodash'),
	path = require('path'),
	slag = require('../index');

function loadUnderscore(args) {
	args = args || {};

	var underscore = slag(args.underscore, {
		titanium: args.titanium,
		platform: args.platform === 'iphone' ? 'ios' : args.platform
	});

	return underscore.exports;
}

function loadBackbone(args, underscore) {
	args = args || {};

	var backbone = slag(args.backbone, {
		titanium: args.titanium,
		platform: args.platform === 'iphone' ? 'ios' : args.platform,
		module: {
			'alloy/underscore': underscore
		}
	});

	return backbone.exports;
}

function loadConstants(args, underscore) {
	args = args || {};

	var constants = slag(args.constants, {
		titanium: args.titanium,
		platform: args.platform === 'iphone' ? 'ios' : args.platform,
		module: {
			'alloy/underscore': underscore
		}
	});

	return constants.exports;
}

function loadCommons(args) {
	args = args || {};

	var underscore = loadUnderscore(args),
		backbone = loadBackbone(args, underscore),
		constants = loadConstants(args, underscore),
		CFG = require(args.CFG);

	return {
		underscore: underscore,
		backbone: backbone,
		constants: constants,
		CFG: CFG
	};
}

var loadAlloy = function(args){
	args = args || {};

	var commons = loadCommons(args);

	var pre = slag(args.alloy, {
			titanium: args.titanium,
			platform: args.platform === 'iphone' ? 'ios' : args.platform,
			module: {
				'alloy/underscore': commons.underscore,
				'alloy/backbone': commons.backbone,
				'alloy/constants': commons.constants,
				'alloy/CFG': commons.CFG
			}
		}),
		alloy = slag(args.alloy, {
			titanium: args.titanium,
			platform: args.platform === 'iphone' ? 'ios' : args.platform,
			module: {
				alloy: pre.exports,
				'alloy/underscore': commons.underscore,
				'alloy/backbone': commons.backbone,
				'alloy/constants': commons.constants,
				'alloy/CFG': commons.CFG
			}
		});

	return alloy.exports;
};

var loadBaseController = function(args){
	args = args || {};

	var commons = loadCommons(args),
		alloy = loadAlloy(args);

	var basecontroller = slag(args.BaseController, {
		titanium: args.titanium,
		platform: args.platform === 'iphone' ? 'ios' : args.platform,
		module: {
			alloy: alloy,
			'alloy/underscore': commons.underscore,
			'alloy/backbone': commons.backbone,
			'alloy/constants': commons.constants,
			'alloy/CFG': commons.CFG
		}
	});

	return basecontroller.module.exports;
};

exports.load = function(args){
	args = args || {};

	var root = process.cwd();

	if (!_.has(args, 'platform')) {
		args.platform = 'iphone';
	} else if (args.platform === 'ios') {
		args.platform = 'iphone';
	}

	if (!_.has(args, 'titanium')) {
		args.titanium = '4.0.0.GA';
	}

	if (!_.has(args, 'alloy')) {
		args.alloy = path.join(root, 'Resources', args.platform, 'alloy.js');
	}

	if (!_.has(args, 'BaseController')) {
		args.BaseController = path.join(root, 'Resources', args.platform, 'alloy', 'controllers', 'BaseController.js');
	}

	if (!_.has(args, 'underscore')) {
		args.underscore = path.join(root, 'Resources', args.platform, 'alloy', 'underscore.js');
	}

	if (!_.has(args, 'backbone')) {
		args.backbone = path.join(root, 'Resources', args.platform, 'alloy', 'backbone.js');
	}

	if (!_.has(args, 'constants')) {
		args.constants = path.join(root, 'Resources', args.platform, 'alloy', 'constants.js');
	}

	if (!_.has(args, 'CFG')) {
		args.CFG = path.join(root, 'Resources', 'alloy', 'CFG.js');
	}

	return {
		core: loadAlloy(args),
		BaseController: loadBaseController(args)
	};
};