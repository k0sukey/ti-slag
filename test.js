/* global describe: true, it: true */

var _ = require('lodash'),
	assert = require('assert'),
	path = require('path'),
	slag = require('./'),
	alloy = require('./lib/Alloy');

describe('ti-slag', function(){
	var appjs = path.join(__dirname, 'test', 'classic', 'Resources', 'app.js'),
		iosjs = path.join(__dirname, 'test', 'classic', 'Resources', 'ios.js'),
		andjs = path.join(__dirname, 'test', 'classic', 'Resources', 'android.js'),
		modjs = path.join(__dirname, 'test', 'classic', 'Resources', 'module.js'),
		depjs = path.join(__dirname, 'test', 'classic', 'Resources', 'deprecated.js'),
		cspjs = path.join(__dirname, 'test', 'classic', 'Resources', 'customprop.js');

	it('should support Titanium SDK version 4.1.0.GA', function(){
		assert.doesNotThrow(function(){
			slag(appjs, {
				titanium: '4.1.0.GA',
				platform: 'ios'
			});
		});
	});

	it('should support Titanium SDK version 4.0.0.GA', function(){
		assert.doesNotThrow(function(){
			slag(appjs, {
				titanium: '4.0.0.GA',
				platform: 'ios'
			});
		});
	});

	it('should support Titanium SDK version 3.5.1.GA', function(){
		assert.doesNotThrow(function(){
			slag(appjs, {
				titanium: '3.5.1.GA',
				platform: 'ios'
			});
		});
	});

	it('should support platform iOS', function(){
		assert.doesNotThrow(function(){
			slag(iosjs, {
				titanium: '4.1.0.GA',
				platform: 'ios'
			});
		});
	});

	it('should support platform Android', function(){
		assert.doesNotThrow(function(){
			slag(andjs, {
				titanium: '4.1.0.GA',
				platform: 'android'
			});
		});
	});

	it('should support modules specified', function(){
		assert.doesNotThrow(function(){
			slag(modjs, {
				titanium: '4.1.0.GA',
				platform: 'ios',
				module: {
					'be.k0suke.module': {
						createWindow: function(){
							return this;
						},
						open: function(){}
					}
				}
			});
		});
	});

	it('should simulate L', function(){
		var context = slag(appjs, {
			titanium: '4.1.0.GA',
			platform: 'ios'
		});
		assert.equal('Hello, world.', context.L('Hello, world.'));
	});

	it('should simulate String.format', function(){
		var context = slag(appjs, {
			titanium: '4.1.0.GA',
			platform: 'ios'
		});
		assert.equal('Hello, world.', context.String.format('Hello, world.'));
	});

	it('should simulate String.formatCurrency', function(){
		var context = slag(appjs, {
			titanium: '4.1.0.GA',
			platform: 'ios'
		});
		assert.equal('Hello, world.', context.String.formatCurrency('Hello, world.'));
	});

	it('should simulate String.formatDate', function(){
		var context = slag(appjs, {
			titanium: '4.1.0.GA',
			platform: 'ios'
		});
		assert.equal('Hello, world.', context.String.formatDate('Hello, world.'));
	});

	it('should simulate String.formatDecimal', function(){
		var context = slag(appjs, {
			titanium: '4.1.0.GA',
			platform: 'ios'
		});
		assert.equal('Hello, world.', context.String.formatDecimal('Hello, world.'));
	});

	it('should simulate String.formatTime', function(){
		var context = slag(appjs, {
			titanium: '4.1.0.GA',
			platform: 'ios'
		});
		assert.equal('Hello, world.', context.String.formatTime('Hello, world.'));
	});

	it('should simulate alert', function(){
		var context = slag(appjs, {
			titanium: '4.1.0.GA',
			platform: 'ios',
			silent: true
		});
		assert.doesNotThrow(function(){
			context.alert('Hello, world.');
		}, Error);
	});

	it('should throw exception invalid file path', function(){
		assert.throws(function(){
			slag('file_does_not_exist.js', {
				titanium: '4.1.0.GA',
				platform: 'ios'
			});
		}, Error);
	});

	it('should throw exception invalid Titanium SDK version', function(){
		assert.throws(function(){
			slag(appjs, {
				titanium: '0.0.0.GA',
				platform: 'ios'
			});
		}, Error);
	});

	it('should throw exception invalid plafrom specified', function(){
		assert.throws(function(){
			slag(appjs, {
				titanium: '4.1.0.GA',
				platform: 'tizen'
			});
		}, Error);
	});

	it('should throw exception invalid plafrom specified', function(){
		assert.throws(function(){
			slag(andjs, {
				titanium: '4.1.0.GA',
				platform: 'ios'
			});
		}, Error);
	});

	it('should throw exception invalid plafrom specified', function(){
		assert.throws(function(){
			slag(iosjs, {
				titanium: '4.1.0.GA',
				platform: 'android'
			});
		}, Error);
	});

	it('should throw exception invalid modules specified', function(){
		assert.throws(function(){
			slag(modjs, {
				titanium: '4.1.0.GA',
				platform: 'ios',
				module: 'invalid_module'
			});
		}, Error);
	});

	it('should throw exception unknown module detect', function(){
		assert.throws(function(){
			slag(modjs, {
				titanium: '4.1.0.GA',
				platform: 'ios',
				module: {}
			});
		}, Error);
	});

	it('should throw exception deprecated detect', function(){
		assert.throws(function(){
			slag(depjs, {
				titanium: '4.1.0.GA',
				platform: 'ios'
			});
		}, Error);
	});

	it('should throw exception custom property detect', function(){
		assert.throws(function(){
			slag(cspjs, {
				titanium: '4.1.0.GA',
				platform: 'ios'
			});
		}, Error);
	});

	it('should strict mode avoidance custom property detect', function(){
		assert.doesNotThrow(function(){
			slag(cspjs, {
				titanium: '4.1.0.GA',
				platform: 'ios',
				strict: false
			});
		}, Error);
	});
});

