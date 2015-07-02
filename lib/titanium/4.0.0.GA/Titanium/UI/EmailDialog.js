function EmailDialog(properties) {
	properties = properties || {};
	this.CANCELLED = properties.CANCELLED || undefined;
	this.FAILED = properties.FAILED || undefined;
	this.SAVED = properties.SAVED || undefined;
	this.SENT = properties.SENT || undefined;
	this.apiName = 'Titanium.UI.EmailDialog';
	this.barColor = properties.barColor || undefined;
	this.bccRecipients = properties.bccRecipients || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.ccRecipients = properties.ccRecipients || undefined;
	this.html = properties.html || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
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
	return this.apiName;
};
EmailDialog.prototype.getBarColor = function () {
	return this.barColor;
};
EmailDialog.prototype.getBccRecipients = function () {
	return this.bccRecipients;
};
EmailDialog.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
EmailDialog.prototype.getCcRecipients = function () {
	return this.ccRecipients;
};
EmailDialog.prototype.getHtml = function () {
	return this.html;
};
EmailDialog.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
EmailDialog.prototype.getMessageBody = function () {
	return this.messageBody;
};
EmailDialog.prototype.getSubject = function () {
	return this.subject;
};
EmailDialog.prototype.getToRecipients = function () {
	return this.toRecipients;
};
EmailDialog.prototype.isSupported = function () {
	return true;
};
EmailDialog.prototype.open = function () {
};
EmailDialog.prototype.removeEventListener = function () {
};
EmailDialog.prototype.setBarColor = function (property) {
	this.barColor = property;
};
EmailDialog.prototype.setBccRecipients = function (property) {
	this.bccRecipients = property;
};
EmailDialog.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
EmailDialog.prototype.setCcRecipients = function (property) {
	this.ccRecipients = property;
};
EmailDialog.prototype.setHtml = function (property) {
	this.html = property;
};
EmailDialog.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
EmailDialog.prototype.setMessageBody = function (property) {
	this.messageBody = property;
};
EmailDialog.prototype.setSubject = function (property) {
	this.subject = property;
};
EmailDialog.prototype.setToRecipients = function (property) {
	this.toRecipients = property;
};
module.exports = function (properties) {
	return new EmailDialog(properties);
};