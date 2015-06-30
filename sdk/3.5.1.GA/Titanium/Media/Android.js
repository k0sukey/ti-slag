function Android(properties) {
	properties = properties || {};

	this.apiName = 'Titanium.Media.Android';
	this.bubbleParent = properties.bubbleParent || undefined;

	return this;
}

Android.prototype.addEventListener = function(){};

Android.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

Android.prototype.fireEvent = function(){};

Android.prototype.getApiName = function(){ return this.apiName; };

Android.prototype.getBubbleParent = function(){ return this.bubbleParent; };

Android.prototype.removeEventListener = function(){};

Android.prototype.scanMediaFiles = function(){};

Android.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

Android.prototype.setSystemWallpaper = function(){};

module.exports = function(properties){ return new Android(properties); };