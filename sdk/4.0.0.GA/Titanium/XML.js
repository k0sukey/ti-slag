function XML(properties) {
	properties = properties || {};

	this.apiName = 'Titanium.XML';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;

	return this;
}

XML.prototype.addEventListener = function(){};

XML.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

XML.prototype.fireEvent = function(){};

XML.prototype.getApiName = function(){ return this.apiName; };

XML.prototype.getBubbleParent = function(){ return this.bubbleParent; };

XML.prototype.getLifecycleContainer = function(){ return this.lifecycleContainer; };

XML.prototype.parseString = function(){ return {}; };

XML.prototype.removeEventListener = function(){};

XML.prototype.serializeToString = function(){ return ''; };

XML.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

XML.prototype.setLifecycleContainer = function(property){ this.lifecycleContainer = property; };

module.exports = function(properties){ return new XML(properties); };