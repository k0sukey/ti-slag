function Alloy(properties) {
	properties = properties || {};
	this.CFG = properties.CFG || undefined;
	this.Collections = properties.Collections || undefined;
	this.Globals = properties.Globals || undefined;
	this.Models = properties.Models || undefined;
	this.isHandheld = properties.isHandheld || undefined;
	this.isTablet = properties.isTablet || undefined;
	return this;
}
Alloy.prototype.createCollection = function (params) {
	var Collection = require('./Alloy/Collection');
	return Collection(params);
};
Alloy.prototype.createController = function (params) {
	var Controller = require('./Alloy/Controller');
	return Controller(params);
};
Alloy.prototype.createModel = function (params) {
	var Model = require('./Alloy/Model');
	return Model(params);
};
Alloy.prototype.createWidget = function (params) {
	var Widget = require('./Alloy/Widget');
	return Widget(params);
};
module.exports = function (properties) {
	return new Alloy(properties);
};