describe('Classic', function(){
	var context;

	it('should does not throw exception', function(){
		assert.doesNotThrow(function(){
			context = slag(path.join(__dirname, 'test', 'classic', 'Resources', 'app.js'), {
				titanium: '4.1.0.GA',
				platform: 'ios'
			});
		});
	});

	it('should win1 title is \'Tab 1\'', function(){
		assert.strictEqual(context.win1.title, 'Tab 1');
	});

	it('should tab1 window property is win1', function(){
		assert.strictEqual(context.tab1.window, context.win1);
	});

	it('should label1 color is \'#999\'', function(){
		assert.strictEqual(context.label1.color, '#999');
	});

	it('should win2 title is \'Tab 2\'', function(){
		assert.strictEqual(context.win2.title, 'Tab 2');
	});

	it('should tab2 window property is win2', function(){
		assert.strictEqual(context.tab2.window, context.win2);
	});

	it('should label2 color is \'#999\'', function(){
		assert.strictEqual(context.label2.color, '#999');
	});
});

describe('lib/alloy.js', function(){
	var context;

	it('should does not throw exception default Titanium SDK version is 4.0.0.GA', function(){
		assert.doesNotThrow(function(){
			alloy.load({
				platform: 'ios',
				alloy: path.join(__dirname, 'test', 'alloy', 'Resources', 'iphone', 'alloy.js'),
				BaseController: path.join(__dirname, 'test', 'alloy', 'Resources', 'iphone', 'alloy', 'controllers', 'BaseController.js'),
				underscore: path.join(__dirname, 'test', 'alloy', 'Resources', 'iphone', 'alloy', 'underscore.js'),
				backbone: path.join(__dirname, 'test', 'alloy', 'Resources', 'iphone', 'alloy', 'backbone.js'),
				constants: path.join(__dirname, 'test', 'alloy', 'Resources', 'iphone', 'alloy', 'constants.js'),
				CFG: path.join(__dirname, 'test', 'alloy', 'Resources', 'alloy', 'CFG.js')
			});
		});
	});

	it('should does not throw exception default platform is iOS', function(){
		assert.doesNotThrow(function(){
			alloy.load({
				titanium: '4.1.0.GA',
				alloy: path.join(__dirname, 'test', 'alloy', 'Resources', 'iphone', 'alloy.js'),
				BaseController: path.join(__dirname, 'test', 'alloy', 'Resources', 'iphone', 'alloy', 'controllers', 'BaseController.js'),
				underscore: path.join(__dirname, 'test', 'alloy', 'Resources', 'iphone', 'alloy', 'underscore.js'),
				backbone: path.join(__dirname, 'test', 'alloy', 'Resources', 'iphone', 'alloy', 'backbone.js'),
				constants: path.join(__dirname, 'test', 'alloy', 'Resources', 'iphone', 'alloy', 'constants.js'),
				CFG: path.join(__dirname, 'test', 'alloy', 'Resources', 'alloy', 'CFG.js')
			});
		});
	});

	it('should throw exception alloy path specified, default path is Resources/iphone/alloy.js', function(){
		assert.throws(function(){
			alloy.load({
				titanium: '4.1.0.GA',
				platform: 'ios',
				BaseController: path.join(__dirname, 'test', 'alloy', 'Resources', 'iphone', 'alloy', 'controllers', 'BaseController.js'),
				underscore: path.join(__dirname, 'test', 'alloy', 'Resources', 'iphone', 'alloy', 'underscore.js'),
				backbone: path.join(__dirname, 'test', 'alloy', 'Resources', 'iphone', 'alloy', 'backbone.js'),
				constants: path.join(__dirname, 'test', 'alloy', 'Resources', 'iphone', 'alloy', 'constants.js'),
				CFG: path.join(__dirname, 'test', 'alloy', 'Resources', 'alloy', 'CFG.js')
			});
		}, Error);
	});

	it('should throw exception BaseController path specified, default path is Resources/iphone/alloy/controllers/BaseController.js', function(){
		assert.throws(function(){
			alloy.load({
				titanium: '4.1.0.GA',
				platform: 'ios',
				alloy: path.join(__dirname, 'test', 'alloy', 'Resources', 'iphone', 'alloy.js'),
				underscore: path.join(__dirname, 'test', 'alloy', 'Resources', 'iphone', 'alloy', 'underscore.js'),
				backbone: path.join(__dirname, 'test', 'alloy', 'Resources', 'iphone', 'alloy', 'backbone.js'),
				constants: path.join(__dirname, 'test', 'alloy', 'Resources', 'iphone', 'alloy', 'constants.js'),
				CFG: path.join(__dirname, 'test', 'alloy', 'Resources', 'alloy', 'CFG.js')
			});
		}, Error);
	});

	it('should throw exception underscore path specified, default path is Resources/iphone/alloy/underscore.js', function(){
		assert.throws(function(){
			alloy.load({
				titanium: '4.1.0.GA',
				platform: 'ios',
				alloy: path.join(__dirname, 'test', 'alloy', 'Resources', 'iphone', 'alloy.js'),
				BaseController: path.join(__dirname, 'test', 'alloy', 'Resources', 'iphone', 'alloy', 'controllers', 'BaseController.js'),
				backbone: path.join(__dirname, 'test', 'alloy', 'Resources', 'iphone', 'alloy', 'backbone.js'),
				constants: path.join(__dirname, 'test', 'alloy', 'Resources', 'iphone', 'alloy', 'constants.js'),
				CFG: path.join(__dirname, 'test', 'alloy', 'Resources', 'alloy', 'CFG.js')
			});
		}, Error);
	});

	it('should throw exception backbone path specified, default path is Resources/iphone/alloy/backbone.js', function(){
		assert.throws(function(){
			alloy.load({
				titanium: '4.1.0.GA',
				platform: 'ios',
				alloy: path.join(__dirname, 'test', 'alloy', 'Resources', 'iphone', 'alloy.js'),
				BaseController: path.join(__dirname, 'test', 'alloy', 'Resources', 'iphone', 'alloy', 'controllers', 'BaseController.js'),
				underscore: path.join(__dirname, 'test', 'alloy', 'Resources', 'iphone', 'alloy', 'underscore.js'),
				constants: path.join(__dirname, 'test', 'alloy', 'Resources', 'iphone', 'alloy', 'constants.js'),
				CFG: path.join(__dirname, 'test', 'alloy', 'Resources', 'alloy', 'CFG.js')
			});
		}, Error);
	});

	it('should throw exception constants path specified, default path is Resources/iphone/alloy/constants.js', function(){
		assert.throws(function(){
			alloy.load({
				titanium: '4.1.0.GA',
				platform: 'ios',
				alloy: path.join(__dirname, 'test', 'alloy', 'Resources', 'iphone', 'alloy.js'),
				BaseController: path.join(__dirname, 'test', 'alloy', 'Resources', 'iphone', 'alloy', 'controllers', 'BaseController.js'),
				underscore: path.join(__dirname, 'test', 'alloy', 'Resources', 'iphone', 'alloy', 'underscore.js'),
				backbone: path.join(__dirname, 'test', 'alloy', 'Resources', 'iphone', 'alloy', 'backbone.js'),
				CFG: path.join(__dirname, 'test', 'alloy', 'Resources', 'alloy', 'CFG.js')
			});
		}, Error);
	});

	it('should throw exception CFG path specified, default path is Resources/alloy/CFG.js', function(){
		assert.throws(function(){
			alloy.load({
				titanium: '4.1.0.GA',
				platform: 'ios',
				alloy: path.join(__dirname, 'test', 'alloy', 'Resources', 'iphone', 'alloy.js'),
				BaseController: path.join(__dirname, 'test', 'alloy', 'Resources', 'iphone', 'alloy', 'controllers', 'BaseController.js'),
				underscore: path.join(__dirname, 'test', 'alloy', 'Resources', 'iphone', 'alloy', 'underscore.js'),
				backbone: path.join(__dirname, 'test', 'alloy', 'Resources', 'iphone', 'alloy', 'backbone.js'),
				constants: path.join(__dirname, 'test', 'alloy', 'Resources', 'iphone', 'alloy', 'constants.js')
			});
		}, Error);
	});
});

