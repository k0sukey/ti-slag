function CloudPush(properties) {
	properties = properties || {};

	this.SERVICE_DISABLED = properties.SERVICE_DISABLED || undefined;
	this.SERVICE_INVALID = properties.SERVICE_INVALID || undefined;
	this.SERVICE_MISSING = properties.SERVICE_MISSING || undefined;
	this.SERVICE_VERSION_UPDATE_REQUIRED = properties.SERVICE_VERSION_UPDATE_REQUIRED || undefined;
	this.SUCCESS = properties.SUCCESS || undefined;
	this.apiName = 'Modules.CloudPush';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.enabled = properties.enabled || undefined;
	this.focusAppOnPush = properties.focusAppOnPush || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.showAppOnTrayClick = properties.showAppOnTrayClick || undefined;
	this.showTrayNotification = properties.showTrayNotification || undefined;
	this.showTrayNotificationsWhenFocused = properties.showTrayNotificationsWhenFocused || undefined;
	this.singleCallback = properties.singleCallback || undefined;

	return this;
}

CloudPush.prototype.addEventListener = function(){};

CloudPush.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

CloudPush.prototype.clearStatus = function(){};

CloudPush.prototype.fireEvent = function(){};

CloudPush.prototype.getApiName = function(){ return this.apiName; };

CloudPush.prototype.getBubbleParent = function(){ return this.bubbleParent; };

CloudPush.prototype.getEnabled = function(){ return this.enabled; };

CloudPush.prototype.getFocusAppOnPush = function(){ return this.focusAppOnPush; };

CloudPush.prototype.getLifecycleContainer = function(){ return this.lifecycleContainer; };

CloudPush.prototype.getShowAppOnTrayClick = function(){ return this.showAppOnTrayClick; };

CloudPush.prototype.getShowTrayNotification = function(){ return this.showTrayNotification; };

CloudPush.prototype.getShowTrayNotificationsWhenFocused = function(){ return this.showTrayNotificationsWhenFocused; };

CloudPush.prototype.getSingleCallback = function(){ return this.singleCallback; };

CloudPush.prototype.isGooglePlayServicesAvailable = function(){ return 0; };

CloudPush.prototype.removeEventListener = function(){};

CloudPush.prototype.retrieveDeviceToken = function(){};

CloudPush.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

CloudPush.prototype.setEnabled = function(property){ this.enabled = property; };

CloudPush.prototype.setFocusAppOnPush = function(property){ this.focusAppOnPush = property; };

CloudPush.prototype.setLifecycleContainer = function(property){ this.lifecycleContainer = property; };

CloudPush.prototype.setShowAppOnTrayClick = function(property){ this.showAppOnTrayClick = property; };

CloudPush.prototype.setShowTrayNotification = function(property){ this.showTrayNotification = property; };

CloudPush.prototype.setShowTrayNotificationsWhenFocused = function(property){ this.showTrayNotificationsWhenFocused = property; };

CloudPush.prototype.setSingleCallback = function(property){ this.singleCallback = property; };

module.exports = function(properties){ return new CloudPush(properties); };