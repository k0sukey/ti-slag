var crypto = require('crypto');
function UserNotificationAction(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'apiName',
			'activationMode',
			'behavior',
			'authenticationRequired',
			'destructive',
			'identifier',
			'title',
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
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.App.iOS.UserNotificationAction.apiName is read only property');
	}
	this.apiName = 'Ti.App.iOS.UserNotificationAction';
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.activationMode = undefined;
	} else {
		this.activationMode = __SLAG_PROPERTIES.activationMode || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.behavior = undefined;
	} else {
		this.behavior = __SLAG_PROPERTIES.behavior || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.authenticationRequired = undefined;
	} else {
		this.authenticationRequired = __SLAG_PROPERTIES.authenticationRequired || true;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.destructive = undefined;
	} else {
		this.destructive = __SLAG_PROPERTIES.destructive || true;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.identifier = undefined;
	} else {
		this.identifier = __SLAG_PROPERTIES.identifier || '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.title = undefined;
	} else {
		this.title = __SLAG_PROPERTIES.title || '';
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
UserNotificationAction.prototype.getApiName = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
UserNotificationAction.prototype.getActivationMode = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.activationMode;
};
UserNotificationAction.prototype.setActivationMode = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.activationMode = __SLAG__PROPERTY;
};
UserNotificationAction.prototype.getBehavior = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.behavior;
};
UserNotificationAction.prototype.setBehavior = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.behavior = __SLAG__PROPERTY;
};
module.exports = function (properties) {
	return new UserNotificationAction(properties);
};