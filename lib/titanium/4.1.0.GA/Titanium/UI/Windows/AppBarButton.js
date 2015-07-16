function AppBarButton(properties) {
	properties = properties || {};
	this.icon = properties.icon || 0;
	this.touchEnabled = properties.touchEnabled || true;
	return this;
}
AppBarButton.prototype.addEventListener = function () {
};
AppBarButton.prototype.removeEventListener = function () {
};
AppBarButton.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
AppBarButton.prototype.fireEvent = function () {
};
AppBarButton.prototype.getIcon = function () {
	return 0;
};
AppBarButton.prototype.setIcon = function () {
};
AppBarButton.prototype.getTouchEnabled = function () {
	return true;
};
AppBarButton.prototype.setTouchEnabled = function () {
};
module.exports = function (properties) {
	return new AppBarButton(properties);
};