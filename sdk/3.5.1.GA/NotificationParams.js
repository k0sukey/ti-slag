function NotificationParams(properties) {
	properties = properties || {};

	this.alertAction = properties.alertAction || undefined;
	this.alertBody = properties.alertBody || undefined;
	this.alertLaunchImage = properties.alertLaunchImage || undefined;
	this.badge = properties.badge || undefined;
	this.category = properties.category || undefined;
	this.date = properties.date || undefined;
	this.repeat = properties.repeat || undefined;
	this.sound = properties.sound || undefined;
	this.timezone = properties.timezone || undefined;
	this.userInfo = properties.userInfo || undefined;

	return this;
}



module.exports = function(properties){ return new NotificationParams(properties); };