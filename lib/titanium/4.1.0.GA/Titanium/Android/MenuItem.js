function MenuItem(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.Android.MenuItem';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.actionView = properties.actionView || {};
	this.actionViewExpanded = properties.actionViewExpanded || true;
	this.checkable = properties.checkable || true;
	this.checked = properties.checked || true;
	this.enabled = properties.enabled || true;
	this.groupId = properties.groupId || 0;
	this.icon = properties.icon || 0;
	this.itemId = properties.itemId || 0;
	this.order = properties.order || 0;
	this.showAsAction = properties.showAsAction || 0;
	this.title = properties.title || '';
	this.titleCondensed = properties.titleCondensed || '';
	this.visible = properties.visible || true;
	return this;
}
MenuItem.prototype.addEventListener = function () {
};
MenuItem.prototype.removeEventListener = function () {
};
MenuItem.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
MenuItem.prototype.fireEvent = function () {
};
MenuItem.prototype.collapseActionView = function () {
};
MenuItem.prototype.expandActionView = function () {
};
MenuItem.prototype.isActionViewExpanded = function () {
	return {};
};
MenuItem.prototype.isCheckable = function () {
	return {};
};
MenuItem.prototype.isChecked = function () {
	return {};
};
MenuItem.prototype.isEnabled = function () {
	return {};
};
MenuItem.prototype.isVisible = function () {
	return {};
};
MenuItem.prototype.setCheckable = function () {
};
MenuItem.prototype.setChecked = function () {
};
MenuItem.prototype.setEnabled = function () {
};
MenuItem.prototype.setVisible = function () {
};
MenuItem.prototype.getBubbleParent = function () {
	return {};
};
MenuItem.prototype.setBubbleParent = function () {
};
MenuItem.prototype.getApiName = function () {
	return {};
};
MenuItem.prototype.getLifecycleContainer = function () {
	return {};
};
MenuItem.prototype.setLifecycleContainer = function () {
};
MenuItem.prototype.getActionView = function () {
	return {};
};
MenuItem.prototype.setActionView = function () {
};
MenuItem.prototype.getGroupId = function () {
	return {};
};
MenuItem.prototype.setIcon = function () {
};
MenuItem.prototype.getItemId = function () {
	return {};
};
MenuItem.prototype.getOrder = function () {
	return {};
};
MenuItem.prototype.setShowAsAction = function () {
};
MenuItem.prototype.getTitle = function () {
	return {};
};
MenuItem.prototype.setTitle = function () {
};
MenuItem.prototype.getTitleCondensed = function () {
	return {};
};
MenuItem.prototype.setTitleCondensed = function () {
};
module.exports = function (properties) {
	return new MenuItem(properties);
};