function CloudPush(properties) {
	properties = properties || {};
	this.SERVICE_DISABLED = properties.SERVICE_DISABLED || undefined;
	this.SERVICE_INVALID = properties.SERVICE_INVALID || undefined;
	this.SERVICE_MISSING = properties.SERVICE_MISSING || undefined;
	this.SERVICE_VERSION_UPDATE_REQUIRED = properties.SERVICE_VERSION_UPDATE_REQUIRED || undefined;
	this.SUCCESS = properties.SUCCESS || undefined;
	this.apiName = 'Modules.CloudPush';
	this.bubbleParent = properties.bubbleParent || undefined;
	if (properties.enabled) {
		throw new Error('Modules.CloudPush.enabled was deprecated, since 3.2.0');
	}
	this.focusAppOnPush = properties.focusAppOnPush || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.showAppOnTrayClick = properties.showAppOnTrayClick || undefined;
	this.showTrayNotification = properties.showTrayNotification || undefined;
	this.showTrayNotificationsWhenFocused = properties.showTrayNotificationsWhenFocused || undefined;
	this.singleCallback = properties.singleCallback || undefined;
	return this;
}
CloudPush.prototype.addEventListener = function () {
};
CloudPush.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
CloudPush.prototype.clearStatus = function () {
};
CloudPush.prototype.fireEvent = function () {
};
CloudPush.prototype.getApiName = function () {
	return '';
};
CloudPush.prototype.getBubbleParent = function () {
	return true;
};
CloudPush.prototype.getEnabled = function () {
	throw new Error('Modules.CloudPush.getEnabled was deprecated, since 3.2.0');
};
CloudPush.prototype.getFocusAppOnPush = function () {
	return true;
};
CloudPush.prototype.getLifecycleContainer = function () {
	return {};
};
CloudPush.prototype.getShowAppOnTrayClick = function () {
	return true;
};
CloudPush.prototype.getShowTrayNotification = function () {
	return true;
};
CloudPush.prototype.getShowTrayNotificationsWhenFocused = function () {
	return true;
};
CloudPush.prototype.getSingleCallback = function () {
	return true;
};
CloudPush.prototype.isGooglePlayServicesAvailable = function () {
	return 0;
};
CloudPush.prototype.removeEventListener = function () {
};
CloudPush.prototype.retrieveDeviceToken = function () {
};
CloudPush.prototype.setBubbleParent = function () {
};
CloudPush.prototype.setEnabled = function () {
	throw new Error('Modules.CloudPush.setEnabled was deprecated, since 3.2.0');
};
CloudPush.prototype.setFocusAppOnPush = function () {
};
CloudPush.prototype.setLifecycleContainer = function () {
};
CloudPush.prototype.setShowAppOnTrayClick = function () {
};
CloudPush.prototype.setShowTrayNotification = function () {
};
CloudPush.prototype.setShowTrayNotificationsWhenFocused = function () {
};
CloudPush.prototype.setSingleCallback = function () {
};
module.exports = function (properties) {
	return new CloudPush(properties);
};