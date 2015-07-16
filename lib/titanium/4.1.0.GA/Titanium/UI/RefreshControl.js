function RefreshControl(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.RefreshControl';
	this.title = properties.title || '';
	this.tintColor = properties.tintColor || '';
	return this;
}
RefreshControl.prototype.addEventListener = function () {
};
RefreshControl.prototype.removeEventListener = function () {
};
RefreshControl.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
RefreshControl.prototype.fireEvent = function () {
};
RefreshControl.prototype.beginRefreshing = function () {
};
RefreshControl.prototype.endRefreshing = function () {
};
RefreshControl.prototype.getBubbleParent = function () {
	return true;
};
RefreshControl.prototype.setBubbleParent = function () {
};
RefreshControl.prototype.getApiName = function () {
	return '';
};
RefreshControl.prototype.getTitle = function () {
	return '';
};
RefreshControl.prototype.setTitle = function () {
};
RefreshControl.prototype.getTintColor = function () {
	return '';
};
RefreshControl.prototype.setTintColor = function () {
};
module.exports = function (properties) {
	return new RefreshControl(properties);
};