function MenuItem(properties) {
	properties = properties || {};
	this.actionView = properties.actionView || {};
	this.actionViewExpanded = properties.actionViewExpanded || true;
	this.apiName = 'Ti.Android.MenuItem';
	this.bubbleParent = properties.bubbleParent || true;
	this.checkable = properties.checkable || true;
	this.checked = properties.checked || true;
	this.enabled = properties.enabled || true;
	this.groupId = properties.groupId || 0;
	this.icon = properties.icon || 0;
	this.itemId = properties.itemId || 0;
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.order = properties.order || 0;
	this.showAsAction = properties.showAsAction || 0;
	this.title = properties.title || '';
	this.titleCondensed = properties.titleCondensed || '';
	this.visible = properties.visible || true;
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
	return {};
};
MenuItem.prototype.getApiName = function () {
	return '';
};
MenuItem.prototype.getBubbleParent = function () {
	return true;
};
MenuItem.prototype.getGroupId = function () {
	return 0;
};
MenuItem.prototype.getItemId = function () {
	return 0;
};
MenuItem.prototype.getLifecycleContainer = function () {
	return {};
};
MenuItem.prototype.getOrder = function () {
	return 0;
};
MenuItem.prototype.getTitle = function () {
	return '';
};
MenuItem.prototype.getTitleCondensed = function () {
	return '';
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
MenuItem.prototype.setActionView = function () {
};
MenuItem.prototype.setBubbleParent = function () {
};
MenuItem.prototype.setCheckable = function () {
};
MenuItem.prototype.setChecked = function () {
};
MenuItem.prototype.setEnabled = function () {
};
MenuItem.prototype.setIcon = function () {
};
MenuItem.prototype.setLifecycleContainer = function () {
};
MenuItem.prototype.setShowAsAction = function () {
};
MenuItem.prototype.setTitle = function () {
};
MenuItem.prototype.setTitleCondensed = function () {
};
MenuItem.prototype.setVisible = function () {
};
module.exports = function (properties) {
	return new MenuItem(properties);
};