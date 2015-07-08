function Notification(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Android.Notification';
	this.audioStreamType = properties.audioStreamType || 0;
	this.bubbleParent = properties.bubbleParent || true;
	this.contentIntent = properties.contentIntent || {};
	this.contentText = properties.contentText || '';
	this.contentTitle = properties.contentTitle || '';
	this.contentView = properties.contentView || {};
	this.defaults = properties.defaults || 0;
	this.deleteIntent = properties.deleteIntent || {};
	this.flags = properties.flags || 0;
	this.icon = properties.icon || 0;
	this.ledARGB = properties.ledARGB || 0;
	this.ledOffMS = properties.ledOffMS || 0;
	this.ledOnMS = properties.ledOnMS || 0;
	this.number = properties.number || 0;
	this.sound = properties.sound || '';
	this.tickerText = properties.tickerText || '';
	this.when = properties.when || new Date();
	return this;
}
Notification.prototype.addEventListener = function () {
};
Notification.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Notification.prototype.fireEvent = function () {
};
Notification.prototype.getApiName = function () {
	return '';
};
Notification.prototype.getAudioStreamType = function () {
	return 0;
};
Notification.prototype.getBubbleParent = function () {
	return true;
};
Notification.prototype.getContentIntent = function () {
	return {};
};
Notification.prototype.getContentText = function () {
	return '';
};
Notification.prototype.getContentTitle = function () {
	return '';
};
Notification.prototype.getDefaults = function () {
	return 0;
};
Notification.prototype.getDeleteIntent = function () {
	return {};
};
Notification.prototype.getFlags = function () {
	return 0;
};
Notification.prototype.getIcon = function () {
	return 0;
};
Notification.prototype.getLedARGB = function () {
	return 0;
};
Notification.prototype.getLedOffMS = function () {
	return 0;
};
Notification.prototype.getLedOnMS = function () {
	return 0;
};
Notification.prototype.getNumber = function () {
	return 0;
};
Notification.prototype.getSound = function () {
	return '';
};
Notification.prototype.getTickerText = function () {
	return '';
};
Notification.prototype.getWhen = function () {
	return new Date();
};
Notification.prototype.removeEventListener = function () {
};
Notification.prototype.setAudioStreamType = function () {
};
Notification.prototype.setBubbleParent = function () {
};
Notification.prototype.setContentIntent = function () {
};
Notification.prototype.setContentText = function () {
};
Notification.prototype.setContentTitle = function () {
};
Notification.prototype.setContentView = function () {
};
Notification.prototype.setDefaults = function () {
};
Notification.prototype.setDeleteIntent = function () {
};
Notification.prototype.setFlags = function () {
};
Notification.prototype.setIcon = function () {
};
Notification.prototype.setLatestEventInfo = function () {
};
Notification.prototype.setLedARGB = function () {
};
Notification.prototype.setLedOffMS = function () {
};
Notification.prototype.setLedOnMS = function () {
};
Notification.prototype.setNumber = function () {
};
Notification.prototype.setSound = function () {
};
Notification.prototype.setTickerText = function () {
};
Notification.prototype.setWhen = function () {
};
module.exports = function (properties) {
	return new Notification(properties);
};