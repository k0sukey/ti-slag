function FileStream(properties) {
	properties = properties || {};

	this.apiName = 'Titanium.Filesystem.FileStream';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;

	return this;
}

FileStream.prototype.addEventListener = function(){};

FileStream.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

FileStream.prototype.close = function(){};

FileStream.prototype.fireEvent = function(){};

FileStream.prototype.getApiName = function(){ return this.apiName; };

FileStream.prototype.getBubbleParent = function(){ return this.bubbleParent; };

FileStream.prototype.getLifecycleContainer = function(){ return this.lifecycleContainer; };

FileStream.prototype.isReadable = function(){ return true; };

FileStream.prototype.isWriteable = function(){ return true; };

FileStream.prototype.read = function(){ return 0; };

FileStream.prototype.removeEventListener = function(){};

FileStream.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

FileStream.prototype.setLifecycleContainer = function(property){ this.lifecycleContainer = property; };

FileStream.prototype.write = function(){ return 0; };

module.exports = function(properties){ return new FileStream(properties); };