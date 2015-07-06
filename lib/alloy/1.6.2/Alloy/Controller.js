function Controller(properties) {
	properties = properties || {};
	return this;
}
Controller.prototype.addClass = function () {
};
Controller.prototype.createStyle = function (params) {
	var Style = require('./Controller/Style');
	return Style(params);
};
Controller.prototype.destroy = function () {
};
Controller.prototype.getTopLevelViews = function () {
	return [];
};
Controller.prototype.getView = function (params) {
	return require('../TiProxy');
};
Controller.prototype.getViews = function () {
	return [];
};
Controller.prototype.removeClass = function () {
};
Controller.prototype.resetClass = function () {
};
Controller.prototype.on = function () {
};
Controller.prototype.off = function () {
};
Controller.prototype.trigger = function () {
};
Controller.prototype.bind = function () {
};
Controller.prototype.unbind = function () {
};
module.exports = function (properties) {
	return new Controller(properties);
};