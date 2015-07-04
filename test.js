/* global describe: true, it: true */

var assert = require('assert'),
	path = require('path'),
	slag = require('./');

describe('slag', function(){
	var appjs = path.join(__dirname, 'test', 'Resources', 'app.js'),
		alyjs = path.join(__dirname, 'test', 'Resources', 'index.js'),
		modjs = path.join(__dirname, 'test', 'Resources', 'module.js'),
		depjs = path.join(__dirname, 'test', 'Resources', 'deprecated.js');

	it('should support Titanium SDK version 4.0.0.GA', function(){
		assert.doesNotThrow(function(){
			slag(appjs, '4.0.0.GA', 'ios');
		});
	});

	it('should support Titanium SDK version 3.5.1.GA', function(){
		assert.doesNotThrow(function(){
			slag(appjs, '3.5.1.GA', 'ios');
		});
	});

	it('should support Alloy version 1.6.2', function(){
		assert.doesNotThrow(function(){
			var context = slag(alyjs, {
				titanium: '4.0.0.GA',
				alloy: '1.6.2'
			}, 'ios', {
				Alloy: {
					CFG: {},
					Globals: {},
					Collections: {}
				}
			});
			context.Controller();
		});
	});

	it('should support Alloy version 1.5.1', function(){
		assert.doesNotThrow(function(){
			slag(alyjs, {
				titanium: '3.5.1.GA',
				alloy: '1.5.1'
			}, 'ios', {
				Alloy: {
					CFG: {},
					Globals: {},
					Collections: {}
				}
			});
		});
	});

	it('should support platform iOS', function(){
		assert.doesNotThrow(function(){
			slag(appjs, '4.0.0.GA', 'ios');
		});
	});

	it('should support platform Android', function(){
		assert.doesNotThrow(function(){
			slag(appjs, '4.0.0.GA', 'android');
		});
	});

	it('should support modules specified', function(){
		assert.doesNotThrow(function(){
			slag(modjs, '4.0.0.GA', 'ios', {
				'be.k0suke.module': {
					createWindow: function(){
						return this;
					},
					open: function(){}
				}
			});
		});
	});

	it('should simulate L', function(){
		var context = slag(appjs, '4.0.0.GA', 'ios');
		assert.equal('Hello, world.', context.L('Hello, world.'));
	});

	it('should simulate String.format', function(){
		var context = slag(appjs, '4.0.0.GA', 'ios');
		assert.equal('Hello, world.', context.String.format('Hello, world.'));
	});

	it('should simulate String.formatCurrency', function(){
		var context = slag(appjs, '4.0.0.GA', 'ios');
		assert.equal('Hello, world.', context.String.formatCurrency('Hello, world.'));
	});

	it('should simulate String.formatDate', function(){
		var context = slag(appjs, '4.0.0.GA', 'ios');
		assert.equal('Hello, world.', context.String.formatDate('Hello, world.'));
	});

	it('should simulate String.formatDecimal', function(){
		var context = slag(appjs, '4.0.0.GA', 'ios');
		assert.equal('Hello, world.', context.String.formatDecimal('Hello, world.'));
	});

	it('should simulate String.formatTime', function(){
		var context = slag(appjs, '4.0.0.GA', 'ios');
		assert.equal('Hello, world.', context.String.formatTime('Hello, world.'));
	});

	it('should simulate alert', function(){
		var context = slag(appjs, '4.0.0.GA', 'ios');
		assert.doesNotThrow(function(){
			context.alert('Hello, world.');
		}, Error);
	});

	it('should throw exception invalid file path', function(){
		assert.throws(function(){
			slag('file_does_not_exist.js', '4.0.0.GA', 'ios');
		}, Error);
	});

	it('should throw exception invalid Titanium SDK version', function(){
		assert.throws(function(){
			slag(appjs, '0.0.0.GA', 'ios');
		}, Error);
	});

	it('should throw exception invalid Alloy version', function(){
		assert.throws(function(){
			slag(alyjs, {
				titanium: '4.0.0.GA',
				alloy: '0.0.0',
			}, 'ios', {
				Alloy: {
					CFG: {},
					Globals: {},
					Collections: {}
				}
			});
		}, Error);
	});

	it('should throw exception invalid plafrom specified', function(){
		assert.throws(function(){
			slag(appjs, '4.0.0.GA', 'tizen');
		}, Error);
	});

	it('should throw exception invalid modules specified', function(){
		assert.throws(function(){
			slag(modjs, '4.0.0.GA', 'ios', []);
		}, Error);
	});

	it('should throw exception unknown module detect', function(){
		assert.throws(function(){
			slag(modjs, '4.0.0.GA', 'ios', {});
		}, Error);
	});

	it('should throw exception deprecated detect', function(){
		assert.throws(function(){
			slag(depjs, '4.0.0.GA', 'ios', {});
		}, Error);
	});
});