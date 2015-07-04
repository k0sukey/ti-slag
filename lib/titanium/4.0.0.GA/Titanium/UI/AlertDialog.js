function AlertDialog(properties) {
	properties = properties || {};
	this.androidView = properties.androidView || undefined;
	this.apiName = 'Ti.UI.AlertDialog';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.buttonNames = properties.buttonNames || undefined;
	this.cancel = properties.cancel || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
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
AlertDialog.prototype.getLifecycleContainer = function () {
	return {};
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
AlertDialog.prototype.setBubbleParent = function () {
};
AlertDialog.prototype.setCancel = function () {
};
AlertDialog.prototype.setLifecycleContainer = function () {
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