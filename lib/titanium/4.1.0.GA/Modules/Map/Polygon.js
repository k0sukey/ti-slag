var crypto = require('crypto');
function Polygon(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'points',
			'holes',
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
		throw new Error('Modules.Map.Polygon.apiName is read only property');
	}
	this.apiName = 'Modules.Map.Polygon';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.points = __SLAG__properties.points || {
		x: 0,
		y: 0
	};
	this.holes = __SLAG__properties.holes || {
		x: 0,
		y: 0
	};
	this.fillColor = __SLAG__properties.fillColor || '';
	this.strokeColor = __SLAG__properties.strokeColor || '';
	this.strokeWidth = __SLAG__properties.strokeWidth || 0;
	this.zIndex = __SLAG__properties.zIndex || 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
Polygon.prototype.addEventListener = function () {
};
Polygon.prototype.removeEventListener = function () {
};
Polygon.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Polygon.prototype.fireEvent = function () {
};
Polygon.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Polygon.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Polygon.prototype.getApiName = function () {
	return this.apiName;
};
Polygon.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Polygon.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
Polygon.prototype.getPoints = function () {
	return this.points;
};
Polygon.prototype.setPoints = function (property) {
	this.points = property;
};
Polygon.prototype.getHoles = function () {
	return this.holes;
};
Polygon.prototype.setHoles = function (property) {
	this.holes = property;
};
Polygon.prototype.getFillColor = function () {
	return this.fillColor;
};
Polygon.prototype.setFillColor = function (property) {
	this.fillColor = property;
};
Polygon.prototype.getStrokeColor = function () {
	return this.strokeColor;
};
Polygon.prototype.setStrokeColor = function (property) {
	this.strokeColor = property;
};
Polygon.prototype.getStrokeWidth = function () {
	return this.strokeWidth;
};
Polygon.prototype.setStrokeWidth = function (property) {
	this.strokeWidth = property;
};
Polygon.prototype.getZIndex = function () {
	return this.zIndex;
};
Polygon.prototype.setZIndex = function (property) {
	this.zIndex = property;
};
module.exports = function (properties) {
	return new Polygon(properties);
};