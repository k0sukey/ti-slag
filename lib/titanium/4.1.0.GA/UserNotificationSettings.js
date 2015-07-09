function UserNotificationSettings(properties) {
	properties = properties || {};
	this.types = properties.types || 0;
	this.categories = properties.categories || [];
	return this;
}
module.exports = function (properties) {
	return new UserNotificationSettings(properties);
};