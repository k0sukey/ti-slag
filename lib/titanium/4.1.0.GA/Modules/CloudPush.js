var crypto = require('crypto');
function CloudPush(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
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
		this.bubbleParent = undefined;
	} else {
		this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	}
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Modules.CloudPush.apiName is read only property');
	}
	this.apiName = 'Modules.CloudPush';
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.lifecycleContainer = undefined;
	} else {
		this.lifecycleContainer = __SLAG_PROPERTIES.lifecycleContainer || {};
	}
	if (__SLAG_PROPERTIES.enabled) {
		throw new Error('Modules.CloudPush.enabled was deprecated, since 3.2.0');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.showTrayNotification = undefined;
	} else {
		this.showTrayNotification = __SLAG_PROPERTIES.showTrayNotification || true;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.showAppOnTrayClick = undefined;
	} else {
		this.showAppOnTrayClick = __SLAG_PROPERTIES.showAppOnTrayClick || true;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.showTrayNotificationsWhenFocused = undefined;
	} else {
		this.showTrayNotificationsWhenFocused = __SLAG_PROPERTIES.showTrayNotificationsWhenFocused || true;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.focusAppOnPush = undefined;
	} else {
		this.focusAppOnPush = __SLAG_PROPERTIES.focusAppOnPush || true;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.singleCallback = undefined;
	} else {
		this.singleCallback = __SLAG_PROPERTIES.singleCallback || true;
	}
	if (__SLAG_PROPERTIES.SUCCESS) {
		throw new Error('Modules.CloudPush.SUCCESS is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SUCCESS = undefined;
	} else {
		this.SUCCESS = 0;
	}
	if (__SLAG_PROPERTIES.SERVICE_MISSING) {
		throw new Error('Modules.CloudPush.SERVICE_MISSING is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SERVICE_MISSING = undefined;
	} else {
		this.SERVICE_MISSING = 0;
	}
	if (__SLAG_PROPERTIES.SERVICE_VERSION_UPDATE_REQUIRED) {
		throw new Error('Modules.CloudPush.SERVICE_VERSION_UPDATE_REQUIRED is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SERVICE_VERSION_UPDATE_REQUIRED = undefined;
	} else {
		this.SERVICE_VERSION_UPDATE_REQUIRED = 0;
	}
	if (__SLAG_PROPERTIES.SERVICE_DISABLED) {
		throw new Error('Modules.CloudPush.SERVICE_DISABLED is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SERVICE_DISABLED = undefined;
	} else {
		this.SERVICE_DISABLED = 0;
	}
	if (__SLAG_PROPERTIES.SERVICE_INVALID) {
		throw new Error('Modules.CloudPush.SERVICE_INVALID is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SERVICE_INVALID = undefined;
	} else {
		this.SERVICE_INVALID = 0;
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
CloudPush.prototype.addEventListener = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
CloudPush.prototype.removeEventListener = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
CloudPush.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
CloudPush.prototype.fireEvent = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
CloudPush.prototype.retrieveDeviceToken = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
CloudPush.prototype.clearStatus = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
CloudPush.prototype.isGooglePlayServicesAvailable = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return 0;
};
CloudPush.prototype.getBubbleParent = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
CloudPush.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
CloudPush.prototype.getApiName = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
CloudPush.prototype.getLifecycleContainer = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lifecycleContainer;
};
CloudPush.prototype.setLifecycleContainer = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.lifecycleContainer = __SLAG__PROPERTY;
};
CloudPush.prototype.getEnabled = function () {
	throw new Error('Modules.CloudPush.getEnabled was deprecated, since 3.2.0');
};
CloudPush.prototype.setEnabled = function () {
	throw new Error('Modules.CloudPush.setEnabled was deprecated, since 3.2.0');
};
CloudPush.prototype.getShowTrayNotification = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.showTrayNotification;
};
CloudPush.prototype.setShowTrayNotification = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.showTrayNotification = __SLAG__PROPERTY;
};
CloudPush.prototype.getShowAppOnTrayClick = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.showAppOnTrayClick;
};
CloudPush.prototype.setShowAppOnTrayClick = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.showAppOnTrayClick = __SLAG__PROPERTY;
};
CloudPush.prototype.getShowTrayNotificationsWhenFocused = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.showTrayNotificationsWhenFocused;
};
CloudPush.prototype.setShowTrayNotificationsWhenFocused = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.showTrayNotificationsWhenFocused = __SLAG__PROPERTY;
};
CloudPush.prototype.getFocusAppOnPush = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.focusAppOnPush;
};
CloudPush.prototype.setFocusAppOnPush = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.focusAppOnPush = __SLAG__PROPERTY;
};
CloudPush.prototype.getSingleCallback = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.singleCallback;
};
CloudPush.prototype.setSingleCallback = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.singleCallback = __SLAG__PROPERTY;
};
module.exports = function (properties) {
	return new CloudPush(properties);
};