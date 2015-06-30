function UserNotificationAction(properties) {
	properties = properties || {};
	this.activationMode = properties.activationMode || undefined;
	this.apiName = 'Titanium.App.iOS.UserNotificationAction';
	this.authenticationRequired = properties.authenticationRequired || undefined;
	this.destructive = properties.destructive || undefined;
	this.identifier = properties.identifier || undefined;
	this.title = properties.title || undefined;
	return this;
}
UserNotificationAction.prototype.getActivationMode = function () {
	return this.activationMode;
};
UserNotificationAction.prototype.getApiName = function () {
	return this.apiName;
};
UserNotificationAction.prototype.getAuthenticationRequired = function () {
	return this.authenticationRequired;
};
UserNotificationAction.prototype.getDestructive = function () {
	return this.destructive;
};
UserNotificationAction.prototype.getIdentifier = function () {
	return this.identifier;
};
UserNotificationAction.prototype.getTitle = function () {
	return this.title;
};
module.exports = function (properties) {
	return new UserNotificationAction(properties);
};