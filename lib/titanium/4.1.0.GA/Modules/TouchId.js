var crypto = require('crypto');
function TouchId(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'bubbleParent',
			'apiName',
			'ERROR_AUTHENTICATION_FAILED',
			'ERROR_PASSCODE_NOT_SET',
			'ERROR_TOUCH_ID_NOT_AVAILABLE',
			'ERROR_TOUCH_ID_NOT_ENROLLED',
			'ERROR_SYSTEM_CANCEL',
			'ERROR_USER_CANCEL',
			'ERROR_USER_FALLBACK',
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
	this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Modules.TouchId.apiName is read only property');
	}
	this.apiName = 'Modules.TouchId';
	if (__SLAG_PROPERTIES.ERROR_AUTHENTICATION_FAILED) {
		throw new Error('Modules.TouchId.ERROR_AUTHENTICATION_FAILED is read only property');
	}
	this.ERROR_AUTHENTICATION_FAILED = 0;
	if (__SLAG_PROPERTIES.ERROR_PASSCODE_NOT_SET) {
		throw new Error('Modules.TouchId.ERROR_PASSCODE_NOT_SET is read only property');
	}
	this.ERROR_PASSCODE_NOT_SET = 0;
	if (__SLAG_PROPERTIES.ERROR_TOUCH_ID_NOT_AVAILABLE) {
		throw new Error('Modules.TouchId.ERROR_TOUCH_ID_NOT_AVAILABLE is read only property');
	}
	this.ERROR_TOUCH_ID_NOT_AVAILABLE = 0;
	if (__SLAG_PROPERTIES.ERROR_TOUCH_ID_NOT_ENROLLED) {
		throw new Error('Modules.TouchId.ERROR_TOUCH_ID_NOT_ENROLLED is read only property');
	}
	this.ERROR_TOUCH_ID_NOT_ENROLLED = 0;
	if (__SLAG_PROPERTIES.ERROR_SYSTEM_CANCEL) {
		throw new Error('Modules.TouchId.ERROR_SYSTEM_CANCEL is read only property');
	}
	this.ERROR_SYSTEM_CANCEL = 0;
	if (__SLAG_PROPERTIES.ERROR_USER_CANCEL) {
		throw new Error('Modules.TouchId.ERROR_USER_CANCEL is read only property');
	}
	this.ERROR_USER_CANCEL = 0;
	if (__SLAG_PROPERTIES.ERROR_USER_FALLBACK) {
		throw new Error('Modules.TouchId.ERROR_USER_FALLBACK is read only property');
	}
	this.ERROR_USER_FALLBACK = 0;
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
TouchId.prototype.addEventListener = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
TouchId.prototype.removeEventListener = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
TouchId.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
TouchId.prototype.fireEvent = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
TouchId.prototype.authenticate = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
TouchId.prototype.deviceCanAuthenticate = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
TouchId.prototype.getBubbleParent = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
TouchId.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
TouchId.prototype.getApiName = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
module.exports = function (properties) {
	return new TouchId(properties);
};