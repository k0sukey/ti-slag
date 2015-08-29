var crypto = require('crypto');
function UserNotificationCategory(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'actionsForDefaultContext',
			'actionsForMinimalContext',
			'apiName',
			'identifier',
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
		this.actionsForDefaultContext = undefined;
	} else {
		this.actionsForDefaultContext = __SLAG_PROPERTIES.actionsForDefaultContext || [];
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.actionsForMinimalContext = undefined;
	} else {
		this.actionsForMinimalContext = __SLAG_PROPERTIES.actionsForMinimalContext || [];
	}
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.App.iOS.UserNotificationCategory.apiName is read only property');
	}
	this.apiName = 'Ti.App.iOS.UserNotificationCategory';
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.identifier = undefined;
	} else {
		this.identifier = __SLAG_PROPERTIES.identifier || '';
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
UserNotificationCategory.prototype.getApiName = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
module.exports = function (properties) {
	return new UserNotificationCategory(properties);
};