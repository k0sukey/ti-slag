function DashboardItem(properties) {
	properties = properties || {};
	this.apiName = 'Ti.UI.DashboardItem';
	this.badge = properties.badge || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.canDelete = properties.canDelete || undefined;
	this.image = properties.image || undefined;
	this.selectedImage = properties.selectedImage || undefined;
	return this;
}
DashboardItem.prototype.addEventListener = function () {
};
DashboardItem.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
DashboardItem.prototype.fireEvent = function () {
};
DashboardItem.prototype.getApiName = function () {
	return '';
};
DashboardItem.prototype.getBadge = function () {
	return 0;
};
DashboardItem.prototype.getBubbleParent = function () {
	return true;
};
DashboardItem.prototype.getCanDelete = function () {
	return true;
};
DashboardItem.prototype.getImage = function () {
	return '';
};
DashboardItem.prototype.getSelectedImage = function () {
	return '';
};
DashboardItem.prototype.removeEventListener = function () {
};
DashboardItem.prototype.setBadge = function () {
};
DashboardItem.prototype.setBubbleParent = function () {
};
DashboardItem.prototype.setCanDelete = function () {
};
DashboardItem.prototype.setImage = function () {
};
DashboardItem.prototype.setSelectedImage = function () {
};
module.exports = function (properties) {
	return new DashboardItem(properties);
};