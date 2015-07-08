function Tizen(properties) {
	properties = properties || {};
	this.apiName = 'Ti.App.Tizen';
	this.categories = properties.categories || '';
	this.iconPath = properties.iconPath || '';
	this.id = properties.id || '';
	this.installDate = properties.installDate || new Date();
	this.name = properties.name || '';
	this.show = properties.show || true;
	this.size = properties.size || 0;
	return this;
}
Tizen.prototype.addEventListener = function () {
};
Tizen.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Tizen.prototype.exit = function () {
};
Tizen.prototype.fireEvent = function () {
};
Tizen.prototype.getApiName = function () {
	return '';
};
Tizen.prototype.getCategories = function () {
	return '';
};
Tizen.prototype.getIconPath = function () {
	return '';
};
Tizen.prototype.getId = function () {
	return '';
};
Tizen.prototype.getInstallDate = function () {
	return new Date();
};
Tizen.prototype.getName = function () {
	return '';
};
Tizen.prototype.getShow = function () {
	return true;
};
Tizen.prototype.getSize = function () {
	return 0;
};
Tizen.prototype.hide = function () {
};
Tizen.prototype.removeEventListener = function () {
};
module.exports = function (properties) {
	return new Tizen(properties);
};