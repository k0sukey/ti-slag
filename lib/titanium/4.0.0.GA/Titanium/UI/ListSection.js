function ListSection(properties) {
	properties = properties || {};
	this.apiName = 'Ti.UI.ListSection';
	this.footerTitle = properties.footerTitle || '';
	this.footerView = properties.footerView || {};
	this.headerTitle = properties.headerTitle || '';
	this.headerView = properties.headerView || {};
	this.items = properties.items || [];
	this.lifecycleContainer = properties.lifecycleContainer || {};
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
	return '';
};
ListSection.prototype.getFooterTitle = function () {
	return '';
};
ListSection.prototype.getFooterView = function () {
	return {};
};
ListSection.prototype.getHeaderTitle = function () {
	return '';
};
ListSection.prototype.getHeaderView = function () {
	return {};
};
ListSection.prototype.getItemAt = function () {
	return {};
};
ListSection.prototype.getItems = function () {
	return [];
};
ListSection.prototype.getLifecycleContainer = function () {
	return {};
};
ListSection.prototype.insertItemsAt = function () {
};
ListSection.prototype.replaceItemsAt = function () {
};
ListSection.prototype.setFooterTitle = function () {
};
ListSection.prototype.setFooterView = function () {
};
ListSection.prototype.setHeaderTitle = function () {
};
ListSection.prototype.setHeaderView = function () {
};
ListSection.prototype.setItems = function () {
};
ListSection.prototype.setLifecycleContainer = function () {
};
ListSection.prototype.updateItemAt = function () {
};
module.exports = function (properties) {
	return new ListSection(properties);
};