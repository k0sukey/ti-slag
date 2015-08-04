var crypto = require('crypto');
function NotificationParams(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
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
	this.alertAction = __SLAG__properties.alertAction || '';
	this.alertBody = __SLAG__properties.alertBody || '';
	this.alertLaunchImage = __SLAG__properties.alertLaunchImage || '';
	this.badge = __SLAG__properties.badge || 0;
	this.category = __SLAG__properties.category || '';
	this.date = __SLAG__properties.date || new Date();
	this.repeat = __SLAG__properties.repeat || '';
	this.sound = __SLAG__properties.sound || '';
	this.timezone = __SLAG__properties.timezone || '';
	this.userInfo = __SLAG__properties.userInfo || {};
	this.id = __SLAG__properties.id || '';
	return this;
}
module.exports = function (properties) {
	return new NotificationParams(properties);
};