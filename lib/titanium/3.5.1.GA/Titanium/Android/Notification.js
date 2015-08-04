var crypto = require('crypto');
function Notification(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'apiName',
			'audioStreamType',
			'bubbleParent',
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
			'sound',
			'tickerText',
			'when',
			'id'
		];
	if (__SLAG__names.length > 0 && process.env.SLAG_STRICT === 'true') {
		for (var __SLAG__name in __SLAG__properties) {
			if (__SLAG__names.indexOf(__SLAG__name) === -1) {
				throw new Error('Use user custom property ' + __SLAG__name);
			}
		}
	} else if (__SLAG__names.length === 0 && __SLAG__properties.length > 0 && process.env.SLAG_STRICT === 'true') {
		throw new Error('Use user custom properties. ' + __SLAG__properties.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.Android.Notification.apiName is read only property');
	}
	this.apiName = 'Ti.Android.Notification';
	this.audioStreamType = __SLAG__properties.audioStreamType || 0;
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
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
	this.sound = __SLAG__properties.sound || '';
	this.tickerText = __SLAG__properties.tickerText || '';
	this.when = __SLAG__properties.when || new Date();
	this.id = __SLAG__properties.id || '';
	return this;
}
Notification.prototype.addEventListener = function () {
};
Notification.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Notification.prototype.fireEvent = function () {
};
Notification.prototype.getApiName = function () {
	return this.apiName;
};
Notification.prototype.getAudioStreamType = function () {
	return this.audioStreamType;
};
Notification.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Notification.prototype.getContentIntent = function () {
	return this.contentIntent;
};
Notification.prototype.getContentText = function () {
	return this.contentText;
};
Notification.prototype.getContentTitle = function () {
	return this.contentTitle;
};
Notification.prototype.getDefaults = function () {
	return this.defaults;
};
Notification.prototype.getDeleteIntent = function () {
	return this.deleteIntent;
};
Notification.prototype.getFlags = function () {
	return this.flags;
};
Notification.prototype.getIcon = function () {
	return this.icon;
};
Notification.prototype.getLedARGB = function () {
	return this.ledARGB;
};
Notification.prototype.getLedOffMS = function () {
	return this.ledOffMS;
};
Notification.prototype.getLedOnMS = function () {
	return this.ledOnMS;
};
Notification.prototype.getNumber = function () {
	return this.number;
};
Notification.prototype.getSound = function () {
	return this.sound;
};
Notification.prototype.getTickerText = function () {
	return this.tickerText;
};
Notification.prototype.getWhen = function () {
	return this.when;
};
Notification.prototype.removeEventListener = function () {
};
Notification.prototype.setAudioStreamType = function (property) {
	this.audioStreamType = property;
};
Notification.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Notification.prototype.setContentIntent = function (property) {
	this.contentIntent = property;
};
Notification.prototype.setContentText = function (property) {
	this.contentText = property;
};
Notification.prototype.setContentTitle = function (property) {
	this.contentTitle = property;
};
Notification.prototype.setContentView = function (property) {
	this.contentView = property;
};
Notification.prototype.setDefaults = function (property) {
	this.defaults = property;
};
Notification.prototype.setDeleteIntent = function (property) {
	this.deleteIntent = property;
};
Notification.prototype.setFlags = function (property) {
	this.flags = property;
};
Notification.prototype.setIcon = function (property) {
	this.icon = property;
};
Notification.prototype.setLatestEventInfo = function () {
};
Notification.prototype.setLedARGB = function (property) {
	this.ledARGB = property;
};
Notification.prototype.setLedOffMS = function (property) {
	this.ledOffMS = property;
};
Notification.prototype.setLedOnMS = function (property) {
	this.ledOnMS = property;
};
Notification.prototype.setNumber = function (property) {
	this.number = property;
};
Notification.prototype.setSound = function (property) {
	this.sound = property;
};
Notification.prototype.setTickerText = function (property) {
	this.tickerText = property;
};
Notification.prototype.setWhen = function (property) {
	this.when = property;
};
module.exports = function (properties) {
	return new Notification(properties);
};