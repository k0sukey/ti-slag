function File(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.Filesystem.File';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	if (properties.writeable) {
		throw new Error('Ti.Filesystem.File.writeable was deprecated, since 1.8.1');
	}
	this.executable = properties.executable || true;
	this.hidden = properties.hidden || true;
	this.name = properties.name || '';
	this.nativePath = properties.nativePath || '';
	this.parent = properties.parent || {};
	this.readonly = properties.readonly || true;
	this.remoteBackup = properties.remoteBackup || true;
	this.size = properties.size || 0;
	this.symbolicLink = properties.symbolicLink || true;
	this.writable = properties.writable || true;
	return this;
}
File.prototype.addEventListener = function () {
};
File.prototype.removeEventListener = function () {
};
File.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
File.prototype.fireEvent = function () {
};
File.prototype.getProtectionKey = function () {
	return {};
};
File.prototype.setProtectionKey = function () {
	return {};
};
File.prototype.getParent = function () {
	return {};
};
File.prototype.append = function () {
	return {};
};
File.prototype.copy = function () {
	return {};
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
	return {};
};
File.prototype.deleteFile = function () {
	return {};
};
File.prototype.exists = function () {
	return {};
};
File.prototype.extension = function () {
	return {};
};
File.prototype.getDirectoryListing = function () {
	return {};
};
File.prototype.isDirectory = function () {
	return {};
};
File.prototype.isFile = function () {
	return {};
};
File.prototype.modificationTimestamp = function () {
	return {};
};
File.prototype.move = function () {
	return {};
};
File.prototype.open = function () {
	return {};
};
File.prototype.read = function () {
	return {};
};
File.prototype.rename = function () {
	return {};
};
File.prototype.resolve = function () {
	return {};
};
File.prototype.spaceAvailable = function () {
	return {};
};
File.prototype.write = function () {
	return {};
};
File.prototype.getBubbleParent = function () {
	return {};
};
File.prototype.setBubbleParent = function () {
};
File.prototype.getApiName = function () {
	return {};
};
File.prototype.getLifecycleContainer = function () {
	return {};
};
File.prototype.setLifecycleContainer = function () {
};
File.prototype.getWriteable = function () {
	throw new Error('Ti.Filesystem.File.getWriteable was deprecated, since 1.8.1');
};
File.prototype.getExecutable = function () {
	return {};
};
File.prototype.getHidden = function () {
	return {};
};
File.prototype.setHidden = function () {
};
File.prototype.getName = function () {
	return {};
};
File.prototype.getNativePath = function () {
	return {};
};
File.prototype.getParent = function () {
	return {};
};
File.prototype.getReadonly = function () {
	return {};
};
File.prototype.getRemoteBackup = function () {
	return {};
};
File.prototype.setRemoteBackup = function () {
};
File.prototype.getSize = function () {
	return {};
};
File.prototype.getSymbolicLink = function () {
	return {};
};
File.prototype.getWritable = function () {
	return {};
};
module.exports = function (properties) {
	return new File(properties);
};