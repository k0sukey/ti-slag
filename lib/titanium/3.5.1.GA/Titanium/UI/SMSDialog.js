var crypto = require('crypto');
function SMSDialog(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'CANCELLED',
			'FAILED',
			'SENT',
			'apiName',
			'messageBody',
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
		throw new Error('Ti.UI.SMSDialog.CANCELLED is read only property');
	}
	if (['tizen'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CANCELLED = undefined;
	} else {
		this.CANCELLED = 0;
	}
	if (__SLAG_PROPERTIES.FAILED) {
		throw new Error('Ti.UI.SMSDialog.FAILED is read only property');
	}
	if (['tizen'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FAILED = undefined;
	} else {
		this.FAILED = 0;
	}
	if (__SLAG_PROPERTIES.SENT) {
		throw new Error('Ti.UI.SMSDialog.SENT is read only property');
	}
	if (['tizen'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.SENT = undefined;
	} else {
		this.SENT = 0;
	}
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.UI.SMSDialog.apiName is read only property');
	}
	this.apiName = 'Ti.UI.SMSDialog';
	if (['tizen'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.messageBody = undefined;
	} else {
		this.messageBody = __SLAG_PROPERTIES.messageBody || '';
	}
	if (['tizen'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.toRecipients = undefined;
	} else {
		this.toRecipients = __SLAG_PROPERTIES.toRecipients || '';
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
SMSDialog.prototype.addEventListener = function () {
	if (['tizen'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
SMSDialog.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
SMSDialog.prototype.fireEvent = function () {
	if (['tizen'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
SMSDialog.prototype.getApiName = function () {
	if (['tizen'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
SMSDialog.prototype.getMessageBody = function () {
	if (['tizen'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.messageBody;
};
SMSDialog.prototype.getToRecipients = function () {
	if (['tizen'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.toRecipients;
};
SMSDialog.prototype.isSupported = function () {
	if (['tizen'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
SMSDialog.prototype.open = function () {
	if (['tizen'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
SMSDialog.prototype.removeEventListener = function () {
	if (['tizen'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
SMSDialog.prototype.setMessageBody = function (__SLAG__PROPERTY) {
	if (['tizen'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.messageBody = __SLAG__PROPERTY;
};
SMSDialog.prototype.setToRecipients = function (__SLAG__PROPERTY) {
	if (['tizen'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.toRecipients = __SLAG__PROPERTY;
};
module.exports = function (properties) {
	return new SMSDialog(properties);
};