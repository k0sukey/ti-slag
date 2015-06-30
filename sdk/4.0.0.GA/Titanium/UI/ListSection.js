function ListSection(properties) {
	properties = properties || {};
	this.apiName = 'Titanium.UI.ListSection';
	this.footerTitle = properties.footerTitle || undefined;
	this.footerView = properties.footerView || undefined;
	this.headerTitle = properties.headerTitle || undefined;
	this.headerView = properties.headerView || undefined;
	this.items = properties.items || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	return this;
}
ListSection.prototype.appendItems = function () {
};
ListSection.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
ListSection.prototype.deleteItemsAt = function () {
};
ListSection.prototype.getApiName = function () {
	return this.apiName;
};
ListSection.prototype.getFooterTitle = function () {
	return this.footerTitle;
};
ListSection.prototype.getFooterView = function () {
	return this.footerView;
};
ListSection.prototype.getHeaderTitle = function () {
	return this.headerTitle;
};
ListSection.prototype.getHeaderView = function () {
	return this.headerView;
};
ListSection.prototype.getItems = function () {
	return this.items;
};
ListSection.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
ListSection.prototype.insertItemsAt = function () {
};
ListSection.prototype.replaceItemsAt = function () {
};
ListSection.prototype.setFooterTitle = function (property) {
	this.footerTitle = property;
};
ListSection.prototype.setFooterView = function (property) {
	this.footerView = property;
};
ListSection.prototype.setHeaderTitle = function (property) {
	this.headerTitle = property;
};
ListSection.prototype.setHeaderView = function (property) {
	this.headerView = property;
};
ListSection.prototype.setItems = function (property) {
	this.items = property;
};
ListSection.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
ListSection.prototype.updateItemAt = function () {
};
module.exports = function (properties) {
	return new ListSection(properties);
};