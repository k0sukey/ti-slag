function UserNotificationCategory(properties) {
	properties = properties || {};
	this.actionsForDefaultContext = properties.actionsForDefaultContext || undefined;
	this.actionsForMinimalContext = properties.actionsForMinimalContext || undefined;
	this.apiName = 'Titanium.App.iOS.UserNotificationCategory';
	this.identifier = properties.identifier || undefined;
	return this;
}
UserNotificationCategory.prototype.getActionsForDefaultContext = function () {
	return this.actionsForDefaultContext;
};
UserNotificationCategory.prototype.getActionsForMinimalContext = function () {
	return this.actionsForMinimalContext;
};
UserNotificationCategory.prototype.getApiName = function () {
	return this.apiName;
};
UserNotificationCategory.prototype.getIdentifier = function () {
	return this.identifier;
};
module.exports = function (properties) {
	return new UserNotificationCategory(properties);
};