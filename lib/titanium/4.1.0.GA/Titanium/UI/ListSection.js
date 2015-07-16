function ListSection(properties) {
	properties = properties || {};
	this.apiName = 'Ti.UI.ListSection';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.footerTitle = properties.footerTitle || '';
	this.headerTitle = properties.headerTitle || '';
	this.footerView = properties.footerView || {};
	this.headerView = properties.headerView || {};
	this.items = properties.items || [];
	return this;
}
ListSection.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
ListSection.prototype.appendItems = function () {
};
ListSection.prototype.insertItemsAt = function () {
};
ListSection.prototype.replaceItemsAt = function () {
};
ListSection.prototype.deleteItemsAt = function () {
};
ListSection.prototype.getItemAt = function () {
	return {};
};
ListSection.prototype.updateItemAt = function () {
};
ListSection.prototype.setItems = function () {
};
ListSection.prototype.getApiName = function () {
	return '';
};
ListSection.prototype.getLifecycleContainer = function () {
	return {};
};
ListSection.prototype.setLifecycleContainer = function () {
};
ListSection.prototype.getFooterTitle = function () {
	return '';
};
ListSection.prototype.setFooterTitle = function () {
};
ListSection.prototype.getHeaderTitle = function () {
	return '';
};
ListSection.prototype.setHeaderTitle = function () {
};
ListSection.prototype.getFooterView = function () {
	return {};
};
ListSection.prototype.setFooterView = function () {
};
ListSection.prototype.getHeaderView = function () {
	return {};
};
ListSection.prototype.setHeaderView = function () {
};
ListSection.prototype.getItems = function () {
	return [];
};
module.exports = function (properties) {
	return new ListSection(properties);
};