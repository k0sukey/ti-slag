function NotificationParams(properties) {
	properties = properties || {};
	this.alertAction = properties.alertAction || '';
	this.alertBody = properties.alertBody || '';
	this.alertLaunchImage = properties.alertLaunchImage || '';
	this.badge = properties.badge || 0;
	this.category = properties.category || '';
	this.date = properties.date || new Date();
	this.repeat = properties.repeat || '';
	this.sound = properties.sound || '';
	this.timezone = properties.timezone || '';
	this.userInfo = properties.userInfo || {};
	return this;
}
module.exports = function (properties) {
	return new NotificationParams(properties);
};