describe('Alloy iOS', function(){
	var views,
		listeners,
		Alloy = alloy.load({
			titanium: '4.1.0.GA',
			platform: 'ios',
			alloy: path.join(__dirname, 'test', 'alloy', 'Resources', 'iphone', 'alloy.js'),
			BaseController: path.join(__dirname, 'test', 'alloy', 'Resources', 'iphone', 'alloy', 'controllers', 'BaseController.js'),
			underscore: path.join(__dirname, 'test', 'alloy', 'Resources', 'iphone', 'alloy', 'underscore.js'),
			backbone: path.join(__dirname, 'test', 'alloy', 'Resources', 'iphone', 'alloy', 'backbone.js'),
			constants: path.join(__dirname, 'test', 'alloy', 'Resources', 'iphone', 'alloy', 'constants.js'),
			CFG: path.join(__dirname, 'test', 'alloy', 'Resources', 'alloy', 'CFG.js')
		});

	var context = slag(path.join(__dirname, 'test', 'alloy', 'Resources', 'iphone', 'alloy', 'controllers', 'index.js'), {
		titanium: '4.1.0.GA',
		platform: 'ios',
		silent: true,
		module: {
			alloy: Alloy.core,
			'alloy/controllers/BaseController': Alloy.BaseController
		}
	});

	it('should does not throw exception in the Controller', function(){
		assert.doesNotThrow(function(){
			context.Controller();
			views = context.getViews();
			listeners = context.getListener();
		});
	});

	it('should does not throw exception in the event listeners', function(){
		_.each(listeners, function(listener){
			assert.doesNotThrow(function(){
				listener.handler();
			});
		});
	});

	it('should .container backgroundColor is \'white\'', function(){
		assert.strictEqual(views.index.backgroundColor, 'white');
	});

	it('should #label color is \'#000\'', function(){
		assert.strictEqual(views.label.color, '#000');
	});

	it('should #label text is \'Hello, iOS\'', function(){
		assert.strictEqual(views.label.text, 'Hello, iOS');
	});
});

