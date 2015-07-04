function RefreshControl(properties) {
	properties = properties || {};
	this.apiName = 'Ti.UI.RefreshControl';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.tintColor = properties.tintColor || undefined;
	this.title = properties.title || undefined;
	return this;
}
RefreshControl.prototype.addEventListener = function () {
};
RefreshControl.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
RefreshControl.prototype.beginRefreshing = function () {
};
RefreshControl.prototype.endRefreshing = function () {
};
RefreshControl.prototype.fireEvent = function () {
};
RefreshControl.prototype.getApiName = function () {
	return '';
};
RefreshControl.prototype.getBubbleParent = function () {
	return true;
};
RefreshControl.prototype.getTintColor = function () {
	return '';
};
RefreshControl.prototype.getTitle = function () {
	return '';
};
RefreshControl.prototype.removeEventListener = function () {
};
RefreshControl.prototype.setBubbleParent = function () {
};
RefreshControl.prototype.setTintColor = function () {
};
RefreshControl.prototype.setTitle = function () {
};
module.exports = function (properties) {
	return new RefreshControl(properties);
};