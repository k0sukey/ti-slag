function OptionDialog(properties) {
	properties = properties || {};
	this.androidView = properties.androidView || undefined;
	this.apiName = 'Ti.UI.OptionDialog';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.buttonNames = properties.buttonNames || undefined;
	this.cancel = properties.cancel || undefined;
	this.destructive = properties.destructive || undefined;
	this.opaquebackground = properties.opaquebackground || undefined;
	this.options = properties.options || undefined;
	this.persistent = properties.persistent || undefined;
	this.selectedIndex = properties.selectedIndex || undefined;
	this.title = properties.title || undefined;
	this.titleid = properties.titleid || undefined;
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