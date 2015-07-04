function UserNotificationAction(properties) {
	properties = properties || {};
	this.activationMode = properties.activationMode || undefined;
	this.apiName = 'Ti.App.iOS.UserNotificationAction';
	this.authenticationRequired = properties.authenticationRequired || undefined;
	this.destructive = properties.destructive || undefined;
	this.identifier = properties.identifier || undefined;
	this.title = properties.title || undefined;
	return this;
}
UserNotificationAction.prototype.getActivationMode = function () {
	return 0;
};
UserNotificationAction.prototype.getApiName = function () {
	return '';
};
UserNotificationAction.prototype.getAuthenticationRequired = function () {
	return true;
};
UserNotificationAction.prototype.getDestructive = function () {
	return true;
};
UserNotificationAction.prototype.getIdentifier = function () {
	return '';
};
UserNotificationAction.prototype.getTitle = function () {
	return '';
};
module.exports = function (properties) {
	return new UserNotificationAction(properties);
};