describe('Alloy Android', function(){
	var views,
		listeners,
		Alloy = alloy.load({
			titanium: '4.1.0.GA',
			platform: 'android',
			alloy: path.join(__dirname, 'test', 'alloy', 'Resources', 'android', 'alloy.js'),
			BaseController: path.join(__dirname, 'test', 'alloy', 'Resources', 'android', 'alloy', 'controllers', 'BaseController.js'),
			underscore: path.join(__dirname, 'test', 'alloy', 'Resources', 'iphone', 'alloy', 'underscore.js'),
			backbone: path.join(__dirname, 'test', 'alloy', 'Resources', 'iphone', 'alloy', 'backbone.js'),
			constants: path.join(__dirname, 'test', 'alloy', 'Resources', 'iphone', 'alloy', 'constants.js'),
			CFG: path.join(__dirname, 'test', 'alloy', 'Resources', 'alloy', 'CFG.js')
		});

	var context = slag(path.join(__dirname, 'test', 'alloy', 'Resources', 'android', 'alloy', 'controllers', 'index.js'), {
		titanium:'4.1.0.GA',
		platform: 'android',
		silent: true,
		module: {
			alloy: Alloy.core,
			'alloy/controllers/BaseController': Alloy.BaseController
		}
	});

	it('should does not throw exception in the Controller', function(){
		assert.doesNotThrow(function(){
			context.Controller();
			views = context.getViews();
			listeners = context.getListener();
		});
	});

	it('should does not throw exception in the event listeners', function(){
		_.each(listeners, function(listener){
			assert.doesNotThrow(function(){
				listener.handler();
			});
		});
	});

	it('should .container backgroundColor is \'white\'', function(){
		assert.strictEqual(views.index.backgroundColor, 'white');
	});

	it('should #label color is \'#000\'', function(){
		assert.strictEqual(views.label.color, '#000');
	});

	it('should #label text is \'Hello, Android\'', function(){
		assert.strictEqual(views.label.text, 'Hello, Android');
	});
});

