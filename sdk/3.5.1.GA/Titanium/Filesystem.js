function Filesystem(properties) {
	properties = properties || {};

	this.MODE_APPEND = properties.MODE_APPEND || undefined;
	this.MODE_READ = properties.MODE_READ || undefined;
	this.MODE_WRITE = properties.MODE_WRITE || undefined;
	this.apiName = 'Titanium.Filesystem';
	this.applicationCacheDirectory = properties.applicationCacheDirectory || undefined;
	this.applicationDataDirectory = properties.applicationDataDirectory || undefined;
	this.applicationDirectory = properties.applicationDirectory || undefined;
	this.applicationSupportDirectory = properties.applicationSupportDirectory || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.externalStorageDirectory = properties.externalStorageDirectory || undefined;
	this.lineEnding = properties.lineEnding || undefined;
	this.resRawDirectory = properties.resRawDirectory || undefined;
	this.resourcesDirectory = properties.resourcesDirectory || undefined;
	this.separator = properties.separator || undefined;
	this.tempDirectory = properties.tempDirectory || undefined;

	return this;
}

Filesystem.prototype.addEventListener = function(){};

Filesystem.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

Filesystem.prototype.createTempDirectory = function(params){ var TempDirectory = require('./Filesystem/TempDirectory'); return TempDirectory(params); };

Filesystem.prototype.createTempFile = function(params){ var TempFile = require('./Filesystem/TempFile'); return TempFile(params); };

Filesystem.prototype.fireEvent = function(){};

Filesystem.prototype.getApiName = function(){ return this.apiName; };

Filesystem.prototype.getApplicationCacheDirectory = function(){ return this.applicationCacheDirectory; };

Filesystem.prototype.getApplicationDataDirectory = function(){ return this.applicationDataDirectory; };

Filesystem.prototype.getApplicationDirectory = function(){ return this.applicationDirectory; };

Filesystem.prototype.getApplicationSupportDirectory = function(){ return this.applicationSupportDirectory; };

Filesystem.prototype.getBubbleParent = function(){ return this.bubbleParent; };

Filesystem.prototype.getExternalStorageDirectory = function(){ return this.externalStorageDirectory; };

Filesystem.prototype.getFile = function(){ return {}; };

Filesystem.prototype.getLineEnding = function(){ return this.lineEnding; };

Filesystem.prototype.getResRawDirectory = function(){ return this.resRawDirectory; };

Filesystem.prototype.getResourcesDirectory = function(){ return this.resourcesDirectory; };

Filesystem.prototype.getSeparator = function(){ return this.separator; };

Filesystem.prototype.getTempDirectory = function(){ return this.tempDirectory; };

Filesystem.prototype.isExternalStoragePresent = function(){ return true; };

Filesystem.prototype.openStream = function(){ return {}; };

Filesystem.prototype.removeEventListener = function(){};

Filesystem.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

module.exports = function(properties){ return new Filesystem(properties); };