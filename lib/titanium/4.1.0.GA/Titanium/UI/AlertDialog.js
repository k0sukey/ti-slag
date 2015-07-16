function AlertDialog(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.AlertDialog';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.androidView = properties.androidView || {};
	this.destructive = properties.destructive || 0;
	this.messageid = properties.messageid || '';
	this.style = properties.style || 0;
	this.titleid = properties.titleid || '';
	this.ok = properties.ok || '';
	this.okid = properties.okid || '';
	this.persistent = properties.persistent || true;
	this.buttonNames = properties.buttonNames || '';
	this.cancel = properties.cancel || 0;
	this.message = properties.message || '';
	this.title = properties.title || '';
	return this;
}
AlertDialog.prototype.addEventListener = function () {
};
AlertDialog.prototype.removeEventListener = function () {
};
AlertDialog.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
AlertDialog.prototype.fireEvent = function () {
};
AlertDialog.prototype.finishLayout = function () {
	throw new Error('Ti.UI.AlertDialog.finishLayout was deprecated, since 3.0.0');
};
AlertDialog.prototype.startLayout = function () {
	throw new Error('Ti.UI.AlertDialog.startLayout was deprecated, since 3.0.0');
};
AlertDialog.prototype.updateLayout = function () {
	throw new Error('Ti.UI.AlertDialog.updateLayout was deprecated, since 3.0.0');
};
AlertDialog.prototype.hide = function () {
};
AlertDialog.prototype.show = function () {
};
AlertDialog.prototype.getBubbleParent = function () {
	return true;
};
AlertDialog.prototype.setBubbleParent = function () {
};
AlertDialog.prototype.getApiName = function () {
	return '';
};
AlertDialog.prototype.getLifecycleContainer = function () {
	return {};
};
AlertDialog.prototype.setLifecycleContainer = function () {
};
AlertDialog.prototype.getDestructive = function () {
	return 0;
};
AlertDialog.prototype.setDestructive = function () {
};
AlertDialog.prototype.getStyle = function () {
	return 0;
};
AlertDialog.prototype.setStyle = function () {
};
AlertDialog.prototype.getOk = function () {
	return '';
};
AlertDialog.prototype.setOk = function () {
};
AlertDialog.prototype.getPersistent = function () {
	return true;
};
AlertDialog.prototype.setPersistent = function () {
};
AlertDialog.prototype.getButtonNames = function () {
	return '';
};
AlertDialog.prototype.setButtonNames = function () {
};
AlertDialog.prototype.getCancel = function () {
	return 0;
};
AlertDialog.prototype.setCancel = function () {
};
AlertDialog.prototype.getMessage = function () {
	return '';
};
AlertDialog.prototype.setMessage = function () {
};
AlertDialog.prototype.getTitle = function () {
	return '';
};
AlertDialog.prototype.setTitle = function () {
};
module.exports = function (properties) {
	return new AlertDialog(properties);
};