function DashboardItem(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.DashboardItem';
	this.badge = properties.badge || 0;
	this.canDelete = properties.canDelete || true;
	this.image = properties.image || '';
	this.selectedImage = properties.selectedImage || '';
	return this;
}
DashboardItem.prototype.addEventListener = function () {
};
DashboardItem.prototype.removeEventListener = function () {
};
DashboardItem.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
DashboardItem.prototype.fireEvent = function () {
};
DashboardItem.prototype.getBubbleParent = function () {
	return true;
};
DashboardItem.prototype.setBubbleParent = function () {
};
DashboardItem.prototype.getApiName = function () {
	return '';
};
DashboardItem.prototype.getBadge = function () {
	return 0;
};
DashboardItem.prototype.setBadge = function () {
};
DashboardItem.prototype.getCanDelete = function () {
	return true;
};
DashboardItem.prototype.setCanDelete = function () {
};
DashboardItem.prototype.getImage = function () {
	return '';
};
DashboardItem.prototype.setImage = function () {
};
DashboardItem.prototype.getSelectedImage = function () {
	return '';
};
DashboardItem.prototype.setSelectedImage = function () {
};
module.exports = function (properties) {
	return new DashboardItem(properties);
};