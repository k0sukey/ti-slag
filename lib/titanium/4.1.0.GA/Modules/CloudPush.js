function CloudPush(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Modules.CloudPush';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	if (properties.enabled) {
		throw new Error('Modules.CloudPush.enabled was deprecated, since 3.2.0');
	}
	this.showTrayNotification = properties.showTrayNotification || true;
	this.showAppOnTrayClick = properties.showAppOnTrayClick || true;
	this.showTrayNotificationsWhenFocused = properties.showTrayNotificationsWhenFocused || true;
	this.focusAppOnPush = properties.focusAppOnPush || true;
	this.singleCallback = properties.singleCallback || true;
	this.SUCCESS = properties.SUCCESS || 0;
	this.SERVICE_MISSING = properties.SERVICE_MISSING || 0;
	this.SERVICE_VERSION_UPDATE_REQUIRED = properties.SERVICE_VERSION_UPDATE_REQUIRED || 0;
	this.SERVICE_DISABLED = properties.SERVICE_DISABLED || 0;
	this.SERVICE_INVALID = properties.SERVICE_INVALID || 0;
	return this;
}
CloudPush.prototype.addEventListener = function () {
};
CloudPush.prototype.removeEventListener = function () {
};
CloudPush.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
CloudPush.prototype.fireEvent = function () {
};
CloudPush.prototype.retrieveDeviceToken = function () {
};
CloudPush.prototype.clearStatus = function () {
};
CloudPush.prototype.isGooglePlayServicesAvailable = function () {
	return 0;
};
CloudPush.prototype.getBubbleParent = function () {
	return true;
};
CloudPush.prototype.setBubbleParent = function () {
};
CloudPush.prototype.getApiName = function () {
	return '';
};
CloudPush.prototype.getLifecycleContainer = function () {
	return {};
};
CloudPush.prototype.setLifecycleContainer = function () {
};
CloudPush.prototype.getEnabled = function () {
	throw new Error('Modules.CloudPush.getEnabled was deprecated, since 3.2.0');
};
CloudPush.prototype.setEnabled = function () {
	throw new Error('Modules.CloudPush.setEnabled was deprecated, since 3.2.0');
};
CloudPush.prototype.getShowTrayNotification = function () {
	return true;
};
CloudPush.prototype.setShowTrayNotification = function () {
};
CloudPush.prototype.getShowAppOnTrayClick = function () {
	return true;
};
CloudPush.prototype.setShowAppOnTrayClick = function () {
};
CloudPush.prototype.getShowTrayNotificationsWhenFocused = function () {
	return true;
};
CloudPush.prototype.setShowTrayNotificationsWhenFocused = function () {
};
CloudPush.prototype.getFocusAppOnPush = function () {
	return true;
};
CloudPush.prototype.setFocusAppOnPush = function () {
};
CloudPush.prototype.getSingleCallback = function () {
	return true;
};
CloudPush.prototype.setSingleCallback = function () {
};
module.exports = function (properties) {
	return new CloudPush(properties);
};