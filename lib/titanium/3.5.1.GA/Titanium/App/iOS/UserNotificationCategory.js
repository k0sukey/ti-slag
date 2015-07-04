function UserNotificationCategory(properties) {
	properties = properties || {};
	this.actionsForDefaultContext = properties.actionsForDefaultContext || undefined;
	this.actionsForMinimalContext = properties.actionsForMinimalContext || undefined;
	this.apiName = 'Ti.App.iOS.UserNotificationCategory';
	this.identifier = properties.identifier || undefined;
	return this;
}
UserNotificationCategory.prototype.getActionsForDefaultContext = function () {
	return [];
};
UserNotificationCategory.prototype.getActionsForMinimalContext = function () {
	return [];
};
UserNotificationCategory.prototype.getApiName = function () {
	return '';
};
UserNotificationCategory.prototype.getIdentifier = function () {
	return '';
};
module.exports = function (properties) {
	return new UserNotificationCategory(properties);
};