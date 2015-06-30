function IOStream(properties) {
	properties = properties || {};

	this.apiName = 'Titanium.IOStream';
	this.bubbleParent = properties.bubbleParent || undefined;

	return this;
}

IOStream.prototype.addEventListener = function(){};

IOStream.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

IOStream.prototype.close = function(){};

IOStream.prototype.fireEvent = function(){};

IOStream.prototype.getApiName = function(){ return this.apiName; };

IOStream.prototype.getBubbleParent = function(){ return this.bubbleParent; };

IOStream.prototype.isReadable = function(){ return true; };

IOStream.prototype.isWriteable = function(){ return true; };

IOStream.prototype.read = function(){ return 0; };

IOStream.prototype.removeEventListener = function(){};

IOStream.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

IOStream.prototype.write = function(){ return 0; };

module.exports = function(properties){ return new IOStream(properties); };