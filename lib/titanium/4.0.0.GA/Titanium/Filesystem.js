var crypto = require('crypto');
function Filesystem(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'MODE_APPEND',
			'MODE_READ',
			'MODE_WRITE',
			'apiName',
			'applicationCacheDirectory',
			'applicationDataDirectory',
			'applicationDirectory',
			'applicationSupportDirectory',
			'bubbleParent',
			'externalStorageDirectory',
			'lifecycleContainer',
			'lineEnding',
			'resRawDirectory',
			'resourcesDirectory',
			'separator',
			'tempDirectory',
			'id'
		];
	if (__SLAG__names.length > 0 && process.env.SLAG_STRICT === 'true') {
		for (var __SLAG__name in __SLAG__properties) {
			if (__SLAG__names.indexOf(__SLAG__name) === -1) {
				throw new Error('Use user custom property ' + __SLAG__name);
			}
		}
	} else if (__SLAG__names.length === 0 && __SLAG__properties.length > 0 && process.env.SLAG_STRICT === 'true') {
		throw new Error('Use user custom properties. ' + __SLAG__properties.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	if (__SLAG__properties.MODE_APPEND) {
		throw new Error('Ti.Filesystem.MODE_APPEND is read only property');
	}
	this.MODE_APPEND = 0;
	if (__SLAG__properties.MODE_READ) {
		throw new Error('Ti.Filesystem.MODE_READ is read only property');
	}
	this.MODE_READ = 0;
	if (__SLAG__properties.MODE_WRITE) {
		throw new Error('Ti.Filesystem.MODE_WRITE is read only property');
	}
	this.MODE_WRITE = 0;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.Filesystem.apiName is read only property');
	}
	this.apiName = 'Ti.Filesystem';
	if (__SLAG__properties.applicationCacheDirectory) {
		throw new Error('Ti.Filesystem.applicationCacheDirectory is read only property');
	}
	this.applicationCacheDirectory = '';
	if (__SLAG__properties.applicationDataDirectory) {
		throw new Error('Ti.Filesystem.applicationDataDirectory is read only property');
	}
	this.applicationDataDirectory = '';
	if (__SLAG__properties.applicationDirectory) {
		throw new Error('Ti.Filesystem.applicationDirectory is read only property');
	}
	this.applicationDirectory = '';
	if (__SLAG__properties.applicationSupportDirectory) {
		throw new Error('Ti.Filesystem.applicationSupportDirectory is read only property');
	}
	this.applicationSupportDirectory = '';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.externalStorageDirectory) {
		throw new Error('Ti.Filesystem.externalStorageDirectory is read only property');
	}
	this.externalStorageDirectory = '';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	if (__SLAG__properties.lineEnding) {
		throw new Error('Ti.Filesystem.lineEnding is read only property');
	}
	this.lineEnding = '';
	if (__SLAG__properties.resRawDirectory) {
		throw new Error('Ti.Filesystem.resRawDirectory is read only property');
	}
	this.resRawDirectory = '';
	if (__SLAG__properties.resourcesDirectory) {
		throw new Error('Ti.Filesystem.resourcesDirectory is read only property');
	}
	this.resourcesDirectory = '';
	if (__SLAG__properties.separator) {
		throw new Error('Ti.Filesystem.separator is read only property');
	}
	this.separator = '';
	if (__SLAG__properties.tempDirectory) {
		throw new Error('Ti.Filesystem.tempDirectory is read only property');
	}
	this.tempDirectory = '';
	this.id = __SLAG__properties.id || '';
	return this;
}
Filesystem.prototype.addEventListener = function () {
};
Filesystem.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Filesystem.prototype.createTempDirectory = function (params) {
	var TempDirectory = require('./Filesystem/TempDirectory');
	return TempDirectory(params);
};
Filesystem.prototype.createTempFile = function (params) {
	var TempFile = require('./Filesystem/TempFile');
	return TempFile(params);
};
Filesystem.prototype.directoryForSuite = function () {
	return '';
};
Filesystem.prototype.fireEvent = function () {
};
Filesystem.prototype.getApiName = function () {
	return this.apiName;
};
Filesystem.prototype.getApplicationCacheDirectory = function () {
	return this.applicationCacheDirectory;
};
Filesystem.prototype.getApplicationDataDirectory = function () {
	return this.applicationDataDirectory;
};
Filesystem.prototype.getApplicationDirectory = function () {
	return this.applicationDirectory;
};
Filesystem.prototype.getApplicationSupportDirectory = function () {
	return this.applicationSupportDirectory;
};
Filesystem.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Filesystem.prototype.getExternalStorageDirectory = function () {
	return this.externalStorageDirectory;
};
Filesystem.prototype.getFile = function () {
	return {};
};
Filesystem.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Filesystem.prototype.getLineEnding = function () {
	return this.lineEnding;
};
Filesystem.prototype.getResRawDirectory = function () {
	return this.resRawDirectory;
};
Filesystem.prototype.getResourcesDirectory = function () {
	return this.resourcesDirectory;
};
Filesystem.prototype.getSeparator = function () {
	return this.separator;
};
Filesystem.prototype.getTempDirectory = function () {
	return this.tempDirectory;
};
Filesystem.prototype.isExternalStoragePresent = function () {
	return true;
};
Filesystem.prototype.openStream = function () {
	return {};
};
Filesystem.prototype.removeEventListener = function () {
};
Filesystem.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Filesystem.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
module.exports = function (properties) {
	return new Filesystem(properties);
};