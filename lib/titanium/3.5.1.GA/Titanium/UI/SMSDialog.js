function SMSDialog(properties) {
	properties = properties || {};
	this.CANCELLED = properties.CANCELLED || 0;
	this.FAILED = properties.FAILED || 0;
	this.SENT = properties.SENT || 0;
	this.apiName = 'Ti.UI.SMSDialog';
	this.messageBody = properties.messageBody || '';
	this.toRecipients = properties.toRecipients || '';
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