var crypto = require('crypto');
function AlertDialogStyle(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'DEFAULT',
			'LOGIN_AND_PASSWORD_INPUT',
			'PLAIN_TEXT_INPUT',
			'SECURE_TEXT_INPUT',
			'apiName',
			'bubbleParent',
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
	if (__SLAG__properties.DEFAULT) {
		throw new Error('Ti.UI.iPhone.AlertDialogStyle.DEFAULT is read only property');
	}
	this.DEFAULT = 0;
	if (__SLAG__properties.LOGIN_AND_PASSWORD_INPUT) {
		throw new Error('Ti.UI.iPhone.AlertDialogStyle.LOGIN_AND_PASSWORD_INPUT is read only property');
	}
	this.LOGIN_AND_PASSWORD_INPUT = 0;
	if (__SLAG__properties.PLAIN_TEXT_INPUT) {
		throw new Error('Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT is read only property');
	}
	this.PLAIN_TEXT_INPUT = 0;
	if (__SLAG__properties.SECURE_TEXT_INPUT) {
		throw new Error('Ti.UI.iPhone.AlertDialogStyle.SECURE_TEXT_INPUT is read only property');
	}
	this.SECURE_TEXT_INPUT = 0;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.iPhone.AlertDialogStyle.apiName is read only property');
	}
	this.apiName = 'Ti.UI.iPhone.AlertDialogStyle';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.id = __SLAG__properties.id || '';
	return this;
}
AlertDialogStyle.prototype.addEventListener = function () {
};
AlertDialogStyle.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
AlertDialogStyle.prototype.fireEvent = function () {
};
AlertDialogStyle.prototype.getApiName = function () {
	return this.apiName;
};
AlertDialogStyle.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
AlertDialogStyle.prototype.removeEventListener = function () {
};
AlertDialogStyle.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
module.exports = function (properties) {
	return new AlertDialogStyle(properties);
};