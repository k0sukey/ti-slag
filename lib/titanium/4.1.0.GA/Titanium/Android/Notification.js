function Notification(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.Android.Notification';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.audioStreamType = properties.audioStreamType || 0;
	this.category = properties.category || '';
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
	this.priority = properties.priority || 0;
	this.sound = properties.sound || '';
	this.tickerText = properties.tickerText || '';
	this.visibility = properties.visibility || 0;
	this.when = properties.when || new Date();
	return this;
}
Notification.prototype.addEventListener = function () {
};
Notification.prototype.removeEventListener = function () {
};
Notification.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Notification.prototype.fireEvent = function () {
};
Notification.prototype.setLatestEventInfo = function () {
};
Notification.prototype.getBubbleParent = function () {
	return true;
};
Notification.prototype.setBubbleParent = function () {
};
Notification.prototype.getApiName = function () {
	return '';
};
Notification.prototype.getLifecycleContainer = function () {
	return {};
};
Notification.prototype.setLifecycleContainer = function () {
};
Notification.prototype.getAudioStreamType = function () {
	return 0;
};
Notification.prototype.setAudioStreamType = function () {
};
Notification.prototype.getCategory = function () {
	return '';
};
Notification.prototype.setCategory = function () {
};
Notification.prototype.getContentIntent = function () {
	return {};
};
Notification.prototype.setContentIntent = function () {
};
Notification.prototype.getContentText = function () {
	return '';
};
Notification.prototype.setContentText = function () {
};
Notification.prototype.getContentTitle = function () {
	return '';
};
Notification.prototype.setContentTitle = function () {
};
Notification.prototype.setContentView = function () {
};
Notification.prototype.getDefaults = function () {
	return 0;
};
Notification.prototype.setDefaults = function () {
};
Notification.prototype.getDeleteIntent = function () {
	return {};
};
Notification.prototype.setDeleteIntent = function () {
};
Notification.prototype.getFlags = function () {
	return 0;
};
Notification.prototype.setFlags = function () {
};
Notification.prototype.getIcon = function () {
	return '';
};
Notification.prototype.setIcon = function () {
};
Notification.prototype.getLedARGB = function () {
	return 0;
};
Notification.prototype.setLedARGB = function () {
};
Notification.prototype.getLedOffMS = function () {
	return 0;
};
Notification.prototype.setLedOffMS = function () {
};
Notification.prototype.getLedOnMS = function () {
	return 0;
};
Notification.prototype.setLedOnMS = function () {
};
Notification.prototype.getNumber = function () {
	return 0;
};
Notification.prototype.setNumber = function () {
};
Notification.prototype.getPriority = function () {
	return 0;
};
Notification.prototype.setPriority = function () {
};
Notification.prototype.getSound = function () {
	return '';
};
Notification.prototype.setSound = function () {
};
Notification.prototype.getTickerText = function () {
	return '';
};
Notification.prototype.setTickerText = function () {
};
Notification.prototype.getVisibility = function () {
	return 0;
};
Notification.prototype.setVisibility = function () {
};
Notification.prototype.getWhen = function () {
	return 0;
};
Notification.prototype.setWhen = function () {
};
module.exports = function (properties) {
	return new Notification(properties);
};