/* global describe: true, it: true */

var _ = require('lodash'),
	assert = require('assert'),
	istanbul = require('istanbul'),
	collector = new istanbul.Collector(),
	reporter = new istanbul.Reporter(),
	path = require('path'),
	onexit = require('signal-exit'),
	slag = require('./');

onexit(function(){
	reporter.add('text');
	reporter.addAll([ 'lcov', 'clover' ]);
	reporter.write(collector, true, function(){
		console.log('All reports generated');
	});
}, {
	alwaysLast: true
});

describe('ti-slag coverage', function(){
	var context;

	it('should does not throw exception', function(){
		assert.doesNotThrow(function(){
			context = slag(path.join(__dirname, 'test', 'classic', 'Resources', 'app.js'), {
				titanium: '4.0.0.GA',
				platform: 'ios',
				coverage: true
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
		collector.add(context.__coverage__);
	});

	it('should tab1 click does not throw exception', function(){
		assert.doesNotThrow(function(){
			context.doFocus({
				index: 0
			});
			collector.add(context.__coverage__);
		});
	});
});