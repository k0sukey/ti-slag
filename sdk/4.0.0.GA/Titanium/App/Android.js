function Android(properties) {
	properties = properties || {};

	this.R = properties.R || undefined;
	this.apiName = 'Titanium.App.Android';
	this.appVersionCode = properties.appVersionCode || undefined;
	this.appVersionName = properties.appVersionName || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.launchIntent = properties.launchIntent || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;

	return this;
}

Android.prototype.addEventListener = function(){};

Android.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

Android.prototype.fireEvent = function(){};

Android.prototype.getApiName = function(){ return this.apiName; };

Android.prototype.getAppVersionCode = function(){ return this.appVersionCode; };

Android.prototype.getAppVersionName = function(){ return this.appVersionName; };

Android.prototype.getBubbleParent = function(){ return this.bubbleParent; };

Android.prototype.getLaunchIntent = function(){ return this.launchIntent; };

Android.prototype.getLifecycleContainer = function(){ return this.lifecycleContainer; };

Android.prototype.removeEventListener = function(){};

Android.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

Android.prototype.setLifecycleContainer = function(property){ this.lifecycleContainer = property; };

module.exports = function(properties){ return new Android(properties); };