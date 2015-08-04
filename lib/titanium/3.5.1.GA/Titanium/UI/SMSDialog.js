var crypto = require('crypto');
function SMSDialog(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'CANCELLED',
			'FAILED',
			'SENT',
			'apiName',
			'messageBody',
			'toRecipients',
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
	if (__SLAG__properties.CANCELLED) {
		throw new Error('Ti.UI.SMSDialog.CANCELLED is read only property');
	}
	this.CANCELLED = 0;
	if (__SLAG__properties.FAILED) {
		throw new Error('Ti.UI.SMSDialog.FAILED is read only property');
	}
	this.FAILED = 0;
	if (__SLAG__properties.SENT) {
		throw new Error('Ti.UI.SMSDialog.SENT is read only property');
	}
	this.SENT = 0;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.SMSDialog.apiName is read only property');
	}
	this.apiName = 'Ti.UI.SMSDialog';
	this.messageBody = __SLAG__properties.messageBody || '';
	this.toRecipients = __SLAG__properties.toRecipients || '';
	this.id = __SLAG__properties.id || '';
	return this;
}
SMSDialog.prototype.addEventListener = function () {
};
SMSDialog.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
SMSDialog.prototype.fireEvent = function () {
};
SMSDialog.prototype.getApiName = function () {
	return this.apiName;
};
SMSDialog.prototype.getMessageBody = function () {
	return this.messageBody;
};
SMSDialog.prototype.getToRecipients = function () {
	return this.toRecipients;
};
SMSDialog.prototype.isSupported = function () {
	return true;
};
SMSDialog.prototype.open = function () {
};
SMSDialog.prototype.removeEventListener = function () {
};
SMSDialog.prototype.setMessageBody = function (property) {
	this.messageBody = property;
};
SMSDialog.prototype.setToRecipients = function (property) {
	this.toRecipients = property;
};
module.exports = function (properties) {
	return new SMSDialog(properties);
};