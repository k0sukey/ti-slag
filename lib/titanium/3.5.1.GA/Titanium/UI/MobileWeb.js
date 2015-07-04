function MobileWeb(properties) {
	properties = properties || {};
	this.apiName = 'Ti.UI.MobileWeb';
	return this;
}
MobileWeb.prototype.addEventListener = function () {
};
MobileWeb.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
MobileWeb.prototype.createNavigationGroup = function (params) {
	var NavigationGroup = require('./MobileWeb/NavigationGroup');
	return NavigationGroup(params);
};
MobileWeb.prototype.fireEvent = function () {
};
MobileWeb.prototype.getApiName = function () {
	return '';
};
MobileWeb.prototype.removeEventListener = function () {
};
module.exports = function (properties) {
	return new MobileWeb(properties);
};