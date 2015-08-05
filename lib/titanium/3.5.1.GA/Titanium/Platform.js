var crypto = require('crypto');
function Platform(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'BATTERY_STATE_CHARGING',
			'BATTERY_STATE_FULL',
			'BATTERY_STATE_UNKNOWN',
			'BATTERY_STATE_UNPLUGGED',
			'address',
			'apiName',
			'architecture',
			'availableMemory',
			'batteryLevel',
			'batteryMonitoring',
			'batteryState',
			'bubbleParent',
			'displayCaps',
			'id',
			'locale',
			'macaddress',
			'manufacturer',
			'model',
			'name',
			'netmask',
			'osname',
			'ostype',
			'processorCount',
			'runtime',
			'username',
			'version',
			'id'
		];
	if (__SLAG_NAMES.length > 0 && process.env.SLAG_STRICT === 'true') {
		for (var __SLAG_NAME in __SLAG_PROPERTIES) {
			if (__SLAG_NAMES.indexOf(__SLAG_NAME) === -1) {
				throw new Error('Use user custom property ' + __SLAG_NAME);
			}
		}
	} else if (__SLAG_NAMES.length === 0 && __SLAG_PROPERTIES.length > 0 && process.env.SLAG_STRICT === 'true') {
		throw new Error('Use user custom properties. ' + __SLAG_PROPERTIES.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	if (__SLAG_PROPERTIES.BATTERY_STATE_CHARGING) {
		throw new Error('Ti.Platform.BATTERY_STATE_CHARGING is read only property');
	}
	this.BATTERY_STATE_CHARGING = 0;
	if (__SLAG_PROPERTIES.BATTERY_STATE_FULL) {
		throw new Error('Ti.Platform.BATTERY_STATE_FULL is read only property');
	}
	this.BATTERY_STATE_FULL = 0;
	if (__SLAG_PROPERTIES.BATTERY_STATE_UNKNOWN) {
		throw new Error('Ti.Platform.BATTERY_STATE_UNKNOWN is read only property');
	}
	this.BATTERY_STATE_UNKNOWN = 0;
	if (__SLAG_PROPERTIES.BATTERY_STATE_UNPLUGGED) {
		throw new Error('Ti.Platform.BATTERY_STATE_UNPLUGGED is read only property');
	}
	this.BATTERY_STATE_UNPLUGGED = 0;
	if (__SLAG_PROPERTIES.address) {
		throw new Error('Ti.Platform.address is read only property');
	}
	this.address = '';
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.Platform.apiName is read only property');
	}
	this.apiName = 'Ti.Platform';
	if (__SLAG_PROPERTIES.architecture) {
		throw new Error('Ti.Platform.architecture is read only property');
	}
	this.architecture = '';
	if (__SLAG_PROPERTIES.availableMemory) {
		throw new Error('Ti.Platform.availableMemory is read only property');
	}
	this.availableMemory = 0;
	if (__SLAG_PROPERTIES.batteryLevel) {
		throw new Error('Ti.Platform.batteryLevel is read only property');
	}
	this.batteryLevel = 0;
	this.batteryMonitoring = __SLAG_PROPERTIES.batteryMonitoring || true;
	if (__SLAG_PROPERTIES.batteryState) {
		throw new Error('Ti.Platform.batteryState is read only property');
	}
	this.batteryState = 0;
	this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	if (__SLAG_PROPERTIES.displayCaps) {
		throw new Error('Ti.Platform.displayCaps is read only property');
	}
	this.displayCaps = {};
	if (__SLAG_PROPERTIES.id) {
		throw new Error('Ti.Platform.id is read only property');
	}
	this.id = '';
	if (__SLAG_PROPERTIES.locale) {
		throw new Error('Ti.Platform.locale is read only property');
	}
	this.locale = '';
	if (__SLAG_PROPERTIES.macaddress) {
		throw new Error('Ti.Platform.macaddress is read only property');
	}
	this.macaddress = '';
	if (__SLAG_PROPERTIES.manufacturer) {
		throw new Error('Ti.Platform.manufacturer is read only property');
	}
	this.manufacturer = '';
	if (__SLAG_PROPERTIES.model) {
		throw new Error('Ti.Platform.model is read only property');
	}
	this.model = '';
	if (__SLAG_PROPERTIES.name) {
		throw new Error('Ti.Platform.name is read only property');
	}
	this.name = '';
	if (__SLAG_PROPERTIES.netmask) {
		throw new Error('Ti.Platform.netmask is read only property');
	}
	this.netmask = '';
	if (__SLAG_PROPERTIES.osname) {
		throw new Error('Ti.Platform.osname is read only property');
	}
	this.osname = '';
	if (__SLAG_PROPERTIES.ostype) {
		throw new Error('Ti.Platform.ostype is read only property');
	}
	this.ostype = '';
	if (__SLAG_PROPERTIES.processorCount) {
		throw new Error('Ti.Platform.processorCount is read only property');
	}
	this.processorCount = 0;
	if (__SLAG_PROPERTIES.runtime) {
		throw new Error('Ti.Platform.runtime is read only property');
	}
	this.runtime = '';
	if (__SLAG_PROPERTIES.username) {
		throw new Error('Ti.Platform.username is read only property');
	}
	this.username = '';
	if (__SLAG_PROPERTIES.version) {
		throw new Error('Ti.Platform.version is read only property');
	}
	this.version = '';
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
Platform.prototype.addEventListener = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Platform.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
Platform.prototype.canOpenURL = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
Platform.prototype.createUUID = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var UUID = require('./Platform/UUID');
	return UUID(__SLAG_PROPERTY);
};
Platform.prototype.fireEvent = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Platform.prototype.getAddress = function () {
	if ([
			'android',
			'ios',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.address;
};
Platform.prototype.getApiName = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
Platform.prototype.getArchitecture = function () {
	if ([
			'android',
			'ios',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.architecture;
};
Platform.prototype.getAvailableMemory = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.availableMemory;
};
Platform.prototype.getBatteryLevel = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.batteryLevel;
};
Platform.prototype.getBatteryMonitoring = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.batteryMonitoring;
};
Platform.prototype.getBatteryState = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.batteryState;
};
Platform.prototype.getBubbleParent = function () {
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
Platform.prototype.getDisplayCaps = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.displayCaps;
};
Platform.prototype.getId = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.id;
};
Platform.prototype.getLocale = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.locale;
};
Platform.prototype.getMacaddress = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.macaddress;
};
Platform.prototype.getManufacturer = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.manufacturer;
};
Platform.prototype.getModel = function () {
	if ([
			'android',
			'ios',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.model;
};
Platform.prototype.getName = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.name;
};
Platform.prototype.getNetmask = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.netmask;
};
Platform.prototype.getOsname = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.osname;
};
Platform.prototype.getOstype = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.ostype;
};
Platform.prototype.getProcessorCount = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.processorCount;
};
Platform.prototype.getRuntime = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.runtime;
};
Platform.prototype.getUsername = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.username;
};
Platform.prototype.getVersion = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.version;
};
Platform.prototype.is24HourTimeFormat = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
Platform.prototype.openURL = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
Platform.prototype.removeEventListener = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Platform.prototype.setBatteryMonitoring = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.batteryMonitoring = __SLAG__PROPERTY;
};
Platform.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
module.exports = function (properties) {
	return new Platform(properties);
};