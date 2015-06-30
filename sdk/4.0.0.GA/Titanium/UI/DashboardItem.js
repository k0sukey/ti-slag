function DashboardItem(properties) {
	properties = properties || {};
	this.apiName = 'Titanium.UI.DashboardItem';
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
	return this.apiName;
};
DashboardItem.prototype.getBadge = function () {
	return this.badge;
};
DashboardItem.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
DashboardItem.prototype.getCanDelete = function () {
	return this.canDelete;
};
DashboardItem.prototype.getImage = function () {
	return this.image;
};
DashboardItem.prototype.getSelectedImage = function () {
	return this.selectedImage;
};
DashboardItem.prototype.removeEventListener = function () {
};
DashboardItem.prototype.setBadge = function (property) {
	this.badge = property;
};
DashboardItem.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
DashboardItem.prototype.setCanDelete = function (property) {
	this.canDelete = property;
};
DashboardItem.prototype.setImage = function (property) {
	this.image = property;
};
DashboardItem.prototype.setSelectedImage = function (property) {
	this.selectedImage = property;
};
module.exports = function (properties) {
	return new DashboardItem(properties);
};