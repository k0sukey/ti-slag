function SMSDialog(properties) {
	properties = properties || {};
	this.CANCELLED = properties.CANCELLED || undefined;
	this.FAILED = properties.FAILED || undefined;
	this.SENT = properties.SENT || undefined;
	this.apiName = 'Ti.UI.SMSDialog';
	this.messageBody = properties.messageBody || undefined;
	this.toRecipients = properties.toRecipients || undefined;
	return this;
}
SMSDialog.prototype.addEventListener = function () {
};
SMSDialog.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
SMSDialog.prototype.fireEvent = function () {
};
SMSDialog.prototype.getApiName = function () {
	return '';
};
SMSDialog.prototype.getMessageBody = function () {
	return '';
};
SMSDialog.prototype.getToRecipients = function () {
	return '';
};
SMSDialog.prototype.isSupported = function () {
	return true;
};
SMSDialog.prototype.open = function () {
};
SMSDialog.prototype.removeEventListener = function () {
};
SMSDialog.prototype.setMessageBody = function () {
};
SMSDialog.prototype.setToRecipients = function () {
};
module.exports = function (properties) {
	return new SMSDialog(properties);
};