function UserNotificationAction(properties) {
	properties = properties || {};
	this.activationMode = properties.activationMode || 0;
	this.apiName = 'Ti.App.iOS.UserNotificationAction';
	this.authenticationRequired = properties.authenticationRequired || true;
	this.destructive = properties.destructive || true;
	this.identifier = properties.identifier || '';
	this.title = properties.title || '';
	return this;
}
UserNotificationAction.prototype.getActivationMode = function () {
	return 0;
};
UserNotificationAction.prototype.getApiName = function () {
	return '';
};
module.exports = function (properties) {
	return new UserNotificationAction(properties);
};