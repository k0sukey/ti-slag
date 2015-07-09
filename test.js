/* global describe: true, it: true */

var assert = require('assert'),
	path = require('path'),
	slag = require('./');

describe('slag', function(){
	var appjs = path.join(__dirname, 'test', 'Resources', 'app.js'),
		alyjs = path.join(__dirname, 'test', 'Resources', 'index.js'),
		modjs = path.join(__dirname, 'test', 'Resources', 'module.js'),
		depjs = path.join(__dirname, 'test', 'Resources', 'deprecated.js');

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

	it('should support Alloy version 1.6.2', function(){
		assert.doesNotThrow(function(){
			var context = slag(alyjs, {
				titanium: '4.1.0.GA',
				alloy: '1.6.2',
				platform: 'ios',
				module: {
					Alloy: {
						CFG: {},
						Globals: {},
						Collections: {}
					}
				}
			});
			context.Controller();
		});
	});

	it('should support Alloy version 1.5.1', function(){
		assert.doesNotThrow(function(){
			var context = slag(alyjs, {
				titanium: '3.5.1.GA',
				alloy: '1.5.1',
				platform: 'ios',
				module: {
					Alloy: {
						CFG: {},
						Globals: {},
						Collections: {}
					}
				}
			});
			context.Controller();
		});
	});

	it('should support Backbone.js version 0.9.2', function(){
		assert.doesNotThrow(function(){
			var context = slag(alyjs, {
				titanium: '4.1.0.GA',
				alloy: '1.6.2',
				platform: 'ios',
				module: {
					Alloy: {
						CFG: {},
						Globals: {},
						Collections: {}
					}
				},
				backbone: '0.9.2'
			});
			context.Controller();
		});
	});

	it('should support Backbone.js version 1.1.2', function(){
		assert.doesNotThrow(function(){
			var context = slag(alyjs, {
				titanium: '4.1.0.GA',
				alloy: '1.6.2',
				platform: 'ios',
				module: {
					Alloy: {
						CFG: {},
						Globals: {},
						Collections: {}
					}
				},
				backbone: '1.1.2'
			});
			context.Controller();
		});
	});

	it('should support platform iOS', function(){
		assert.doesNotThrow(function(){
			slag(appjs, {
				titanium: '4.1.0.GA',
				platform: 'ios'
			});
		});
	});

	it('should support platform Android', function(){
		assert.doesNotThrow(function(){
			slag(appjs, {
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

	it('should throw exception invalid Alloy version', function(){
		assert.throws(function(){
			slag(alyjs, {
				titanium: '4.1.0.GA',
				alloy: '0.0.0',
				platform: 'ios',
				module: {
					Alloy: {
						CFG: {},
						Globals: {},
						Collections: {}
					}
				},
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
});