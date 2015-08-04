var crypto = require('crypto');
function UserNotificationAction(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'activationMode',
			'apiName',
			'authenticationRequired',
			'destructive',
			'identifier',
			'title',
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
	this.activationMode = __SLAG__properties.activationMode || 0;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.App.iOS.UserNotificationAction.apiName is read only property');
	}
	this.apiName = 'Ti.App.iOS.UserNotificationAction';
	this.authenticationRequired = __SLAG__properties.authenticationRequired || true;
	this.destructive = __SLAG__properties.destructive || true;
	this.identifier = __SLAG__properties.identifier || '';
	this.title = __SLAG__properties.title || '';
	this.id = __SLAG__properties.id || '';
	return this;
}
UserNotificationAction.prototype.getActivationMode = function () {
	return this.activationMode;
};
UserNotificationAction.prototype.getApiName = function () {
	return this.apiName;
};
module.exports = function (properties) {
	return new UserNotificationAction(properties);
};