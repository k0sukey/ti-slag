var crypto = require('crypto');
function Polyline(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'points',
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
		throw new Error('Modules.Map.Polyline.apiName is read only property');
	}
	this.apiName = 'Modules.Map.Polyline';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.points = __SLAG__properties.points || {
		x: 0,
		y: 0
	};
	this.strokeColor = __SLAG__properties.strokeColor || '';
	this.strokeWidth = __SLAG__properties.strokeWidth || 0;
	this.zIndex = __SLAG__properties.zIndex || 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
Polyline.prototype.addEventListener = function () {
};
Polyline.prototype.removeEventListener = function () {
};
Polyline.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Polyline.prototype.fireEvent = function () {
};
Polyline.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Polyline.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Polyline.prototype.getApiName = function () {
	return this.apiName;
};
Polyline.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Polyline.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
Polyline.prototype.getPoints = function () {
	return this.points;
};
Polyline.prototype.setPoints = function (property) {
	this.points = property;
};
Polyline.prototype.getStrokeColor = function () {
	return this.strokeColor;
};
Polyline.prototype.setStrokeColor = function (property) {
	this.strokeColor = property;
};
Polyline.prototype.getStrokeWidth = function () {
	return this.strokeWidth;
};
Polyline.prototype.setStrokeWidth = function (property) {
	this.strokeWidth = property;
};
Polyline.prototype.getZIndex = function () {
	return this.zIndex;
};
Polyline.prototype.setZIndex = function (property) {
	this.zIndex = property;
};
module.exports = function (properties) {
	return new Polyline(properties);
};