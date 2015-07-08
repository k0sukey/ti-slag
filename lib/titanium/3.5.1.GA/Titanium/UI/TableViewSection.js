function TableViewSection(properties) {
	properties = properties || {};
	this.apiName = 'Ti.UI.TableViewSection';
	this.bubbleParent = properties.bubbleParent || true;
	this.footerTitle = properties.footerTitle || '';
	this.footerView = properties.footerView || {};
	this.headerTitle = properties.headerTitle || '';
	this.headerView = properties.headerView || {};
	this.rowCount = properties.rowCount || 0;
	this.rows = properties.rows || [];
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
	return '';
};
TableViewSection.prototype.getBubbleParent = function () {
	return true;
};
TableViewSection.prototype.getFooterTitle = function () {
	return '';
};
TableViewSection.prototype.getFooterView = function () {
	return {};
};
TableViewSection.prototype.getHeaderTitle = function () {
	return '';
};
TableViewSection.prototype.getHeaderView = function () {
	return {};
};
TableViewSection.prototype.getRowCount = function () {
	return 0;
};
TableViewSection.prototype.getRows = function () {
	return [];
};
TableViewSection.prototype.remove = function () {
};
TableViewSection.prototype.removeEventListener = function () {
};
TableViewSection.prototype.rowAtIndex = function () {
	return {};
};
TableViewSection.prototype.setBubbleParent = function () {
};
TableViewSection.prototype.setFooterTitle = function () {
};
TableViewSection.prototype.setFooterView = function () {
};
TableViewSection.prototype.setHeaderTitle = function () {
};
TableViewSection.prototype.setHeaderView = function () {
};
module.exports = function (properties) {
	return new TableViewSection(properties);
};