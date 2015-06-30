function Proxy(properties) {
	properties = properties || {};

	this.apiName = 'Titanium.Proxy';
	this.bubbleParent = properties.bubbleParent || undefined;

	return this;
}

Proxy.prototype.addEventListener = function(){};

Proxy.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

Proxy.prototype.fireEvent = function(){};

Proxy.prototype.getApiName = function(){ return this.apiName; };

Proxy.prototype.getBubbleParent = function(){ return this.bubbleParent; };

Proxy.prototype.removeEventListener = function(){};

Proxy.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

module.exports = function(properties){ return new Proxy(properties); };