describe('Ti.App.Properties', function(){
	var context;

	it('should does not throw exception', function(){
		assert.doesNotThrow(function(){
			context = slag(path.join(__dirname, 'test', 'classic', 'Resources', 'properties.js'), {
				titanium: '4.0.0.GA',
				platform: 'ios'
			});
		});
	});

	it('should has not property string returns false', function(){
		assert.strictEqual(context.exports.hasntProperty.string, false);
	});

	it('should has not property bool returns false', function(){
		assert.strictEqual(context.exports.hasntProperty.bool, false);
	});

	it('should has not property int returns false', function(){
		assert.strictEqual(context.exports.hasntProperty.int, false);
	});

	it('should has not property double returns false', function(){
		assert.strictEqual(context.exports.hasntProperty.double, false);
	});

	it('should has not property list returns false', function(){
		assert.strictEqual(context.exports.hasntProperty.list, false);
	});

	it('should has not property object returns false', function(){
		assert.strictEqual(context.exports.hasntProperty.object, false);
	});

	it('should default property string returns null', function(){
		assert.strictEqual(context.exports.default.string, null);
	});

	it('should default property bool returns null', function(){
		assert.strictEqual(context.exports.default.bool, null);
	});

	it('should default property int returns null', function(){
		assert.strictEqual(context.exports.default.int, null);
	});

	it('should default property double returns null', function(){
		assert.strictEqual(context.exports.default.double, null);
	});

	it('should default property list returns null', function(){
		assert.strictEqual(context.exports.default.list, null);
	});

	it('should default property object returns null', function(){
		assert.strictEqual(context.exports.default.object, null);
	});

	it('should has property string returns true', function(){
		assert.strictEqual(context.exports.hasProperty.string, true);
	});

	it('should has property bool returns true', function(){
		assert.strictEqual(context.exports.hasProperty.bool, true);
	});

	it('should has property int returns true', function(){
		assert.strictEqual(context.exports.hasProperty.int, true);
	});

	it('should has property double returns true', function(){
		assert.strictEqual(context.exports.hasProperty.double, true);
	});

	it('should has property list returns true', function(){
		assert.strictEqual(context.exports.hasProperty.list, true);
	});

	it('should has property object returns true', function(){
		assert.strictEqual(context.exports.hasProperty.object, true);
	});

	it('should get property string returns \'string\'', function(){
		assert.strictEqual(context.exports.getProperty.string, 'string');
	});

	it('should get property bool returns true', function(){
		assert.strictEqual(context.exports.getProperty.bool, true);
	});

	it('should get property int returns 1', function(){
		assert.strictEqual(context.exports.getProperty.int, 1);
	});

	it('should get property double returns 3.14', function(){
		assert.strictEqual(context.exports.getProperty.double, 3.14);
	});

	it('should get property list returns [ \'list\' ]', function(){
		assert.strictEqual(context.exports.getProperty.list[0], 'list');
	});

	it('should get property object returns { object: \'object\' }', function(){
		assert.strictEqual(context.exports.getProperty.object.object, 'object');
	});

	it('should list properties returns [ \'string\', \'bool\', \'int\', \'double\', \'list\', \'object\' ]', function(){
		assert.strictEqual(context.exports.listProperties[0], 'string');
		assert.strictEqual(context.exports.listProperties[1], 'bool');
		assert.strictEqual(context.exports.listProperties[2], 'int');
		assert.strictEqual(context.exports.listProperties[3], 'double');
		assert.strictEqual(context.exports.listProperties[4], 'list');
		assert.strictEqual(context.exports.listProperties[5], 'object');
	});

	it('should remove property string returns false', function(){
		assert.strictEqual(context.exports.removeProperty.string, false);
	});

	it('should remove property bool returns false', function(){
		assert.strictEqual(context.exports.removeProperty.bool, false);
	});

	it('should remove property int returns false', function(){
		assert.strictEqual(context.exports.removeProperty.int, false);
	});

	it('should remove property double returns false', function(){
		assert.strictEqual(context.exports.removeProperty.double, false);
	});

	it('should remove property list returns false', function(){
		assert.strictEqual(context.exports.removeProperty.list, false);
	});

	it('should remove property object returns false', function(){
		assert.strictEqual(context.exports.removeProperty.object, false);
	});
});

describe('Ti.Database', function(){
	var context;

	it('should does not throw exception', function(){
		assert.doesNotThrow(function(){
			context = slag(path.join(__dirname, 'test', 'classic', 'Resources', 'database.js'), {
				titanium: '4.0.0.GA',
				platform: 'ios'
			});
		});
	});
});