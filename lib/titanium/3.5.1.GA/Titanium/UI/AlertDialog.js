function AlertDialog(properties) {
	properties = properties || {};
	this.androidView = properties.androidView || {};
	this.apiName = 'Ti.UI.AlertDialog';
	this.bubbleParent = properties.bubbleParent || true;
	this.buttonNames = properties.buttonNames || '';
	this.cancel = properties.cancel || 0;
	this.message = properties.message || '';
	this.messageid = properties.messageid || '';
	this.ok = properties.ok || '';
	this.okid = properties.okid || '';
	this.persistent = properties.persistent || true;
	this.style = properties.style || 0;
	this.title = properties.title || '';
	this.titleid = properties.titleid || '';
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
	return {};
};
AlertDialog.prototype.getApiName = function () {
	return '';
};
AlertDialog.prototype.getBubbleParent = function () {
	return true;
};
AlertDialog.prototype.getButtonNames = function () {
	return '';
};
AlertDialog.prototype.getCancel = function () {
	return 0;
};
AlertDialog.prototype.getMessage = function () {
	return '';
};
AlertDialog.prototype.getOk = function () {
	return '';
};
AlertDialog.prototype.getPersistent = function () {
	return true;
};
AlertDialog.prototype.getStyle = function () {
	return 0;
};
AlertDialog.prototype.getTitle = function () {
	return '';
};
AlertDialog.prototype.hide = function () {
};
AlertDialog.prototype.removeEventListener = function () {
};
AlertDialog.prototype.setAndroidView = function () {
};
AlertDialog.prototype.setBubbleParent = function () {
};
AlertDialog.prototype.setCancel = function () {
};
AlertDialog.prototype.setMessage = function () {
};
AlertDialog.prototype.setOk = function () {
};
AlertDialog.prototype.setPersistent = function () {
};
AlertDialog.prototype.setStyle = function () {
};
AlertDialog.prototype.setTitle = function () {
};
AlertDialog.prototype.show = function () {
};
module.exports = function (properties) {
	return new AlertDialog(properties);
};