function BufferStream(properties) {
	properties = properties || {};

	this.apiName = 'Titanium.BufferStream';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;

	return this;
}

BufferStream.prototype.addEventListener = function(){};

BufferStream.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

BufferStream.prototype.close = function(){};

BufferStream.prototype.fireEvent = function(){};

BufferStream.prototype.getApiName = function(){ return this.apiName; };

BufferStream.prototype.getBubbleParent = function(){ return this.bubbleParent; };

BufferStream.prototype.getLifecycleContainer = function(){ return this.lifecycleContainer; };

BufferStream.prototype.isReadable = function(){ return true; };

BufferStream.prototype.isWriteable = function(){ return true; };

BufferStream.prototype.read = function(){ return 0; };

BufferStream.prototype.removeEventListener = function(){};

BufferStream.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

BufferStream.prototype.setLifecycleContainer = function(property){ this.lifecycleContainer = property; };

BufferStream.prototype.write = function(){ return 0; };

module.exports = function(properties){ return new BufferStream(properties); };