function MenuItem(properties) {
	properties = properties || {};
	this.actionView = properties.actionView || undefined;
	this.actionViewExpanded = properties.actionViewExpanded || undefined;
	this.apiName = 'Ti.Android.MenuItem';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.checkable = properties.checkable || undefined;
	this.checked = properties.checked || undefined;
	this.enabled = properties.enabled || undefined;
	this.groupId = properties.groupId || undefined;
	this.icon = properties.icon || undefined;
	this.itemId = properties.itemId || undefined;
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