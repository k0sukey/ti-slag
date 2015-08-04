var crypto = require('crypto');
function TouchId(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
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
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.apiName) {
		throw new Error('Modules.TouchId.apiName is read only property');
	}
	this.apiName = 'Modules.TouchId';
	if (__SLAG__properties.ERROR_AUTHENTICATION_FAILED) {
		throw new Error('Modules.TouchId.ERROR_AUTHENTICATION_FAILED is read only property');
	}
	this.ERROR_AUTHENTICATION_FAILED = 0;
	if (__SLAG__properties.ERROR_PASSCODE_NOT_SET) {
		throw new Error('Modules.TouchId.ERROR_PASSCODE_NOT_SET is read only property');
	}
	this.ERROR_PASSCODE_NOT_SET = 0;
	if (__SLAG__properties.ERROR_TOUCH_ID_NOT_AVAILABLE) {
		throw new Error('Modules.TouchId.ERROR_TOUCH_ID_NOT_AVAILABLE is read only property');
	}
	this.ERROR_TOUCH_ID_NOT_AVAILABLE = 0;
	if (__SLAG__properties.ERROR_TOUCH_ID_NOT_ENROLLED) {
		throw new Error('Modules.TouchId.ERROR_TOUCH_ID_NOT_ENROLLED is read only property');
	}
	this.ERROR_TOUCH_ID_NOT_ENROLLED = 0;
	if (__SLAG__properties.ERROR_SYSTEM_CANCEL) {
		throw new Error('Modules.TouchId.ERROR_SYSTEM_CANCEL is read only property');
	}
	this.ERROR_SYSTEM_CANCEL = 0;
	if (__SLAG__properties.ERROR_USER_CANCEL) {
		throw new Error('Modules.TouchId.ERROR_USER_CANCEL is read only property');
	}
	this.ERROR_USER_CANCEL = 0;
	if (__SLAG__properties.ERROR_USER_FALLBACK) {
		throw new Error('Modules.TouchId.ERROR_USER_FALLBACK is read only property');
	}
	this.ERROR_USER_FALLBACK = 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
TouchId.prototype.addEventListener = function () {
};
TouchId.prototype.removeEventListener = function () {
};
TouchId.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
TouchId.prototype.fireEvent = function () {
};
TouchId.prototype.authenticate = function () {
};
TouchId.prototype.deviceCanAuthenticate = function () {
	return {};
};
TouchId.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
TouchId.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
TouchId.prototype.getApiName = function () {
	return this.apiName;
};
module.exports = function (properties) {
	return new TouchId(properties);
};