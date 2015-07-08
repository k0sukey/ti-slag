function UserNotificationCategory(properties) {
	properties = properties || {};
	this.actionsForDefaultContext = properties.actionsForDefaultContext || [];
	this.actionsForMinimalContext = properties.actionsForMinimalContext || [];
	this.apiName = 'Ti.App.iOS.UserNotificationCategory';
	this.identifier = properties.identifier || '';
	return this;
}
UserNotificationCategory.prototype.getApiName = function () {
	return '';
};
module.exports = function (properties) {
	return new UserNotificationCategory(properties);
};