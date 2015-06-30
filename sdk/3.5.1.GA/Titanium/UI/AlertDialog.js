function AlertDialog(properties) {
	properties = properties || {};
	this.androidView = properties.androidView || undefined;
	this.apiName = 'Titanium.UI.AlertDialog';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.buttonNames = properties.buttonNames || undefined;
	this.cancel = properties.cancel || undefined;
	this.message = properties.message || undefined;
	this.messageid = properties.messageid || undefined;
	this.ok = properties.ok || undefined;
	this.okid = properties.okid || undefined;
	this.persistent = properties.persistent || undefined;
	this.style = properties.style || undefined;
	this.title = properties.title || undefined;
	this.titleid = properties.titleid || undefined;
	return this;
}
AlertDialog.prototype.addEventListener = function () {
};
AlertDialog.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
AlertDialog.prototype.fireEvent = function () {
};
AlertDialog.prototype.getAndroidView = function () {
	return this.androidView;
};
AlertDialog.prototype.getApiName = function () {
	return this.apiName;
};
AlertDialog.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
AlertDialog.prototype.getButtonNames = function () {
	return this.buttonNames;
};
AlertDialog.prototype.getCancel = function () {
	return this.cancel;
};
AlertDialog.prototype.getMessage = function () {
	return this.message;
};
AlertDialog.prototype.getOk = function () {
	return this.ok;
};
AlertDialog.prototype.getPersistent = function () {
	return this.persistent;
};
AlertDialog.prototype.getStyle = function () {
	return this.style;
};
AlertDialog.prototype.getTitle = function () {
	return this.title;
};
AlertDialog.prototype.hide = function () {
};
AlertDialog.prototype.removeEventListener = function () {
};
AlertDialog.prototype.setAndroidView = function (property) {
	this.androidView = property;
};
AlertDialog.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
AlertDialog.prototype.setCancel = function (property) {
	this.cancel = property;
};
AlertDialog.prototype.setMessage = function (property) {
	this.message = property;
};
AlertDialog.prototype.setOk = function (property) {
	this.ok = property;
};
AlertDialog.prototype.setPersistent = function (property) {
	this.persistent = property;
};
AlertDialog.prototype.setStyle = function (property) {
	this.style = property;
};
AlertDialog.prototype.setTitle = function (property) {
	this.title = property;
};
AlertDialog.prototype.show = function () {
};
module.exports = function (properties) {
	return new AlertDialog(properties);
};