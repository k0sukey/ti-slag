function Widget(properties) {
	properties = properties || {};
	return this;
}
Widget.prototype.createCollection = function (params) {
	var Collection = require('./Widget/Collection');
	return Collection(params);
};
Widget.prototype.createController = function (params) {
	var Controller = require('./Widget/Controller');
	return Controller(params);
};
Widget.prototype.createModel = function (params) {
	var Model = require('./Widget/Model');
	return Model(params);
};
Widget.prototype.createWidget = function (params) {
	var Widget = require('./Widget/Widget');
	return Widget(params);
};
Widget.prototype.on = function () {
};
Widget.prototype.off = function () {
};
Widget.prototype.trigger = function () {
};
Widget.prototype.bind = function () {
};
Widget.prototype.unbind = function () {
};
module.exports = function (properties) {
	return new Widget(properties);
};