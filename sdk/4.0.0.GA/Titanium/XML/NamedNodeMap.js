function NamedNodeMap(properties) {
	properties = properties || {};

	this.apiName = 'Titanium.XML.NamedNodeMap';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.length = properties.length || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;

	return this;
}

NamedNodeMap.prototype.addEventListener = function(){};

NamedNodeMap.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

NamedNodeMap.prototype.fireEvent = function(){};

NamedNodeMap.prototype.getApiName = function(){ return this.apiName; };

NamedNodeMap.prototype.getBubbleParent = function(){ return this.bubbleParent; };

NamedNodeMap.prototype.getLength = function(){ return this.length; };

NamedNodeMap.prototype.getLifecycleContainer = function(){ return this.lifecycleContainer; };

NamedNodeMap.prototype.getNamedItem = function(){ return {}; };

NamedNodeMap.prototype.getNamedItemNS = function(){ return {}; };

NamedNodeMap.prototype.item = function(){ return {}; };

NamedNodeMap.prototype.removeEventListener = function(){};

NamedNodeMap.prototype.removeNamedItem = function(){ return {}; };

NamedNodeMap.prototype.removeNamedItemNS = function(){ return {}; };

NamedNodeMap.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

NamedNodeMap.prototype.setLifecycleContainer = function(property){ this.lifecycleContainer = property; };

NamedNodeMap.prototype.setNamedItem = function(){ return {}; };

NamedNodeMap.prototype.setNamedItemNS = function(){ return {}; };

module.exports = function(properties){ return new NamedNodeMap(properties); };