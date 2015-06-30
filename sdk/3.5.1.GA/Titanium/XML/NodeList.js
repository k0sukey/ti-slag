function NodeList(properties) {
	properties = properties || {};

	this.apiName = 'Titanium.XML.NodeList';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.length = properties.length || undefined;

	return this;
}

NodeList.prototype.addEventListener = function(){};

NodeList.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

NodeList.prototype.fireEvent = function(){};

NodeList.prototype.getApiName = function(){ return this.apiName; };

NodeList.prototype.getBubbleParent = function(){ return this.bubbleParent; };

NodeList.prototype.getLength = function(){ return this.length; };

NodeList.prototype.item = function(){ return {}; };

NodeList.prototype.removeEventListener = function(){};

NodeList.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

module.exports = function(properties){ return new NodeList(properties); };