var crypto = require('crypto');
function Platform(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'address',
			'architecture',
			'availableMemory',
			'batteryLevel',
			'batteryMonitoring',
			'batteryState',
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
			'displayCaps',
			'BATTERY_STATE_CHARGING',
			'BATTERY_STATE_FULL',
			'BATTERY_STATE_UNKNOWN',
			'BATTERY_STATE_UNPLUGGED',
			'id'
		];
	if (__SLAG__names.length > 0 && process.env.SLAG_STRICT) {
		for (var __SLAG__name in __SLAG__properties) {
			if (__SLAG__names.indexOf(__SLAG__name) === -1) {
				throw new Error('Use user custom property ' + __SLAG__name);
			}
		}
	} else if (__SLAG__names.length === 0 && __SLAG__properties.length > 0 && process.env.SLAG_STRICT) {
		throw new Error('Use user custom properties. ' + __SLAG__properties.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.Platform.apiName is read only property');
	}
	this.apiName = 'Ti.Platform';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	if (__SLAG__properties.address) {
		throw new Error('Ti.Platform.address is read only property');
	}
	this.address = '';
	if (__SLAG__properties.architecture) {
		throw new Error('Ti.Platform.architecture is read only property');
	}
	this.architecture = '';
	if (__SLAG__properties.availableMemory) {
		throw new Error('Ti.Platform.availableMemory is read only property');
	}
	this.availableMemory = 0;
	if (__SLAG__properties.batteryLevel) {
		throw new Error('Ti.Platform.batteryLevel is read only property');
	}
	this.batteryLevel = 0;
	this.batteryMonitoring = __SLAG__properties.batteryMonitoring || true;
	if (__SLAG__properties.batteryState) {
		throw new Error('Ti.Platform.batteryState is read only property');
	}
	this.batteryState = 0;
	if (__SLAG__properties.id) {
		throw new Error('Ti.Platform.id is read only property');
	}
	this.id = '';
	if (__SLAG__properties.locale) {
		throw new Error('Ti.Platform.locale is read only property');
	}
	this.locale = '';
	if (__SLAG__properties.macaddress) {
		throw new Error('Ti.Platform.macaddress is read only property');
	}
	this.macaddress = '';
	if (__SLAG__properties.manufacturer) {
		throw new Error('Ti.Platform.manufacturer is read only property');
	}
	this.manufacturer = '';
	if (__SLAG__properties.model) {
		throw new Error('Ti.Platform.model is read only property');
	}
	this.model = '';
	if (__SLAG__properties.name) {
		throw new Error('Ti.Platform.name is read only property');
	}
	this.name = '';
	if (__SLAG__properties.netmask) {
		throw new Error('Ti.Platform.netmask is read only property');
	}
	this.netmask = '';
	if (__SLAG__properties.osname) {
		throw new Error('Ti.Platform.osname is read only property');
	}
	this.osname = '';
	if (__SLAG__properties.ostype) {
		throw new Error('Ti.Platform.ostype is read only property');
	}
	this.ostype = '';
	if (__SLAG__properties.processorCount) {
		throw new Error('Ti.Platform.processorCount is read only property');
	}
	this.processorCount = 0;
	if (__SLAG__properties.runtime) {
		throw new Error('Ti.Platform.runtime is read only property');
	}
	this.runtime = '';
	if (__SLAG__properties.username) {
		throw new Error('Ti.Platform.username is read only property');
	}
	this.username = '';
	if (__SLAG__properties.version) {
		throw new Error('Ti.Platform.version is read only property');
	}
	this.version = '';
	if (__SLAG__properties.displayCaps) {
		throw new Error('Ti.Platform.displayCaps is read only property');
	}
	this.displayCaps = {};
	if (__SLAG__properties.BATTERY_STATE_CHARGING) {
		throw new Error('Ti.Platform.BATTERY_STATE_CHARGING is read only property');
	}
	this.BATTERY_STATE_CHARGING = 0;
	if (__SLAG__properties.BATTERY_STATE_FULL) {
		throw new Error('Ti.Platform.BATTERY_STATE_FULL is read only property');
	}
	this.BATTERY_STATE_FULL = 0;
	if (__SLAG__properties.BATTERY_STATE_UNKNOWN) {
		throw new Error('Ti.Platform.BATTERY_STATE_UNKNOWN is read only property');
	}
	this.BATTERY_STATE_UNKNOWN = 0;
	if (__SLAG__properties.BATTERY_STATE_UNPLUGGED) {
		throw new Error('Ti.Platform.BATTERY_STATE_UNPLUGGED is read only property');
	}
	this.BATTERY_STATE_UNPLUGGED = 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
Platform.prototype.addEventListener = function () {
};
Platform.prototype.removeEventListener = function () {
};
Platform.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Platform.prototype.fireEvent = function () {
};
Platform.prototype.createUUID = function (params) {
	var UUID = require('./Platform/UUID');
	return UUID(params);
};
Platform.prototype.canOpenURL = function () {
	return true;
};
Platform.prototype.openURL = function () {
	return true;
};
Platform.prototype.is24HourTimeFormat = function () {
	return true;
};
Platform.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Platform.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Platform.prototype.getApiName = function () {
	return this.apiName;
};
Platform.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Platform.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
Platform.prototype.getAddress = function () {
	return this.address;
};
Platform.prototype.getArchitecture = function () {
	return this.architecture;
};
Platform.prototype.getAvailableMemory = function () {
	return this.availableMemory;
};
Platform.prototype.getBatteryLevel = function () {
	return this.batteryLevel;
};
Platform.prototype.getBatteryMonitoring = function () {
	return this.batteryMonitoring;
};
Platform.prototype.setBatteryMonitoring = function (property) {
	this.batteryMonitoring = property;
};
Platform.prototype.getBatteryState = function () {
	return this.batteryState;
};
Platform.prototype.getId = function () {
	return this.id;
};
Platform.prototype.getLocale = function () {
	return this.locale;
};
Platform.prototype.getMacaddress = function () {
	return this.macaddress;
};
Platform.prototype.getManufacturer = function () {
	return this.manufacturer;
};
Platform.prototype.getModel = function () {
	return this.model;
};
Platform.prototype.getName = function () {
	return this.name;
};
Platform.prototype.getNetmask = function () {
	return this.netmask;
};
Platform.prototype.getOsname = function () {
	return this.osname;
};
Platform.prototype.getOstype = function () {
	return this.ostype;
};
Platform.prototype.getProcessorCount = function () {
	return this.processorCount;
};
Platform.prototype.getRuntime = function () {
	return this.runtime;
};
Platform.prototype.getUsername = function () {
	return this.username;
};
Platform.prototype.getVersion = function () {
	return this.version;
};
Platform.prototype.getDisplayCaps = function () {
	return this.displayCaps;
};
module.exports = function (properties) {
	return new Platform(properties);
};