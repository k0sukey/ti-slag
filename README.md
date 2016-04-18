# ti-slag

Titanium faker API, Titanium app running on Node.js.

[![Build Status](https://travis-ci.org/k0sukey/ti-slag.svg?branch=master)](https://travis-ci.org/k0sukey/ti-slag)
[![Coverage Status](https://coveralls.io/repos/k0sukey/ti-slag/badge.svg?branch=master)](https://coveralls.io/r/k0sukey/ti-slag?branch=master)
[![Dependency Status](https://david-dm.org/k0sukey/ti-slag.svg)](https://david-dm.org/k0sukey/ti-slag)
[![devDependency Status](https://david-dm.org/k0sukey/ti-slag/dev-status.svg)](https://david-dm.org/k0sukey/ti-slag#info=devDependencies)

**WORKING IN PROGRESS** If vm crash, Please feedback with the code you run :smile:

## Why

* Want running code of Titanium on Node.js
* Want to run a unit test in Node.js only
* Not required simulator/emulator and iOS/Android device

### Tasks

* ~~Full support of Alloy~~
* ~~Full support of native module~~
* gulp plugin
* ~~Test~~

## Programmatically

### Setup

```sh
$ cd path/to/your_app_project
$ npm install ti-slag --save
```

### Using

```js
var path = require('path'),
	slag = require('ti-slag');

slag(path.join(__dirname, 'Resources', 'app.js'), {
	titanium: '4.0.0.GA',
	platform: 'ios'
});
```

### API

**IMPORTANT** arguments chenged, since 0.0.7

#### object ```<vm.context>``` slag(string ```<file path>```, object ```<options>```)

**Classic**

```js
slag(path.join(__dirname, 'Resources', 'app.js'), {
	titanium: '4.0.0.GA',
	platform: 'ios'
});
```

**Alloy**

Please be Alloy compiled before. ```$ alloy compile --config platform=ios``` or ```$ alloy compile --config platform=android```

```js
	var alloy = require('ti-slag/lib/Alloy'),
		Alloy = alloy.load({
			titanium: '4.0.0.GA',							// optional, default 4.0.0.GA
			platform: 'ios',								// optional, default ios
			alloy: 'path/to/alloy.js',						// optional, default Resources/iphone/alloy/alloy.js
			BaseController: 'path/to/BaseController.js',	// optional, default Resources/iphone/alloy/controllers/BaseController.js
			underscore: 'path/to/underscore.js',			// optional, default Resources/iphone/alloy/underscore.js
			backbone: 'path/to/backbone.js',				// optional, default Resources/iphone/alloy/backbone.js
			constants: 'path/to/constants.js',				// optional, default Resources/iphone/alloy/constants.js
			CFG: 'path/to/CFG.js'							// optional, default Resources/alloy/CFG.js
		}),
		context = slag(path.join(__dirname, 'Resources', 'iphone', 'alloy', 'controllers', 'index.js'), {
			titanium:'4.0.0.GA',
			platform: 'ios',
			module: {
				alloy: Alloy.core,
				'alloy/controllers/BaseController': Alloy.BaseController
			}
		});

	context.Controller(); // This is Alloy controller
```

~~ti-slag stop the Alloy internal support, since 0.0.14.~~
Alloy loader now support, since 0.0.15.

##### file path

path/to/example.js

##### Titanium SDK version

* 5.2.0.GA
* 4.1.0.GA
* 4.0.0.GA
* 3.5.1.GA

##### platform

* ios
* android

##### device

Load the device profile.

```js
slag(path.join(__dirname, 'Resources', 'app.js'), {
	titanium: '4.0.0.GA',
	platform: 'ios',
	device: require('ti-slag/lib/device').iPhone5s
});
```

Your device profile format.

e.g.

```js
var profile = {
	name: 'iPhone OS',
	osname: 'iphone',
	model: 'Simulator',
	version: '8.4',
	architecture: 'x86_64',
	ostype: '64bit',
	displayCaps: {
		density: 'high',
		dpi: 320,
		platformWidth: 320,
		platformHeight: 568
	}
};
```

##### module

Native or CommonJS module simulate.

###### Titanium code

```js
var anymodule = require('be.k0suke.anymodule'),
	anything = anymodule.createAnything();

anything.anyMethod();
```

###### ti-slag code
```js
slag('path/to/app.js', {
	titanium: '4.0.0.GA',
	platform: 'ios',
	module: {
		'be.k0suke.anymodule': {
			createAnything: function(){
				return this;
			},
			anyMethod: function(){}
		}
	}
});
```

##### strict mode

It throws an exception If you use a custom property.

* false
* true (default)

##### silent

```console.*```, ```Ti.API.*```, ```alert``` quiet.

* false (default)
* true

##### coverage

* false (default)
* true

### Testing in mocha

And coverage.

**Install the mocha, nyc and ti-slag**

```sh
$ npm install mocha nyc ti-slag --save-dev
```

**Edit the package.json**

```
{
	...
	"scripts": {
		"test": "mocha test.js",
		"coverage": "nyc npm test && nyc report"
	},
	"config": {
		"nyc": {
			"exclude": [
				"test.js",
				"node_modules/",
				"app/"
			]
		}
	},
	...
}
```

**test.js**

```js
var assert = require('assert'),
	path = require('path'),
	slag = require('ti-slag');

describe('foo.js', function(){
	it('should does not throw exception', function(){
		assert.doesNotThrow(function(){
			slag(path.join(__dirname, 'Resources', 'foo.js'), {
				titanium: '4.0.0.GA',
				platform: 'ios'
			});
		});
	});
});
```

**Run the test**

```sh
$ npm test
```

**Result**

```
> Sandbox@1.0.0 test /Users/Kosuke/src/Sandbox
> mocha test.js



  foo.js
    ✓ should does not throw exception


  1 passing (18ms)
```

**Coverage**

Edit the test.js

```js
var istanbul = require('istanbul'),
	collector = new istanbul.Collector(),
	reporter = new istanbul.Reporter();

describe('example test', function(){
	it('should does not throw exception', function(){
		assert.doesNotThrow(function(){
			var context = slag('path/to/app.js', {
				titanium: '4.0.0.GA',
				platform: 'ios',
				coverage: true
			});
			collector.add(context.__coverage__);

			reporter.add('text');
			reporter.addAll([ 'lcov', 'clover' ]);
			reporter.write(collector, true);
		});
	});
});
```

## CLI

### Install

```sh
$ npm install ti-slag -g
```

### Usage

```sh
$ cd path/to/your_app_project
$ slag --sdk 4.0.0.GA --platform ios
```

## Generate the faker API

If you want other Titanium SDK version, See the furnace.js. And required [api.json](http://docs.appcelerator.com/titanium/data/index.html). 

## License

MIT