function LocationRule(properties) {
	properties = properties || {};

	this.accuracy = properties.accuracy || undefined;
	this.apiName = 'Titanium.Geolocation.Android.LocationRule';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.maxAge = properties.maxAge || undefined;
	this.minAge = properties.minAge || undefined;
	this.name = properties.name || undefined;

	return this;
}

LocationRule.prototype.addEventListener = function(){};

LocationRule.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

LocationRule.prototype.fireEvent = function(){};

LocationRule.prototype.getAccuracy = function(){ return this.accuracy; };

LocationRule.prototype.getApiName = function(){ return this.apiName; };

LocationRule.prototype.getBubbleParent = function(){ return this.bubbleParent; };

LocationRule.prototype.getLifecycleContainer = function(){ return this.lifecycleContainer; };

LocationRule.prototype.getMaxAge = function(){ return this.maxAge; };

LocationRule.prototype.getMinAge = function(){ return this.minAge; };

LocationRule.prototype.getName = function(){ return this.name; };

LocationRule.prototype.removeEventListener = function(){};

LocationRule.prototype.setAccuracy = function(property){ this.accuracy = property; };

LocationRule.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

LocationRule.prototype.setLifecycleContainer = function(property){ this.lifecycleContainer = property; };

LocationRule.prototype.setMaxAge = function(property){ this.maxAge = property; };

LocationRule.prototype.setMinAge = function(property){ this.minAge = property; };

LocationRule.prototype.setName = function(property){ this.name = property; };

module.exports = function(properties){ return new LocationRule(properties); };