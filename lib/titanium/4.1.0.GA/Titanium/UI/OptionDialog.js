function OptionDialog(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.OptionDialog';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.androidView = properties.androidView || {};
	this.buttonNames = properties.buttonNames || '';
	this.cancel = properties.cancel || 0;
	this.destructive = properties.destructive || 0;
	this.options = properties.options || '';
	this.opaquebackground = properties.opaquebackground || true;
	this.persistent = properties.persistent || true;
	this.selectedIndex = properties.selectedIndex || 0;
	this.title = properties.title || '';
	this.titleid = properties.titleid || '';
	return this;
}
OptionDialog.prototype.addEventListener = function () {
};
OptionDialog.prototype.removeEventListener = function () {
};
OptionDialog.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
OptionDialog.prototype.fireEvent = function () {
};
OptionDialog.prototype.finishLayout = function () {
	throw new Error('Ti.UI.OptionDialog.finishLayout was deprecated, since 3.0.0');
};
OptionDialog.prototype.startLayout = function () {
	throw new Error('Ti.UI.OptionDialog.startLayout was deprecated, since 3.0.0');
};
OptionDialog.prototype.updateLayout = function () {
	throw new Error('Ti.UI.OptionDialog.updateLayout was deprecated, since 3.0.0');
};
OptionDialog.prototype.hide = function () {
};
OptionDialog.prototype.show = function () {
};
OptionDialog.prototype.getBubbleParent = function () {
	return true;
};
OptionDialog.prototype.setBubbleParent = function () {
};
OptionDialog.prototype.getApiName = function () {
	return '';
};
OptionDialog.prototype.getLifecycleContainer = function () {
	return {};
};
OptionDialog.prototype.setLifecycleContainer = function () {
};
OptionDialog.prototype.getAndroidView = function () {
	return {};
};
OptionDialog.prototype.setAndroidView = function () {
};
OptionDialog.prototype.getButtonNames = function () {
	return '';
};
OptionDialog.prototype.setButtonNames = function () {
};
OptionDialog.prototype.getCancel = function () {
	return 0;
};
OptionDialog.prototype.setCancel = function () {
};
OptionDialog.prototype.getDestructive = function () {
	return 0;
};
OptionDialog.prototype.setDestructive = function () {
};
OptionDialog.prototype.getOptions = function () {
	return '';
};
OptionDialog.prototype.setOptions = function () {
};
OptionDialog.prototype.getOpaquebackground = function () {
	return true;
};
OptionDialog.prototype.setOpaquebackground = function () {
};
OptionDialog.prototype.getPersistent = function () {
	return true;
};
OptionDialog.prototype.setPersistent = function () {
};
OptionDialog.prototype.getSelectedIndex = function () {
	return 0;
};
OptionDialog.prototype.setSelectedIndex = function () {
};
OptionDialog.prototype.getTitle = function () {
	return '';
};
OptionDialog.prototype.setTitle = function () {
};
OptionDialog.prototype.getTitleid = function () {
	return '';
};
OptionDialog.prototype.setTitleid = function () {
};
module.exports = function (properties) {
	return new OptionDialog(properties);
};