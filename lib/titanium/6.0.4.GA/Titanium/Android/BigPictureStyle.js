var crypto = require('crypto');
function BigPictureStyle(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'bigLargeIcon',
			'bigPicture',
			'bigContentTitle',
			'decodeRetries',
			'summaryText',
			'id'
		];
	if (__SLAG_NAMES.length > 0 && process.env.SLAG_STRICT === 'true') {
		for (var __SLAG_NAME in __SLAG_PROPERTIES) {
			if (__SLAG_NAMES.indexOf(__SLAG_NAME) === -1) {
				throw new Error('Use user custom property ' + __SLAG_NAME);
			}
		}
	} else if (__SLAG_NAMES.length === 0 && __SLAG_PROPERTIES.length > 0 && process.env.SLAG_STRICT === 'true') {
		throw new Error('Use user custom properties. ' + __SLAG_PROPERTIES.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.bigLargeIcon = undefined;
	} else {
		this.bigLargeIcon = __SLAG_PROPERTIES.bigLargeIcon || 0;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.bigPicture = undefined;
	} else {
		this.bigPicture = __SLAG_PROPERTIES.bigPicture || 0;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.bigContentTitle = undefined;
	} else {
		this.bigContentTitle = __SLAG_PROPERTIES.bigContentTitle || '';
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.decodeRetries = undefined;
	} else {
		this.decodeRetries = __SLAG_PROPERTIES.decodeRetries || 0;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.summaryText = undefined;
	} else {
		this.summaryText = __SLAG_PROPERTIES.summaryText || '';
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
module.exports = function (properties) {
	return new BigPictureStyle(properties);
};