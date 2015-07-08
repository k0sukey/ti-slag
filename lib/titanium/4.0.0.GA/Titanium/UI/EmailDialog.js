function EmailDialog(properties) {
	properties = properties || {};
	this.CANCELLED = properties.CANCELLED || 0;
	this.FAILED = properties.FAILED || 0;
	this.SAVED = properties.SAVED || 0;
	this.SENT = properties.SENT || 0;
	this.apiName = 'Ti.UI.EmailDialog';
	this.barColor = properties.barColor || '';
	this.bccRecipients = properties.bccRecipients || '';
	this.bubbleParent = properties.bubbleParent || true;
	this.ccRecipients = properties.ccRecipients || '';
	this.html = properties.html || true;
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.messageBody = properties.messageBody || '';
	this.subject = properties.subject || '';
	this.toRecipients = properties.toRecipients || '';
	return this;
}
EmailDialog.prototype.addAttachment = function () {
};
EmailDialog.prototype.addEventListener = function () {
};
EmailDialog.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
EmailDialog.prototype.fireEvent = function () {
};
EmailDialog.prototype.getApiName = function () {
	return '';
};
EmailDialog.prototype.getBarColor = function () {
	return '';
};
EmailDialog.prototype.getBccRecipients = function () {
	return '';
};
EmailDialog.prototype.getBubbleParent = function () {
	return true;
};
EmailDialog.prototype.getCcRecipients = function () {
	return '';
};
EmailDialog.prototype.getHtml = function () {
	return true;
};
EmailDialog.prototype.getLifecycleContainer = function () {
	return {};
};
EmailDialog.prototype.getMessageBody = function () {
	return '';
};
EmailDialog.prototype.getSubject = function () {
	return '';
};
EmailDialog.prototype.getToRecipients = function () {
	return '';
};
EmailDialog.prototype.isSupported = function () {
	return true;
};
EmailDialog.prototype.open = function () {
};
EmailDialog.prototype.removeEventListener = function () {
};
EmailDialog.prototype.setBarColor = function () {
};
EmailDialog.prototype.setBccRecipients = function () {
};
EmailDialog.prototype.setBubbleParent = function () {
};
EmailDialog.prototype.setCcRecipients = function () {
};
EmailDialog.prototype.setHtml = function () {
};
EmailDialog.prototype.setLifecycleContainer = function () {
};
EmailDialog.prototype.setMessageBody = function () {
};
EmailDialog.prototype.setSubject = function () {
};
EmailDialog.prototype.setToRecipients = function () {
};
module.exports = function (properties) {
	return new EmailDialog(properties);
};