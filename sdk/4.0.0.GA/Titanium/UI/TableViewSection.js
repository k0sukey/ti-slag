function TableViewSection(properties) {
	properties = properties || {};
	this.apiName = 'Titanium.UI.TableViewSection';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.footerTitle = properties.footerTitle || undefined;
	this.footerView = properties.footerView || undefined;
	this.headerTitle = properties.headerTitle || undefined;
	this.headerView = properties.headerView || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.rowCount = properties.rowCount || undefined;
	this.rows = properties.rows || undefined;
	return this;
}
TableViewSection.prototype.add = function () {
};
TableViewSection.prototype.addEventListener = function () {
};
TableViewSection.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
TableViewSection.prototype.fireEvent = function () {
};
TableViewSection.prototype.getApiName = function () {
	return this.apiName;
};
TableViewSection.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
TableViewSection.prototype.getFooterTitle = function () {
	return this.footerTitle;
};
TableViewSection.prototype.getFooterView = function () {
	return this.footerView;
};
TableViewSection.prototype.getHeaderTitle = function () {
	return this.headerTitle;
};
TableViewSection.prototype.getHeaderView = function () {
	return this.headerView;
};
TableViewSection.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
TableViewSection.prototype.getRowCount = function () {
	return this.rowCount;
};
TableViewSection.prototype.getRows = function () {
	return this.rows;
};
TableViewSection.prototype.remove = function () {
};
TableViewSection.prototype.removeEventListener = function () {
};
TableViewSection.prototype.rowAtIndex = function () {
	return {};
};
TableViewSection.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
TableViewSection.prototype.setFooterTitle = function (property) {
	this.footerTitle = property;
};
TableViewSection.prototype.setFooterView = function (property) {
	this.footerView = property;
};
TableViewSection.prototype.setHeaderTitle = function (property) {
	this.headerTitle = property;
};
TableViewSection.prototype.setHeaderView = function (property) {
	this.headerView = property;
};
TableViewSection.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
module.exports = function (properties) {
	return new TableViewSection(properties);
};