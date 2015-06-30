function LocationProvider(properties) {
	properties = properties || {};

	this.apiName = 'Titanium.Geolocation.Android.LocationProvider';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.minUpdateDistance = properties.minUpdateDistance || undefined;
	this.minUpdateTime = properties.minUpdateTime || undefined;
	this.name = properties.name || undefined;

	return this;
}

LocationProvider.prototype.addEventListener = function(){};

LocationProvider.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

LocationProvider.prototype.fireEvent = function(){};

LocationProvider.prototype.getApiName = function(){ return this.apiName; };

LocationProvider.prototype.getBubbleParent = function(){ return this.bubbleParent; };

LocationProvider.prototype.getLifecycleContainer = function(){ return this.lifecycleContainer; };

LocationProvider.prototype.getMinUpdateDistance = function(){ return this.minUpdateDistance; };

LocationProvider.prototype.getMinUpdateTime = function(){ return this.minUpdateTime; };

LocationProvider.prototype.getName = function(){ return this.name; };

LocationProvider.prototype.removeEventListener = function(){};

LocationProvider.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

LocationProvider.prototype.setLifecycleContainer = function(property){ this.lifecycleContainer = property; };

LocationProvider.prototype.setMinUpdateDistance = function(property){ this.minUpdateDistance = property; };

LocationProvider.prototype.setMinUpdateTime = function(property){ this.minUpdateTime = property; };

LocationProvider.prototype.setName = function(property){ this.name = property; };

module.exports = function(properties){ return new LocationProvider(properties); };