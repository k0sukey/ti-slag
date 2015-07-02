function File(properties) {
	properties = properties || {};
	this.apiName = 'Titanium.Filesystem.File';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.executable = properties.executable || undefined;
	this.hidden = properties.hidden || undefined;
	this.name = properties.name || undefined;
	this.nativePath = properties.nativePath || undefined;
	this.parent = properties.parent || undefined;
	this.readonly = properties.readonly || undefined;
	this.remoteBackup = properties.remoteBackup || undefined;
	this.size = properties.size || undefined;
	this.symbolicLink = properties.symbolicLink || undefined;
	this.writable = properties.writable || undefined;
	this.writeable = properties.writeable || undefined;
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
	return this.apiName;
};
File.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
File.prototype.getDirectoryListing = function () {
	return '';
};
File.prototype.getExecutable = function () {
	return this.executable;
};
File.prototype.getHidden = function () {
	return this.hidden;
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
File.prototype.getSize = function () {
	return this.size;
};
File.prototype.getSymbolicLink = function () {
	return this.symbolicLink;
};
File.prototype.getWritable = function () {
	return this.writable;
};
File.prototype.getWriteable = function () {
	return this.writeable;
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
File.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
File.prototype.setHidden = function (property) {
	this.hidden = property;
};
File.prototype.setRemoteBackup = function (property) {
	this.remoteBackup = property;
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