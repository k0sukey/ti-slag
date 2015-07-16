# ti-slag

Titanium faker API, Titanium App running on Node.js.

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

Please be Alloy compiled before. ```$ alloy compile --config platform=ios```

```js
var config = require('./app/config.json');

slag(path.join(__dirname, 'Resources', 'iphone', 'alloy', 'controllers', 'foo.js'), {
	titanium: '4.0.0.GA,
	alloy: '1.6.2',
	platform: 'ios',
	module: {
		Alloy: {
			CFG: _.extend(config.global, config['os:ios'], config['env:test']),
			Globals: {},
			Collections: {}
		}
	},
	backbone: '0.9.2'
});
```

##### file path

path/to/example.js

##### Titanium SDK version

* 4.1.0.GA
* 4.0.0.GA
* 3.5.1.GA

##### Alloy version

* 1.6.2
* 1.5.1

##### platform

* ios
* android

##### module

Native module simulate.

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

##### Backbone.js version

* 0.9.2 (default)
* 1.1.2

##### silent

```console.*```, ```Ti.API.*```, ```alert``` quiet.

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
	var foojs = path.join(__dirname, 'Resources', 'iphone', 'alloy', 'controllers', 'foo.js'),
		config = require('./app/config.json'),
		context = slag(foojs, {
			titanium: '4.0.0.GA',
			alloy: '1.6.2',
			platform: 'ios',
			module: {
				Alloy: {
					CFG: _.extend(config.global, config['os:ios'], config['env:test']),
					Globals: {},
					Collections: {}
				}
			}
		});

	it('should does not throw exception', function(){
		assert.doesNotThrow(function(){
			context.Controller();
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

```sh
$ npm run coverage
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