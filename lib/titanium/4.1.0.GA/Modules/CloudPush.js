var crypto = require('crypto');
function CloudPush(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'enabled',
			'showTrayNotification',
			'showAppOnTrayClick',
			'showTrayNotificationsWhenFocused',
			'focusAppOnPush',
			'singleCallback',
			'SUCCESS',
			'SERVICE_MISSING',
			'SERVICE_VERSION_UPDATE_REQUIRED',
			'SERVICE_DISABLED',
			'SERVICE_INVALID',
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
		throw new Error('Modules.CloudPush.apiName is read only property');
	}
	this.apiName = 'Modules.CloudPush';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	if (__SLAG__properties.enabled) {
		throw new Error('Modules.CloudPush.enabled was deprecated, since 3.2.0');
	}
	this.showTrayNotification = __SLAG__properties.showTrayNotification || true;
	this.showAppOnTrayClick = __SLAG__properties.showAppOnTrayClick || true;
	this.showTrayNotificationsWhenFocused = __SLAG__properties.showTrayNotificationsWhenFocused || true;
	this.focusAppOnPush = __SLAG__properties.focusAppOnPush || true;
	this.singleCallback = __SLAG__properties.singleCallback || true;
	if (__SLAG__properties.SUCCESS) {
		throw new Error('Modules.CloudPush.SUCCESS is read only property');
	}
	this.SUCCESS = 0;
	if (__SLAG__properties.SERVICE_MISSING) {
		throw new Error('Modules.CloudPush.SERVICE_MISSING is read only property');
	}
	this.SERVICE_MISSING = 0;
	if (__SLAG__properties.SERVICE_VERSION_UPDATE_REQUIRED) {
		throw new Error('Modules.CloudPush.SERVICE_VERSION_UPDATE_REQUIRED is read only property');
	}
	this.SERVICE_VERSION_UPDATE_REQUIRED = 0;
	if (__SLAG__properties.SERVICE_DISABLED) {
		throw new Error('Modules.CloudPush.SERVICE_DISABLED is read only property');
	}
	this.SERVICE_DISABLED = 0;
	if (__SLAG__properties.SERVICE_INVALID) {
		throw new Error('Modules.CloudPush.SERVICE_INVALID is read only property');
	}
	this.SERVICE_INVALID = 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
CloudPush.prototype.addEventListener = function () {
};
CloudPush.prototype.removeEventListener = function () {
};
CloudPush.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
CloudPush.prototype.fireEvent = function () {
};
CloudPush.prototype.retrieveDeviceToken = function () {
};
CloudPush.prototype.clearStatus = function () {
};
CloudPush.prototype.isGooglePlayServicesAvailable = function () {
	return 0;
};
CloudPush.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
CloudPush.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
CloudPush.prototype.getApiName = function () {
	return this.apiName;
};
CloudPush.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
CloudPush.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
CloudPush.prototype.getEnabled = function () {
	throw new Error('Modules.CloudPush.getEnabled was deprecated, since 3.2.0');
};
CloudPush.prototype.setEnabled = function () {
	throw new Error('Modules.CloudPush.setEnabled was deprecated, since 3.2.0');
};
CloudPush.prototype.getShowTrayNotification = function () {
	return this.showTrayNotification;
};
CloudPush.prototype.setShowTrayNotification = function (property) {
	this.showTrayNotification = property;
};
CloudPush.prototype.getShowAppOnTrayClick = function () {
	return this.showAppOnTrayClick;
};
CloudPush.prototype.setShowAppOnTrayClick = function (property) {
	this.showAppOnTrayClick = property;
};
CloudPush.prototype.getShowTrayNotificationsWhenFocused = function () {
	return this.showTrayNotificationsWhenFocused;
};
CloudPush.prototype.setShowTrayNotificationsWhenFocused = function (property) {
	this.showTrayNotificationsWhenFocused = property;
};
CloudPush.prototype.getFocusAppOnPush = function () {
	return this.focusAppOnPush;
};
CloudPush.prototype.setFocusAppOnPush = function (property) {
	this.focusAppOnPush = property;
};
CloudPush.prototype.getSingleCallback = function () {
	return this.singleCallback;
};
CloudPush.prototype.setSingleCallback = function (property) {
	this.singleCallback = property;
};
module.exports = function (properties) {
	return new CloudPush(properties);
};