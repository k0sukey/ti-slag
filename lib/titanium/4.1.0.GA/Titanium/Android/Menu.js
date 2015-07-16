function Menu(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.Android.Menu';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.items = properties.items || [];
	return this;
}
Menu.prototype.addEventListener = function () {
};
Menu.prototype.removeEventListener = function () {
};
Menu.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Menu.prototype.fireEvent = function () {
};
Menu.prototype.add = function () {
	return {};
};
Menu.prototype.clear = function () {
};
Menu.prototype.close = function () {
};
Menu.prototype.findItem = function () {
	return {};
};
Menu.prototype.getItem = function () {
	return {};
};
Menu.prototype.hasVisibleItems = function () {
	return true;
};
Menu.prototype.removeGroup = function () {
};
Menu.prototype.removeItem = function () {
};
Menu.prototype.setGroupEnabled = function () {
};
Menu.prototype.setGroupVisible = function () {
};
Menu.prototype.size = function () {
	return 0;
};
Menu.prototype.getBubbleParent = function () {
	return true;
};
Menu.prototype.setBubbleParent = function () {
};
Menu.prototype.getApiName = function () {
	return '';
};
Menu.prototype.getLifecycleContainer = function () {
	return {};
};
Menu.prototype.setLifecycleContainer = function () {
};
Menu.prototype.getItems = function () {
	return [];
};
module.exports = function (properties) {
	return new Menu(properties);
};