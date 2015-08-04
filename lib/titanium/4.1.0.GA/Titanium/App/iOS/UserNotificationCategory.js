var crypto = require('crypto');
function UserNotificationCategory(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'apiName',
			'actionsForDefaultContext',
			'actionsForMinimalContext',
			'identifier',
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
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.App.iOS.UserNotificationCategory.apiName is read only property');
	}
	this.apiName = 'Ti.App.iOS.UserNotificationCategory';
	this.actionsForDefaultContext = __SLAG__properties.actionsForDefaultContext || [];
	this.actionsForMinimalContext = __SLAG__properties.actionsForMinimalContext || [];
	this.identifier = __SLAG__properties.identifier || '';
	this.id = __SLAG__properties.id || '';
	return this;
}
UserNotificationCategory.prototype.getApiName = function () {
	return this.apiName;
};
module.exports = function (properties) {
	return new UserNotificationCategory(properties);
};