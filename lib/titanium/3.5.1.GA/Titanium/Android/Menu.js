function Menu(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Android.Menu';
	this.bubbleParent = properties.bubbleParent || true;
	this.items = properties.items || [];
	return this;
}
Menu.prototype.add = function () {
	return {};
};
Menu.prototype.addEventListener = function () {
};
Menu.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Menu.prototype.clear = function () {
};
Menu.prototype.close = function () {
};
Menu.prototype.findItem = function () {
	return {};
};
Menu.prototype.fireEvent = function () {
};
Menu.prototype.getApiName = function () {
	return '';
};
Menu.prototype.getBubbleParent = function () {
	return true;
};
Menu.prototype.getItem = function () {
	return {};
};
Menu.prototype.getItems = function () {
	return [];
};
Menu.prototype.hasVisibleItems = function () {
	return true;
};
Menu.prototype.removeEventListener = function () {
};
Menu.prototype.removeGroup = function () {
};
Menu.prototype.removeItem = function () {
};
Menu.prototype.setBubbleParent = function () {
};
Menu.prototype.setGroupEnabled = function () {
};
Menu.prototype.setGroupVisible = function () {
};
Menu.prototype.size = function () {
	return 0;
};
module.exports = function (properties) {
	return new Menu(properties);
};