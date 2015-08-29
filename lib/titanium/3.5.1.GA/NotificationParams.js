var crypto = require('crypto');
function NotificationParams(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'alertAction',
			'alertBody',
			'alertLaunchImage',
			'badge',
			'category',
			'date',
			'repeat',
			'sound',
			'timezone',
			'userInfo',
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
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.alertAction = undefined;
	} else {
		this.alertAction = __SLAG_PROPERTIES.alertAction || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.alertBody = undefined;
	} else {
		this.alertBody = __SLAG_PROPERTIES.alertBody || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.alertLaunchImage = undefined;
	} else {
		this.alertLaunchImage = __SLAG_PROPERTIES.alertLaunchImage || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.badge = undefined;
	} else {
		this.badge = __SLAG_PROPERTIES.badge || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.category = undefined;
	} else {
		this.category = __SLAG_PROPERTIES.category || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.date = undefined;
	} else {
		this.date = __SLAG_PROPERTIES.date || new Date();
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.repeat = undefined;
	} else {
		this.repeat = __SLAG_PROPERTIES.repeat || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.sound = undefined;
	} else {
		this.sound = __SLAG_PROPERTIES.sound || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.timezone = undefined;
	} else {
		this.timezone = __SLAG_PROPERTIES.timezone || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.userInfo = undefined;
	} else {
		this.userInfo = __SLAG_PROPERTIES.userInfo || {};
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
module.exports = function (properties) {
	return new NotificationParams(properties);
};