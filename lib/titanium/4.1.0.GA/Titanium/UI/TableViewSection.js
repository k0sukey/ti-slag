function TableViewSection(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.TableViewSection';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.footerTitle = properties.footerTitle || '';
	this.footerView = properties.footerView || {};
	this.headerTitle = properties.headerTitle || '';
	this.headerView = properties.headerView || {};
	this.rowCount = properties.rowCount || 0;
	this.rows = properties.rows || [];
	return this;
}
TableViewSection.prototype.addEventListener = function () {
};
TableViewSection.prototype.removeEventListener = function () {
};
TableViewSection.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
TableViewSection.prototype.fireEvent = function () {
};
TableViewSection.prototype.add = function () {
};
TableViewSection.prototype.remove = function () {
};
TableViewSection.prototype.rowAtIndex = function () {
	return {};
};
TableViewSection.prototype.getBubbleParent = function () {
	return true;
};
TableViewSection.prototype.setBubbleParent = function () {
};
TableViewSection.prototype.getApiName = function () {
	return '';
};
TableViewSection.prototype.getLifecycleContainer = function () {
	return {};
};
TableViewSection.prototype.setLifecycleContainer = function () {
};
TableViewSection.prototype.getFooterTitle = function () {
	return '';
};
TableViewSection.prototype.setFooterTitle = function () {
};
TableViewSection.prototype.getFooterView = function () {
	return {};
};
TableViewSection.prototype.setFooterView = function () {
};
TableViewSection.prototype.getHeaderTitle = function () {
	return '';
};
TableViewSection.prototype.setHeaderTitle = function () {
};
TableViewSection.prototype.getHeaderView = function () {
	return {};
};
TableViewSection.prototype.setHeaderView = function () {
};
TableViewSection.prototype.getRowCount = function () {
	return 0;
};
TableViewSection.prototype.getRows = function () {
	return [];
};
module.exports = function (properties) {
	return new TableViewSection(properties);
};