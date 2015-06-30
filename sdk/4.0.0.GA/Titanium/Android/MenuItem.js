function MenuItem(properties) {
	properties = properties || {};
	this.actionView = properties.actionView || undefined;
	this.actionViewExpanded = properties.actionViewExpanded || undefined;
	this.apiName = 'Titanium.Android.MenuItem';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.checkable = properties.checkable || undefined;
	this.checked = properties.checked || undefined;
	this.enabled = properties.enabled || undefined;
	this.groupId = properties.groupId || undefined;
	this.icon = properties.icon || undefined;
	this.itemId = properties.itemId || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.order = properties.order || undefined;
	this.showAsAction = properties.showAsAction || undefined;
	this.title = properties.title || undefined;
	this.titleCondensed = properties.titleCondensed || undefined;
	this.visible = properties.visible || undefined;
	return this;
}
MenuItem.prototype.addEventListener = function () {
};
MenuItem.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
MenuItem.prototype.collapseActionView = function () {
};
MenuItem.prototype.expandActionView = function () {
};
MenuItem.prototype.fireEvent = function () {
};
MenuItem.prototype.getActionView = function () {
	return this.actionView;
};
MenuItem.prototype.getApiName = function () {
	return this.apiName;
};
MenuItem.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
MenuItem.prototype.getGroupId = function () {
	return this.groupId;
};
MenuItem.prototype.getItemId = function () {
	return this.itemId;
};
MenuItem.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
MenuItem.prototype.getOrder = function () {
	return this.order;
};
MenuItem.prototype.getTitle = function () {
	return this.title;
};
MenuItem.prototype.getTitleCondensed = function () {
	return this.titleCondensed;
};
MenuItem.prototype.isActionViewExpanded = function () {
	return true;
};
MenuItem.prototype.isCheckable = function () {
	return true;
};
MenuItem.prototype.isChecked = function () {
	return true;
};
MenuItem.prototype.isEnabled = function () {
	return true;
};
MenuItem.prototype.isVisible = function () {
	return true;
};
MenuItem.prototype.removeEventListener = function () {
};
MenuItem.prototype.setActionView = function (property) {
	this.actionView = property;
};
MenuItem.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
MenuItem.prototype.setCheckable = function (property) {
	this.checkable = property;
};
MenuItem.prototype.setChecked = function (property) {
	this.checked = property;
};
MenuItem.prototype.setEnabled = function (property) {
	this.enabled = property;
};
MenuItem.prototype.setIcon = function (property) {
	this.icon = property;
};
MenuItem.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
MenuItem.prototype.setShowAsAction = function (property) {
	this.showAsAction = property;
};
MenuItem.prototype.setTitle = function (property) {
	this.title = property;
};
MenuItem.prototype.setTitleCondensed = function (property) {
	this.titleCondensed = property;
};
MenuItem.prototype.setVisible = function (property) {
	this.visible = property;
};
module.exports = function (properties) {
	return new MenuItem(properties);
};