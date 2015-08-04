var crypto = require('crypto');
function GravityBehavior(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'angle',
			'gravityDirection',
			'items',
			'magnitude',
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
		throw new Error('Ti.UI.iOS.GravityBehavior.apiName is read only property');
	}
	this.apiName = 'Ti.UI.iOS.GravityBehavior';
	this.angle = __SLAG__properties.angle || 0;
	this.gravityDirection = __SLAG__properties.gravityDirection || {
		x: 0,
		y: 0
	};
	if (__SLAG__properties.items) {
		throw new Error('Ti.UI.iOS.GravityBehavior.items is read only property');
	}
	this.items = [];
	this.magnitude = __SLAG__properties.magnitude || 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
GravityBehavior.prototype.addEventListener = function () {
};
GravityBehavior.prototype.removeEventListener = function () {
};
GravityBehavior.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
GravityBehavior.prototype.fireEvent = function () {
};
GravityBehavior.prototype.addItem = function () {
};
GravityBehavior.prototype.removeItem = function () {
};
GravityBehavior.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
GravityBehavior.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
GravityBehavior.prototype.getApiName = function () {
	return this.apiName;
};
GravityBehavior.prototype.getAngle = function () {
	return this.angle;
};
GravityBehavior.prototype.setAngle = function (property) {
	this.angle = property;
};
GravityBehavior.prototype.getGravityDirection = function () {
	return this.gravityDirection;
};
GravityBehavior.prototype.setGravityDirection = function (property) {
	this.gravityDirection = property;
};
GravityBehavior.prototype.getItems = function () {
	return this.items;
};
GravityBehavior.prototype.getMagnitude = function () {
	return this.magnitude;
};
GravityBehavior.prototype.setMagnitude = function (property) {
	this.magnitude = property;
};
module.exports = function (properties) {
	return new GravityBehavior(properties);
};