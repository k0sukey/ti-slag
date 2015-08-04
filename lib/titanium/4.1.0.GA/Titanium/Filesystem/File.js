var crypto = require('crypto');
function File(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'writeable',
			'executable',
			'hidden',
			'name',
			'nativePath',
			'parent',
			'readonly',
			'remoteBackup',
			'size',
			'symbolicLink',
			'writable',
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
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.Filesystem.File.apiName is read only property');
	}
	this.apiName = 'Ti.Filesystem.File';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	if (__SLAG__properties.writeable) {
		throw new Error('Ti.Filesystem.File.writeable was deprecated, since 1.8.1');
	}
	if (__SLAG__properties.executable) {
		throw new Error('Ti.Filesystem.File.executable is read only property');
	}
	this.executable = true;
	this.hidden = __SLAG__properties.hidden || true;
	if (__SLAG__properties.name) {
		throw new Error('Ti.Filesystem.File.name is read only property');
	}
	this.name = '';
	if (__SLAG__properties.nativePath) {
		throw new Error('Ti.Filesystem.File.nativePath is read only property');
	}
	this.nativePath = '';
	if (__SLAG__properties.parent) {
		throw new Error('Ti.Filesystem.File.parent is read only property');
	}
	this.parent = {};
	if (__SLAG__properties.readonly) {
		throw new Error('Ti.Filesystem.File.readonly is read only property');
	}
	this.readonly = true;
	this.remoteBackup = __SLAG__properties.remoteBackup || true;
	if (__SLAG__properties.size) {
		throw new Error('Ti.Filesystem.File.size is read only property');
	}
	this.size = 0;
	if (__SLAG__properties.symbolicLink) {
		throw new Error('Ti.Filesystem.File.symbolicLink is read only property');
	}
	this.symbolicLink = true;
	if (__SLAG__properties.writable) {
		throw new Error('Ti.Filesystem.File.writable is read only property');
	}
	this.writable = true;
	this.id = __SLAG__properties.id || '';
	return this;
}
File.prototype.addEventListener = function () {
};
File.prototype.removeEventListener = function () {
};
File.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
File.prototype.fireEvent = function () {
};
File.prototype.getProtectionKey = function () {
	return '';
};
File.prototype.setProtectionKey = function () {
	return true;
};
File.prototype.getParent = function () {
	return this.parent;
};
File.prototype.append = function () {
	return true;
};
File.prototype.copy = function () {
	return true;
};
File.prototype.createDirectory = function (params) {
	var Directory = require('./File/Directory');
	return Directory(params);
};
File.prototype.createFile = function (params) {
	var File = require('./File/File');
	return File(params);
};
File.prototype.createTimestamp = function (params) {
	var Timestamp = require('./File/Timestamp');
	return Timestamp(params);
};
File.prototype.deleteDirectory = function () {
	return true;
};
File.prototype.deleteFile = function () {
	return true;
};
File.prototype.exists = function () {
	return true;
};
File.prototype.extension = function () {
	return '';
};
File.prototype.getDirectoryListing = function () {
	return '';
};
File.prototype.isDirectory = function () {
	return true;
};
File.prototype.isFile = function () {
	return true;
};
File.prototype.modificationTimestamp = function () {
	return 0;
};
File.prototype.move = function () {
	return true;
};
File.prototype.open = function () {
	return {};
};
File.prototype.read = function () {
	return {};
};
File.prototype.rename = function () {
	return true;
};
File.prototype.resolve = function () {
	return '';
};
File.prototype.spaceAvailable = function () {
	return 0;
};
File.prototype.write = function () {
	return true;
};
File.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
File.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
File.prototype.getApiName = function () {
	return this.apiName;
};
File.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
File.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
File.prototype.getWriteable = function () {
	throw new Error('Ti.Filesystem.File.getWriteable was deprecated, since 1.8.1');
};
File.prototype.getExecutable = function () {
	return this.executable;
};
File.prototype.getHidden = function () {
	return this.hidden;
};
File.prototype.setHidden = function (property) {
	this.hidden = property;
};
File.prototype.getName = function () {
	return this.name;
};
File.prototype.getNativePath = function () {
	return this.nativePath;
};
File.prototype.getParent = function () {
	return this.parent;
};
File.prototype.getReadonly = function () {
	return this.readonly;
};
File.prototype.getRemoteBackup = function () {
	return this.remoteBackup;
};
File.prototype.setRemoteBackup = function (property) {
	this.remoteBackup = property;
};
File.prototype.getSize = function () {
	return this.size;
};
File.prototype.getSymbolicLink = function () {
	return this.symbolicLink;
};
File.prototype.getWritable = function () {
	return this.writable;
};
module.exports = function (properties) {
	return new File(properties);
};