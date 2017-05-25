var crypto = require('crypto');
function AlertDialogStyle(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'bubbleParent',
			'apiName',
			'DEFAULT',
			'PLAIN_TEXT_INPUT',
			'SECURE_TEXT_INPUT',
			'LOGIN_AND_PASSWORD_INPUT',
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
		this.bubbleParent = undefined;
	} else {
		this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	}
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.UI.iOS.AlertDialogStyle.apiName is read only property');
	}
	this.apiName = 'Ti.UI.iOS.AlertDialogStyle';
	if (__SLAG_PROPERTIES.DEFAULT) {
		throw new Error('Ti.UI.iOS.AlertDialogStyle.DEFAULT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.DEFAULT = undefined;
	} else {
		this.DEFAULT = 0;
	}
	if (__SLAG_PROPERTIES.PLAIN_TEXT_INPUT) {
		throw new Error('Ti.UI.iOS.AlertDialogStyle.PLAIN_TEXT_INPUT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PLAIN_TEXT_INPUT = undefined;
	} else {
		this.PLAIN_TEXT_INPUT = 0;
	}
	if (__SLAG_PROPERTIES.SECURE_TEXT_INPUT) {
		throw new Error('Ti.UI.iOS.AlertDialogStyle.SECURE_TEXT_INPUT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SECURE_TEXT_INPUT = undefined;
	} else {
		this.SECURE_TEXT_INPUT = 0;
	}
	if (__SLAG_PROPERTIES.LOGIN_AND_PASSWORD_INPUT) {
		throw new Error('Ti.UI.iOS.AlertDialogStyle.LOGIN_AND_PASSWORD_INPUT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.LOGIN_AND_PASSWORD_INPUT = undefined;
	} else {
		this.LOGIN_AND_PASSWORD_INPUT = 0;
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
AlertDialogStyle.prototype.addEventListener = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
AlertDialogStyle.prototype.removeEventListener = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
AlertDialogStyle.prototype.fireEvent = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
AlertDialogStyle.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
AlertDialogStyle.prototype.getBubbleParent = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
AlertDialogStyle.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
AlertDialogStyle.prototype.getApiName = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
module.exports = function (properties) {
	return new AlertDialogStyle(properties);
};