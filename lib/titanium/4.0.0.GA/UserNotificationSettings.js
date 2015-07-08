function UserNotificationSettings(properties) {
	properties = properties || {};
	this.categories = properties.categories || [];
	this.types = properties.types || 0;
	return this;
}
module.exports = function (properties) {
	return new UserNotificationSettings(properties);
};