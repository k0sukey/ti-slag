var crypto = require('crypto');
function Notification(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'audioStreamType',
			'category',
			'contentIntent',
			'contentText',
			'contentTitle',
			'contentView',
			'defaults',
			'deleteIntent',
			'flags',
			'icon',
			'ledARGB',
			'ledOffMS',
			'ledOnMS',
			'number',
			'priority',
			'sound',
			'tickerText',
			'visibility',
			'when',
			'id'
		];
	if (__SLAG__names.length > 0 && process.env.SLAG_STRICT) {
		for (var __SLAG__name in __SLAG__properties) {
			if (__SLAG__names.indexOf(__SLAG__name) === -1) {
				throw new Error('Use user custom property ' + __SLAG__name);
			}
		}
	} else if (__SLAG__names.length === 0 && __SLAG__properties.length > 0 && process.env.SLAG_STRICT) {
		throw new Error('Use user custom properties. ' + __SLAG__properties.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.Android.Notification.apiName is read only property');
	}
	this.apiName = 'Ti.Android.Notification';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.audioStreamType = __SLAG__properties.audioStreamType || 0;
	this.category = __SLAG__properties.category || '';
	this.contentIntent = __SLAG__properties.contentIntent || {};
	this.contentText = __SLAG__properties.contentText || '';
	this.contentTitle = __SLAG__properties.contentTitle || '';
	this.contentView = __SLAG__properties.contentView || {};
	this.defaults = __SLAG__properties.defaults || 0;
	this.deleteIntent = __SLAG__properties.deleteIntent || {};
	this.flags = __SLAG__properties.flags || 0;
	this.icon = __SLAG__properties.icon || 0;
	this.ledARGB = __SLAG__properties.ledARGB || 0;
	this.ledOffMS = __SLAG__properties.ledOffMS || 0;
	this.ledOnMS = __SLAG__properties.ledOnMS || 0;
	this.number = __SLAG__properties.number || 0;
	this.priority = __SLAG__properties.priority || 0;
	this.sound = __SLAG__properties.sound || '';
	this.tickerText = __SLAG__properties.tickerText || '';
	this.visibility = __SLAG__properties.visibility || 0;
	this.when = __SLAG__properties.when || new Date();
	this.id = __SLAG__properties.id || '';
	return this;
}
Notification.prototype.addEventListener = function () {
};
Notification.prototype.removeEventListener = function () {
};
Notification.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Notification.prototype.fireEvent = function () {
};
Notification.prototype.setLatestEventInfo = function () {
};
Notification.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Notification.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Notification.prototype.getApiName = function () {
	return this.apiName;
};
Notification.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Notification.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
Notification.prototype.getAudioStreamType = function () {
	return this.audioStreamType;
};
Notification.prototype.setAudioStreamType = function (property) {
	this.audioStreamType = property;
};
Notification.prototype.getCategory = function () {
	return this.category;
};
Notification.prototype.setCategory = function (property) {
	this.category = property;
};
Notification.prototype.getContentIntent = function () {
	return this.contentIntent;
};
Notification.prototype.setContentIntent = function (property) {
	this.contentIntent = property;
};
Notification.prototype.getContentText = function () {
	return this.contentText;
};
Notification.prototype.setContentText = function (property) {
	this.contentText = property;
};
Notification.prototype.getContentTitle = function () {
	return this.contentTitle;
};
Notification.prototype.setContentTitle = function (property) {
	this.contentTitle = property;
};
Notification.prototype.setContentView = function (property) {
	this.contentView = property;
};
Notification.prototype.getDefaults = function () {
	return this.defaults;
};
Notification.prototype.setDefaults = function (property) {
	this.defaults = property;
};
Notification.prototype.getDeleteIntent = function () {
	return this.deleteIntent;
};
Notification.prototype.setDeleteIntent = function (property) {
	this.deleteIntent = property;
};
Notification.prototype.getFlags = function () {
	return this.flags;
};
Notification.prototype.setFlags = function (property) {
	this.flags = property;
};
Notification.prototype.getIcon = function () {
	return this.icon;
};
Notification.prototype.setIcon = function (property) {
	this.icon = property;
};
Notification.prototype.getLedARGB = function () {
	return this.ledARGB;
};
Notification.prototype.setLedARGB = function (property) {
	this.ledARGB = property;
};
Notification.prototype.getLedOffMS = function () {
	return this.ledOffMS;
};
Notification.prototype.setLedOffMS = function (property) {
	this.ledOffMS = property;
};
Notification.prototype.getLedOnMS = function () {
	return this.ledOnMS;
};
Notification.prototype.setLedOnMS = function (property) {
	this.ledOnMS = property;
};
Notification.prototype.getNumber = function () {
	return this.number;
};
Notification.prototype.setNumber = function (property) {
	this.number = property;
};
Notification.prototype.getPriority = function () {
	return this.priority;
};
Notification.prototype.setPriority = function (property) {
	this.priority = property;
};
Notification.prototype.getSound = function () {
	return this.sound;
};
Notification.prototype.setSound = function (property) {
	this.sound = property;
};
Notification.prototype.getTickerText = function () {
	return this.tickerText;
};
Notification.prototype.setTickerText = function (property) {
	this.tickerText = property;
};
Notification.prototype.getVisibility = function () {
	return this.visibility;
};
Notification.prototype.setVisibility = function (property) {
	this.visibility = property;
};
Notification.prototype.getWhen = function () {
	return this.when;
};
Notification.prototype.setWhen = function (property) {
	this.when = property;
};
module.exports = function (properties) {
	return new Notification(properties);
};