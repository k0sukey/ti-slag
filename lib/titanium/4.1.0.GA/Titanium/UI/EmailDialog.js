var crypto = require('crypto');
function EmailDialog(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'barColor',
			'CANCELLED',
			'FAILED',
			'SAVED',
			'SENT',
			'bccRecipients',
			'ccRecipients',
			'html',
			'messageBody',
			'subject',
			'toRecipients',
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
		throw new Error('Ti.UI.EmailDialog.apiName is read only property');
	}
	this.apiName = 'Ti.UI.EmailDialog';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.barColor = __SLAG__properties.barColor || '';
	if (__SLAG__properties.CANCELLED) {
		throw new Error('Ti.UI.EmailDialog.CANCELLED is read only property');
	}
	this.CANCELLED = 0;
	if (__SLAG__properties.FAILED) {
		throw new Error('Ti.UI.EmailDialog.FAILED is read only property');
	}
	this.FAILED = 0;
	if (__SLAG__properties.SAVED) {
		throw new Error('Ti.UI.EmailDialog.SAVED is read only property');
	}
	this.SAVED = 0;
	if (__SLAG__properties.SENT) {
		throw new Error('Ti.UI.EmailDialog.SENT is read only property');
	}
	this.SENT = 0;
	this.bccRecipients = __SLAG__properties.bccRecipients || '';
	this.ccRecipients = __SLAG__properties.ccRecipients || '';
	this.html = __SLAG__properties.html || true;
	this.messageBody = __SLAG__properties.messageBody || '';
	this.subject = __SLAG__properties.subject || '';
	this.toRecipients = __SLAG__properties.toRecipients || '';
	this.id = __SLAG__properties.id || '';
	return this;
}
EmailDialog.prototype.addEventListener = function () {
};
EmailDialog.prototype.removeEventListener = function () {
};
EmailDialog.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
EmailDialog.prototype.fireEvent = function () {
};
EmailDialog.prototype.finishLayout = function () {
	throw new Error('Ti.UI.EmailDialog.finishLayout was deprecated, since 3.0.0');
};
EmailDialog.prototype.startLayout = function () {
	throw new Error('Ti.UI.EmailDialog.startLayout was deprecated, since 3.0.0');
};
EmailDialog.prototype.updateLayout = function () {
	throw new Error('Ti.UI.EmailDialog.updateLayout was deprecated, since 3.0.0');
};
EmailDialog.prototype.hide = function () {
};
EmailDialog.prototype.show = function () {
};
EmailDialog.prototype.addAttachment = function () {
};
EmailDialog.prototype.isSupported = function () {
	return true;
};
EmailDialog.prototype.open = function () {
};
EmailDialog.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
EmailDialog.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
EmailDialog.prototype.getApiName = function () {
	return this.apiName;
};
EmailDialog.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
EmailDialog.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
EmailDialog.prototype.getBarColor = function () {
	return this.barColor;
};
EmailDialog.prototype.setBarColor = function (property) {
	this.barColor = property;
};
EmailDialog.prototype.getBccRecipients = function () {
	return this.bccRecipients;
};
EmailDialog.prototype.setBccRecipients = function (property) {
	this.bccRecipients = property;
};
EmailDialog.prototype.getCcRecipients = function () {
	return this.ccRecipients;
};
EmailDialog.prototype.setCcRecipients = function (property) {
	this.ccRecipients = property;
};
EmailDialog.prototype.getHtml = function () {
	return this.html;
};
EmailDialog.prototype.setHtml = function (property) {
	this.html = property;
};
EmailDialog.prototype.getMessageBody = function () {
	return this.messageBody;
};
EmailDialog.prototype.setMessageBody = function (property) {
	this.messageBody = property;
};
EmailDialog.prototype.getSubject = function () {
	return this.subject;
};
EmailDialog.prototype.setSubject = function (property) {
	this.subject = property;
};
EmailDialog.prototype.getToRecipients = function () {
	return this.toRecipients;
};
EmailDialog.prototype.setToRecipients = function (property) {
	this.toRecipients = property;
};
module.exports = function (properties) {
	return new EmailDialog(properties);
};