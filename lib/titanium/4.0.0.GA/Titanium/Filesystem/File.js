function File(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Filesystem.File';
	this.bubbleParent = properties.bubbleParent || true;
	this.executable = properties.executable || true;
	this.hidden = properties.hidden || true;
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.name = properties.name || '';
	this.nativePath = properties.nativePath || '';
	this.parent = properties.parent || {};
	this.readonly = properties.readonly || true;
	this.remoteBackup = properties.remoteBackup || true;
	this.size = properties.size || 0;
	this.symbolicLink = properties.symbolicLink || true;
	this.writable = properties.writable || true;
	if (properties.writeable) {
		throw new Error('Ti.Filesystem.File.writeable was deprecated, since 1.8.1');
	}
	return this;
}
File.prototype.addEventListener = function () {
};
File.prototype.append = function () {
	return true;
};
File.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
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
File.prototype.fireEvent = function () {
};
File.prototype.getApiName = function () {
	return '';
};
File.prototype.getBubbleParent = function () {
	return true;
};
File.prototype.getDirectoryListing = function () {
	return '';
};
File.prototype.getExecutable = function () {
	return true;
};
File.prototype.getHidden = function () {
	return true;
};
File.prototype.getLifecycleContainer = function () {
	return {};
};
File.prototype.getName = function () {
	return '';
};
File.prototype.getNativePath = function () {
	return '';
};
File.prototype.getParent = function () {
	return '';
};
File.prototype.getReadonly = function () {
	return true;
};
File.prototype.getRemoteBackup = function () {
	return true;
};
File.prototype.getSize = function () {
	return 0;
};
File.prototype.getSymbolicLink = function () {
	return true;
};
File.prototype.getWritable = function () {
	return true;
};
File.prototype.getWriteable = function () {
	throw new Error('Ti.Filesystem.File.getWriteable was deprecated, since 1.8.1');
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
File.prototype.removeEventListener = function () {
};
File.prototype.rename = function () {
	return true;
};
File.prototype.resolve = function () {
	return '';
};
File.prototype.setBubbleParent = function () {
};
File.prototype.setHidden = function () {
};
File.prototype.setLifecycleContainer = function () {
};
File.prototype.setRemoteBackup = function () {
};
File.prototype.spaceAvailable = function () {
	return 0;
};
File.prototype.write = function () {
	return true;
};
module.exports = function (properties) {
	return new File(properties);
};