function EmailDialog(properties) {
	properties = properties || {};
	this.CANCELLED = properties.CANCELLED || undefined;
	this.FAILED = properties.FAILED || undefined;
	this.SAVED = properties.SAVED || undefined;
	this.SENT = properties.SENT || undefined;
	this.apiName = 'Ti.UI.EmailDialog';
	this.barColor = properties.barColor || undefined;
	this.bccRecipients = properties.bccRecipients || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.ccRecipients = properties.ccRecipients || undefined;
	this.html = properties.html || undefined;
	this.messageBody = properties.messageBody || undefined;
	this.subject = properties.subject || undefined;
	this.toRecipients = properties.toRecipients || undefined;
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
EmailDialog.prototype.setMessageBody = function () {
};
EmailDialog.prototype.setSubject = function () {
};
EmailDialog.prototype.setToRecipients = function () {
};
module.exports = function (properties) {
	return new EmailDialog(properties);
};