# ti-slag

Titanium faker API, Titanium App running on Node.js.

**WORKING IN PROGRESS** If vm crash, Please feedback with the code you run :smile:

## Why

* Want running code of Titanium on Node.js
* Want to run a unit test in Node.js only
* Not required simulator/emulator and iOS/Android device

### Tasks

* Full support of Alloy
* Full support of native module
* gulp plugin
* Test

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

## Programmatically

### Setup

```sh
$ cd path/to/your_app_project
$ npm install ti-slag
```

### Using

```js
var path = require('path'),
	slag = require('ti-slag');

slag(path.join(__dirname, 'Resources', 'app.js'), '4.0.0.GA', 'ios');
```

### API

#### object ```<vm.context>``` slag(string ```<file path>```, string ```<SDK version>```, string ```<platfrom>```)

##### file path

path/to/example.js

##### SDK version

* 4.0.0.GA
* 3.5.1.GA

##### platform

ios or android.

## Generate the faker API

If you want other Titanium SDK version, See the furnace.js. And required [api.json](http://docs.appcelerator.com/titanium/data/index.html). 

## License

MIT