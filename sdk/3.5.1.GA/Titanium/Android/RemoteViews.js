function RemoteViews(properties) {
	properties = properties || {};

	this.apiName = 'Titanium.Android.RemoteViews';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.layoutId = properties.layoutId || undefined;
	this.packageName = properties.packageName || undefined;

	return this;
}

RemoteViews.prototype.addEventListener = function(){};

RemoteViews.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

RemoteViews.prototype.fireEvent = function(){};

RemoteViews.prototype.getApiName = function(){ return this.apiName; };

RemoteViews.prototype.getBubbleParent = function(){ return this.bubbleParent; };

RemoteViews.prototype.getLayoutId = function(){ return this.layoutId; };

RemoteViews.prototype.getPackageName = function(){ return this.packageName; };

RemoteViews.prototype.removeEventListener = function(){};

RemoteViews.prototype.setBoolean = function(){};

RemoteViews.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

RemoteViews.prototype.setChronometer = function(){};

RemoteViews.prototype.setDouble = function(){};

RemoteViews.prototype.setImageViewResource = function(){};

RemoteViews.prototype.setImageViewUri = function(){};

RemoteViews.prototype.setInt = function(){};

RemoteViews.prototype.setOnClickPendingIntent = function(){};

RemoteViews.prototype.setProgressBar = function(){};

RemoteViews.prototype.setString = function(){};

RemoteViews.prototype.setTextColor = function(){};

RemoteViews.prototype.setTextViewText = function(){};

RemoteViews.prototype.setUri = function(){};

RemoteViews.prototype.setViewVisibility = function(){};

module.exports = function(properties){ return new RemoteViews(properties); };