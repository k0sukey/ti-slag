function OptionDialog(properties) {
	properties = properties || {};
	this.androidView = properties.androidView || undefined;
	this.apiName = 'Titanium.UI.OptionDialog';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.buttonNames = properties.buttonNames || undefined;
	this.cancel = properties.cancel || undefined;
	this.destructive = properties.destructive || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
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
	return this.androidView;
};
OptionDialog.prototype.getApiName = function () {
	return this.apiName;
};
OptionDialog.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
OptionDialog.prototype.getButtonNames = function () {
	return this.buttonNames;
};
OptionDialog.prototype.getCancel = function () {
	return this.cancel;
};
OptionDialog.prototype.getDestructive = function () {
	return this.destructive;
};
OptionDialog.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
OptionDialog.prototype.getOpaquebackground = function () {
	return this.opaquebackground;
};
OptionDialog.prototype.getOptions = function () {
	return this.options;
};
OptionDialog.prototype.getPersistent = function () {
	return this.persistent;
};
OptionDialog.prototype.getSelectedIndex = function () {
	return this.selectedIndex;
};
OptionDialog.prototype.getTitle = function () {
	return this.title;
};
OptionDialog.prototype.getTitleid = function () {
	return this.titleid;
};
OptionDialog.prototype.hide = function () {
};
OptionDialog.prototype.removeEventListener = function () {
};
OptionDialog.prototype.setAndroidView = function (property) {
	this.androidView = property;
};
OptionDialog.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
OptionDialog.prototype.setCancel = function (property) {
	this.cancel = property;
};
OptionDialog.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
OptionDialog.prototype.setOpaquebackground = function (property) {
	this.opaquebackground = property;
};
OptionDialog.prototype.setPersistent = function (property) {
	this.persistent = property;
};
OptionDialog.prototype.setTitle = function (property) {
	this.title = property;
};
OptionDialog.prototype.setTitleid = function (property) {
	this.titleid = property;
};
OptionDialog.prototype.show = function () {
};
module.exports = function (properties) {
	return new OptionDialog(properties);
};