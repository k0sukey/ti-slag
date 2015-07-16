function UserNotificationAction(properties) {
	properties = properties || {};
	this.apiName = 'Ti.App.iOS.UserNotificationAction';
	this.activationMode = properties.activationMode || 0;
	this.authenticationRequired = properties.authenticationRequired || true;
	this.destructive = properties.destructive || true;
	this.identifier = properties.identifier || '';
	this.title = properties.title || '';
	return this;
}
UserNotificationAction.prototype.getApiName = function () {
	return '';
};
UserNotificationAction.prototype.getActivationMode = function () {
	return 0;
};
UserNotificationAction.prototype.setActivationMode = function () {
};
module.exports = function (properties) {
	return new UserNotificationAction(properties);
};