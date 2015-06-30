function KeyValues(properties) {
	properties = properties || {};

	this.apiName = 'Titanium.Cloud.KeyValues';
	this.bubbleParent = properties.bubbleParent || undefined;

	return this;
}

KeyValues.prototype.append = function(){};

KeyValues.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

KeyValues.prototype.get = function(){};

KeyValues.prototype.getApiName = function(){ return this.apiName; };

KeyValues.prototype.getBubbleParent = function(){ return this.bubbleParent; };

KeyValues.prototype.increment = function(){};

KeyValues.prototype.remove = function(){};

KeyValues.prototype.set = function(){};

KeyValues.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

module.exports = function(properties){ return new KeyValues(properties); };