function SMSDialog(properties) {
	properties = properties || {};
	this.CANCELLED = properties.CANCELLED || undefined;
	this.FAILED = properties.FAILED || undefined;
	this.SENT = properties.SENT || undefined;
	this.apiName = 'Titanium.UI.SMSDialog';
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