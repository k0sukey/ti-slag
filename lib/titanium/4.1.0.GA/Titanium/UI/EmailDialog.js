function EmailDialog(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.EmailDialog';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.barColor = properties.barColor || '';
	this.CANCELLED = properties.CANCELLED || 0;
	this.FAILED = properties.FAILED || 0;
	this.SAVED = properties.SAVED || 0;
	this.SENT = properties.SENT || 0;
	this.bccRecipients = properties.bccRecipients || '';
	this.ccRecipients = properties.ccRecipients || '';
	this.html = properties.html || true;
	this.messageBody = properties.messageBody || '';
	this.subject = properties.subject || '';
	this.toRecipients = properties.toRecipients || '';
	return this;
}
EmailDialog.prototype.addEventListener = function () {
};
EmailDialog.prototype.removeEventListener = function () {
};
EmailDialog.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
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
	return true;
};
EmailDialog.prototype.setBubbleParent = function () {
};
EmailDialog.prototype.getApiName = function () {
	return '';
};
EmailDialog.prototype.getLifecycleContainer = function () {
	return {};
};
EmailDialog.prototype.setLifecycleContainer = function () {
};
EmailDialog.prototype.getBarColor = function () {
	return '';
};
EmailDialog.prototype.setBarColor = function () {
};
EmailDialog.prototype.getBccRecipients = function () {
	return '';
};
EmailDialog.prototype.setBccRecipients = function () {
};
EmailDialog.prototype.getCcRecipients = function () {
	return '';
};
EmailDialog.prototype.setCcRecipients = function () {
};
EmailDialog.prototype.getHtml = function () {
	return true;
};
EmailDialog.prototype.setHtml = function () {
};
EmailDialog.prototype.getMessageBody = function () {
	return '';
};
EmailDialog.prototype.setMessageBody = function () {
};
EmailDialog.prototype.getSubject = function () {
	return '';
};
EmailDialog.prototype.setSubject = function () {
};
EmailDialog.prototype.getToRecipients = function () {
	return '';
};
EmailDialog.prototype.setToRecipients = function () {
};
module.exports = function (properties) {
	return new EmailDialog(properties);
};