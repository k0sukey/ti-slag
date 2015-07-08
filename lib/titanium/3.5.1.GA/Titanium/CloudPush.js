function CloudPush(properties) {
	properties = properties || {};
	this.SERVICE_DISABLED = properties.SERVICE_DISABLED || 0;
	this.SERVICE_INVALID = properties.SERVICE_INVALID || 0;
	this.SERVICE_MISSING = properties.SERVICE_MISSING || 0;
	this.SERVICE_VERSION_UPDATE_REQUIRED = properties.SERVICE_VERSION_UPDATE_REQUIRED || 0;
	this.SUCCESS = properties.SUCCESS || 0;
	this.apiName = 'Ti.CloudPush';
	this.bubbleParent = properties.bubbleParent || true;
	if (properties.enabled) {
		throw new Error('Ti.CloudPush.enabled was deprecated, since 3.2.0');
	}
	this.focusAppOnPush = properties.focusAppOnPush || true;
	this.showAppOnTrayClick = properties.showAppOnTrayClick || true;
	this.showTrayNotification = properties.showTrayNotification || true;
	this.showTrayNotificationsWhenFocused = properties.showTrayNotificationsWhenFocused || true;
	this.singleCallback = properties.singleCallback || true;
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
	throw new Error('Ti.CloudPush.getEnabled was deprecated, since 3.2.0');
};
CloudPush.prototype.getFocusAppOnPush = function () {
	return true;
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
	throw new Error('Ti.CloudPush.setEnabled was deprecated, since 3.2.0');
};
CloudPush.prototype.setFocusAppOnPush = function () {
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