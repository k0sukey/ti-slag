function UserNotificationSettings(properties) {
	properties = properties || {};
	this.categories = properties.categories || undefined;
	this.types = properties.types || undefined;
	return this;
}
module.exports = function (properties) {
	return new UserNotificationSettings(properties);
};