var crypto = require('crypto');
function Circle(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'center',
			'radius',
			'fillColor',
			'strokeColor',
			'strokeWidth',
			'zIndex',
			'id'
		];
	if (__SLAG__names.length > 0 && process.env.SLAG_STRICT === 'true') {
		for (var __SLAG__name in __SLAG__properties) {
			if (__SLAG__names.indexOf(__SLAG__name) === -1) {
				throw new Error('Use user custom property ' + __SLAG__name);
			}
		}
	} else if (__SLAG__names.length === 0 && __SLAG__properties.length > 0 && process.env.SLAG_STRICT === 'true') {
		throw new Error('Use user custom properties. ' + __SLAG__properties.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.apiName) {
		throw new Error('Modules.Map.Circle.apiName is read only property');
	}
	this.apiName = 'Modules.Map.Circle';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.center = __SLAG__properties.center || {
		x: 0,
		y: 0
	};
	this.radius = __SLAG__properties.radius || 0;
	this.fillColor = __SLAG__properties.fillColor || '';
	this.strokeColor = __SLAG__properties.strokeColor || '';
	this.strokeWidth = __SLAG__properties.strokeWidth || 0;
	this.zIndex = __SLAG__properties.zIndex || 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
Circle.prototype.addEventListener = function () {
};
Circle.prototype.removeEventListener = function () {
};
Circle.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Circle.prototype.fireEvent = function () {
};
Circle.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Circle.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Circle.prototype.getApiName = function () {
	return this.apiName;
};
Circle.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Circle.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
Circle.prototype.getCenter = function () {
	return this.center;
};
Circle.prototype.setCenter = function (property) {
	this.center = property;
};
Circle.prototype.getRadius = function () {
	return this.radius;
};
Circle.prototype.setRadius = function (property) {
	this.radius = property;
};
Circle.prototype.getFillColor = function () {
	return this.fillColor;
};
Circle.prototype.setFillColor = function (property) {
	this.fillColor = property;
};
Circle.prototype.getStrokeColor = function () {
	return this.strokeColor;
};
Circle.prototype.setStrokeColor = function (property) {
	this.strokeColor = property;
};
Circle.prototype.getStrokeWidth = function () {
	return this.strokeWidth;
};
Circle.prototype.setStrokeWidth = function (property) {
	this.strokeWidth = property;
};
Circle.prototype.getZIndex = function () {
	return this.zIndex;
};
Circle.prototype.setZIndex = function (property) {
	this.zIndex = property;
};
module.exports = function (properties) {
	return new Circle(properties);
};