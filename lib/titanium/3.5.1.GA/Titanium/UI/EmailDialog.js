var crypto = require('crypto');
function EmailDialog(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'CANCELLED',
			'FAILED',
			'SAVED',
			'SENT',
			'apiName',
			'barColor',
			'bccRecipients',
			'bubbleParent',
			'ccRecipients',
			'html',
			'messageBody',
			'subject',
			'toRecipients',
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
	if (__SLAG_PROPERTIES.CANCELLED) {
		throw new Error('Ti.UI.EmailDialog.CANCELLED is read only property');
	}
	this.CANCELLED = 0;
	if (__SLAG_PROPERTIES.FAILED) {
		throw new Error('Ti.UI.EmailDialog.FAILED is read only property');
	}
	this.FAILED = 0;
	if (__SLAG_PROPERTIES.SAVED) {
		throw new Error('Ti.UI.EmailDialog.SAVED is read only property');
	}
	this.SAVED = 0;
	if (__SLAG_PROPERTIES.SENT) {
		throw new Error('Ti.UI.EmailDialog.SENT is read only property');
	}
	this.SENT = 0;
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.UI.EmailDialog.apiName is read only property');
	}
	this.apiName = 'Ti.UI.EmailDialog';
	this.barColor = __SLAG_PROPERTIES.barColor || '';
	this.bccRecipients = __SLAG_PROPERTIES.bccRecipients || '';
	this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	this.ccRecipients = __SLAG_PROPERTIES.ccRecipients || '';
	this.html = __SLAG_PROPERTIES.html || true;
	this.messageBody = __SLAG_PROPERTIES.messageBody || '';
	this.subject = __SLAG_PROPERTIES.subject || '';
	this.toRecipients = __SLAG_PROPERTIES.toRecipients || '';
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
EmailDialog.prototype.addAttachment = function () {
	if ([
			'android',
			'ios',
			'blackberry'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
EmailDialog.prototype.addEventListener = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen',
			'blackberry'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
EmailDialog.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
EmailDialog.prototype.fireEvent = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen',
			'blackberry'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
EmailDialog.prototype.getApiName = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
EmailDialog.prototype.getBarColor = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.barColor;
};
EmailDialog.prototype.getBccRecipients = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen',
			'blackberry'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bccRecipients;
};
EmailDialog.prototype.getBubbleParent = function () {
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
EmailDialog.prototype.getCcRecipients = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen',
			'blackberry'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.ccRecipients;
};
EmailDialog.prototype.getHtml = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'blackberry'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.html;
};
EmailDialog.prototype.getMessageBody = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen',
			'blackberry'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.messageBody;
};
EmailDialog.prototype.getSubject = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen',
			'blackberry'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.subject;
};
EmailDialog.prototype.getToRecipients = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen',
			'blackberry'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.toRecipients;
};
EmailDialog.prototype.isSupported = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
EmailDialog.prototype.open = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen',
			'blackberry'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
EmailDialog.prototype.removeEventListener = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen',
			'blackberry'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
EmailDialog.prototype.setBarColor = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.barColor = __SLAG__PROPERTY;
};
EmailDialog.prototype.setBccRecipients = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen',
			'blackberry'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bccRecipients = __SLAG__PROPERTY;
};
EmailDialog.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
EmailDialog.prototype.setCcRecipients = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen',
			'blackberry'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.ccRecipients = __SLAG__PROPERTY;
};
EmailDialog.prototype.setHtml = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'blackberry'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.html = __SLAG__PROPERTY;
};
EmailDialog.prototype.setMessageBody = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen',
			'blackberry'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.messageBody = __SLAG__PROPERTY;
};
EmailDialog.prototype.setSubject = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen',
			'blackberry'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.subject = __SLAG__PROPERTY;
};
EmailDialog.prototype.setToRecipients = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen',
			'blackberry'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.toRecipients = __SLAG__PROPERTY;
};
module.exports = function (properties) {
	return new EmailDialog(properties);
};