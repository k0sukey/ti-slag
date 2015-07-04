function NotificationManager(properties) {
	properties = properties || {};
	this.DEFAULT_ALL = properties.DEFAULT_ALL || undefined;
	this.DEFAULT_LIGHTS = properties.DEFAULT_LIGHTS || undefined;
	this.DEFAULT_SOUND = properties.DEFAULT_SOUND || undefined;
	this.DEFAULT_VIBRATE = properties.DEFAULT_VIBRATE || undefined;
	this.FLAG_AUTO_CANCEL = properties.FLAG_AUTO_CANCEL || undefined;
	this.FLAG_INSISTENT = properties.FLAG_INSISTENT || undefined;
	this.FLAG_NO_CLEAR = properties.FLAG_NO_CLEAR || undefined;
	this.FLAG_ONGOING_EVENT = properties.FLAG_ONGOING_EVENT || undefined;
	this.FLAG_ONLY_ALERT_ONCE = properties.FLAG_ONLY_ALERT_ONCE || undefined;
	this.FLAG_SHOW_LIGHTS = properties.FLAG_SHOW_LIGHTS || undefined;
	this.STREAM_DEFAULT = properties.STREAM_DEFAULT || undefined;
	this.apiName = 'Ti.Android.NotificationManager';
	this.bubbleParent = properties.bubbleParent || undefined;
	return this;
}
NotificationManager.prototype.addEventListener = function () {
};
NotificationManager.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
NotificationManager.prototype.cancel = function () {
};
NotificationManager.prototype.cancelAll = function () {
};
NotificationManager.prototype.fireEvent = function () {
};
NotificationManager.prototype.getApiName = function () {
	return '';
};
NotificationManager.prototype.getBubbleParent = function () {
	return true;
};
NotificationManager.prototype.notify = function () {
};
NotificationManager.prototype.removeEventListener = function () {
};
NotificationManager.prototype.setBubbleParent = function () {
};
module.exports = function (properties) {
	return new NotificationManager(properties);
};