function Android(properties) {
	properties = properties || {};

	this.apiName = 'Titanium.Geolocation.Android';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.manualMode = properties.manualMode || undefined;

	return this;
}

Android.prototype.addEventListener = function(){};

Android.prototype.addLocationProvider = function(){};

Android.prototype.addLocationRule = function(){};

Android.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

Android.prototype.createLocationProvider = function(params){ var LocationProvider = require('./Android/LocationProvider'); return LocationProvider(params); };

Android.prototype.createLocationRule = function(params){ var LocationRule = require('./Android/LocationRule'); return LocationRule(params); };

Android.prototype.fireEvent = function(){};

Android.prototype.getApiName = function(){ return this.apiName; };

Android.prototype.getBubbleParent = function(){ return this.bubbleParent; };

Android.prototype.getManualMode = function(){ return this.manualMode; };

Android.prototype.removeEventListener = function(){};

Android.prototype.removeLocationProvider = function(){};

Android.prototype.removeLocationRule = function(){};

Android.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

Android.prototype.setManualMode = function(property){ this.manualMode = property; };

module.exports = function(properties){ return new Android(properties); };