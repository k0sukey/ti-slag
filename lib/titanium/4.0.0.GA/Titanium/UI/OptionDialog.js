function OptionDialog(properties) {
	properties = properties || {};
	this.androidView = properties.androidView || {};
	this.apiName = 'Ti.UI.OptionDialog';
	this.bubbleParent = properties.bubbleParent || true;
	this.buttonNames = properties.buttonNames || '';
	this.cancel = properties.cancel || 0;
	this.destructive = properties.destructive || 0;
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.opaquebackground = properties.opaquebackground || true;
	this.options = properties.options || '';
	this.persistent = properties.persistent || true;
	this.selectedIndex = properties.selectedIndex || 0;
	this.title = properties.title || '';
	this.titleid = properties.titleid || '';
	return this;
}
OptionDialog.prototype.addEventListener = function () {
};
OptionDialog.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
OptionDialog.prototype.fireEvent = function () {
};
OptionDialog.prototype.getAndroidView = function () {
	return {};
};
OptionDialog.prototype.getApiName = function () {
	return '';
};
OptionDialog.prototype.getBubbleParent = function () {
	return true;
};
OptionDialog.prototype.getButtonNames = function () {
	return '';
};
OptionDialog.prototype.getCancel = function () {
	return 0;
};
OptionDialog.prototype.getDestructive = function () {
	return 0;
};
OptionDialog.prototype.getLifecycleContainer = function () {
	return {};
};
OptionDialog.prototype.getOpaquebackground = function () {
	return true;
};
OptionDialog.prototype.getOptions = function () {
	return '';
};
OptionDialog.prototype.getPersistent = function () {
	return true;
};
OptionDialog.prototype.getSelectedIndex = function () {
	return 0;
};
OptionDialog.prototype.getTitle = function () {
	return '';
};
OptionDialog.prototype.getTitleid = function () {
	return '';
};
OptionDialog.prototype.hide = function () {
};
OptionDialog.prototype.removeEventListener = function () {
};
OptionDialog.prototype.setAndroidView = function () {
};
OptionDialog.prototype.setBubbleParent = function () {
};
OptionDialog.prototype.setCancel = function () {
};
OptionDialog.prototype.setLifecycleContainer = function () {
};
OptionDialog.prototype.setOpaquebackground = function () {
};
OptionDialog.prototype.setPersistent = function () {
};
OptionDialog.prototype.setTitle = function () {
};
OptionDialog.prototype.setTitleid = function () {
};
OptionDialog.prototype.show = function () {
};
module.exports = function (properties) {
	return new OptionDialog(properties);
};