function Filesystem(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.Filesystem';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.IOS_FILE_PROTECTION_NONE = properties.IOS_FILE_PROTECTION_NONE || '';
	this.IOS_FILE_PROTECTION_COMPLETE = properties.IOS_FILE_PROTECTION_COMPLETE || '';
	this.IOS_FILE_PROTECTION_COMPLETE_UNLESS_OPEN = properties.IOS_FILE_PROTECTION_COMPLETE_UNLESS_OPEN || '';
	this.IOS_FILE_PROTECTION_COMPLETE_UNTIL_FIRST_USER_AUTHENTICATION = properties.IOS_FILE_PROTECTION_COMPLETE_UNTIL_FIRST_USER_AUTHENTICATION || '';
	this.resRawDirectory = properties.resRawDirectory || '';
	this.MODE_READ = properties.MODE_READ || 0;
	this.MODE_WRITE = properties.MODE_WRITE || 0;
	this.MODE_APPEND = properties.MODE_APPEND || 0;
	this.separator = properties.separator || '';
	this.lineEnding = properties.lineEnding || '';
	this.applicationCacheDirectory = properties.applicationCacheDirectory || '';
	this.applicationDataDirectory = properties.applicationDataDirectory || '';
	this.applicationDirectory = properties.applicationDirectory || '';
	this.applicationSupportDirectory = properties.applicationSupportDirectory || '';
	this.externalStorageDirectory = properties.externalStorageDirectory || '';
	this.resourcesDirectory = properties.resourcesDirectory || '';
	this.tempDirectory = properties.tempDirectory || '';
	return this;
}
Filesystem.prototype.addEventListener = function () {
};
Filesystem.prototype.removeEventListener = function () {
};
Filesystem.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Filesystem.prototype.fireEvent = function () {
};
Filesystem.prototype.directoryForSuite = function () {
	return '';
};
Filesystem.prototype.getFile = function () {
	return {};
};
Filesystem.prototype.createTempDirectory = function (params) {
	var TempDirectory = require('./Filesystem/TempDirectory');
	return TempDirectory(params);
};
Filesystem.prototype.createTempFile = function (params) {
	var TempFile = require('./Filesystem/TempFile');
	return TempFile(params);
};
Filesystem.prototype.isExternalStoragePresent = function () {
	return true;
};
Filesystem.prototype.openStream = function () {
	return {};
};
Filesystem.prototype.getBubbleParent = function () {
	return true;
};
Filesystem.prototype.setBubbleParent = function () {
};
Filesystem.prototype.getApiName = function () {
	return '';
};
Filesystem.prototype.getLifecycleContainer = function () {
	return {};
};
Filesystem.prototype.setLifecycleContainer = function () {
};
Filesystem.prototype.getResRawDirectory = function () {
	return '';
};
Filesystem.prototype.getSeparator = function () {
	return '';
};
Filesystem.prototype.getLineEnding = function () {
	return '';
};
Filesystem.prototype.getApplicationCacheDirectory = function () {
	return '';
};
Filesystem.prototype.getApplicationDataDirectory = function () {
	return '';
};
Filesystem.prototype.getApplicationDirectory = function () {
	return '';
};
Filesystem.prototype.getApplicationSupportDirectory = function () {
	return '';
};
Filesystem.prototype.getExternalStorageDirectory = function () {
	return '';
};
Filesystem.prototype.getResourcesDirectory = function () {
	return '';
};
Filesystem.prototype.getTempDirectory = function () {
	return '';
};
module.exports = function (properties) {
	return new Filesystem(properties);
};