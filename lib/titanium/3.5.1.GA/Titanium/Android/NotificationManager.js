function NotificationManager(properties) {
	properties = properties || {};
	this.DEFAULT_ALL = properties.DEFAULT_ALL || 0;
	this.DEFAULT_LIGHTS = properties.DEFAULT_LIGHTS || 0;
	this.DEFAULT_SOUND = properties.DEFAULT_SOUND || 0;
	this.DEFAULT_VIBRATE = properties.DEFAULT_VIBRATE || 0;
	this.FLAG_AUTO_CANCEL = properties.FLAG_AUTO_CANCEL || 0;
	this.FLAG_INSISTENT = properties.FLAG_INSISTENT || 0;
	this.FLAG_NO_CLEAR = properties.FLAG_NO_CLEAR || 0;
	this.FLAG_ONGOING_EVENT = properties.FLAG_ONGOING_EVENT || 0;
	this.FLAG_ONLY_ALERT_ONCE = properties.FLAG_ONLY_ALERT_ONCE || 0;
	this.FLAG_SHOW_LIGHTS = properties.FLAG_SHOW_LIGHTS || 0;
	this.STREAM_DEFAULT = properties.STREAM_DEFAULT || 0;
	this.apiName = 'Ti.Android.NotificationManager';
	this.bubbleParent = properties.bubbleParent || true;
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