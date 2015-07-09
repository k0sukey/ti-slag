function Windows(properties) {
	properties = properties || {};
	return this;
}
Windows.prototype.addEventListener = function () {
};
Windows.prototype.removeEventListener = function () {
};
Windows.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Windows.prototype.fireEvent = function () {
};
Windows.prototype.createAppBarButton = function (params) {
	var AppBarButton = require('./Windows/AppBarButton');
	return AppBarButton(params);
};
Windows.prototype.createAppBarSeparator = function (params) {
	var AppBarSeparator = require('./Windows/AppBarSeparator');
	return AppBarSeparator(params);
};
Windows.prototype.createAppBarToggleButton = function (params) {
	var AppBarToggleButton = require('./Windows/AppBarToggleButton');
	return AppBarToggleButton(params);
};
Windows.prototype.createCommandBar = function (params) {
	var CommandBar = require('./Windows/CommandBar');
	return CommandBar(params);
};
module.exports = function (properties) {
	return new Windows(properties);
};