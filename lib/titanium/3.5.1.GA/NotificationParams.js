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
	this.alertAction = __SLAG_PROPERTIES.alertAction || '';
	this.alertBody = __SLAG_PROPERTIES.alertBody || '';
	this.alertLaunchImage = __SLAG_PROPERTIES.alertLaunchImage || '';
	this.badge = __SLAG_PROPERTIES.badge || 0;
	this.category = __SLAG_PROPERTIES.category || '';
	this.date = __SLAG_PROPERTIES.date || new Date();
	this.repeat = __SLAG_PROPERTIES.repeat || '';
	this.sound = __SLAG_PROPERTIES.sound || '';
	this.timezone = __SLAG_PROPERTIES.timezone || '';
	this.userInfo = __SLAG_PROPERTIES.userInfo || {};
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
module.exports = function (properties) {
	return new NotificationParams(properties);
};