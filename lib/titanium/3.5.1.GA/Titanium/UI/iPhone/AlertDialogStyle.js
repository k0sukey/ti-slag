function AlertDialogStyle(properties) {
	properties = properties || {};
	this.DEFAULT = properties.DEFAULT || undefined;
	this.LOGIN_AND_PASSWORD_INPUT = properties.LOGIN_AND_PASSWORD_INPUT || undefined;
	this.PLAIN_TEXT_INPUT = properties.PLAIN_TEXT_INPUT || undefined;
	this.SECURE_TEXT_INPUT = properties.SECURE_TEXT_INPUT || undefined;
	this.apiName = 'Ti.UI.iPhone.AlertDialogStyle';
	this.bubbleParent = properties.bubbleParent || undefined;
	return this;
}
AlertDialogStyle.prototype.addEventListener = function () {
};
AlertDialogStyle.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
AlertDialogStyle.prototype.fireEvent = function () {
};
AlertDialogStyle.prototype.getApiName = function () {
	return '';
};
AlertDialogStyle.prototype.getBubbleParent = function () {
	return true;
};
AlertDialogStyle.prototype.removeEventListener = function () {
};
AlertDialogStyle.prototype.setBubbleParent = function () {
};
module.exports = function (properties) {
	return new AlertDialogStyle(properties);
};