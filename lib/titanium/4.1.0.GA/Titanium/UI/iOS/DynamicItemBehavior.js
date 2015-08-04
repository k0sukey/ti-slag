var crypto = require('crypto');
function DynamicItemBehavior(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'allowsRotation',
			'angularResistance',
			'density',
			'elasticity',
			'friction',
			'items',
			'resistance',
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
		throw new Error('Ti.UI.iOS.DynamicItemBehavior.apiName is read only property');
	}
	this.apiName = 'Ti.UI.iOS.DynamicItemBehavior';
	this.allowsRotation = __SLAG__properties.allowsRotation || true;
	this.angularResistance = __SLAG__properties.angularResistance || 0;
	this.density = __SLAG__properties.density || 0;
	this.elasticity = __SLAG__properties.elasticity || 0;
	this.friction = __SLAG__properties.friction || 0;
	if (__SLAG__properties.items) {
		throw new Error('Ti.UI.iOS.DynamicItemBehavior.items is read only property');
	}
	this.items = [];
	this.resistance = __SLAG__properties.resistance || 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
DynamicItemBehavior.prototype.addEventListener = function () {
};
DynamicItemBehavior.prototype.removeEventListener = function () {
};
DynamicItemBehavior.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
DynamicItemBehavior.prototype.fireEvent = function () {
};
DynamicItemBehavior.prototype.addAngularVelocityForItem = function () {
};
DynamicItemBehavior.prototype.addItem = function () {
};
DynamicItemBehavior.prototype.addLinearVelocityForItem = function () {
};
DynamicItemBehavior.prototype.angularVelocityForItem = function () {
	return 0;
};
DynamicItemBehavior.prototype.linearVelocityForItem = function () {
	return {
		x: 0,
		y: 0
	};
};
DynamicItemBehavior.prototype.removeItem = function () {
};
DynamicItemBehavior.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
DynamicItemBehavior.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
DynamicItemBehavior.prototype.getApiName = function () {
	return this.apiName;
};
DynamicItemBehavior.prototype.getAllowsRotation = function () {
	return this.allowsRotation;
};
DynamicItemBehavior.prototype.setAllowsRotation = function (property) {
	this.allowsRotation = property;
};
DynamicItemBehavior.prototype.getAngularResistance = function () {
	return this.angularResistance;
};
DynamicItemBehavior.prototype.setAngularResistance = function (property) {
	this.angularResistance = property;
};
DynamicItemBehavior.prototype.getDensity = function () {
	return this.density;
};
DynamicItemBehavior.prototype.setDensity = function (property) {
	this.density = property;
};
DynamicItemBehavior.prototype.getElasticity = function () {
	return this.elasticity;
};
DynamicItemBehavior.prototype.setElasticity = function (property) {
	this.elasticity = property;
};
DynamicItemBehavior.prototype.getFriction = function () {
	return this.friction;
};
DynamicItemBehavior.prototype.setFriction = function (property) {
	this.friction = property;
};
DynamicItemBehavior.prototype.getItems = function () {
	return this.items;
};
DynamicItemBehavior.prototype.getResistance = function () {
	return this.resistance;
};
DynamicItemBehavior.prototype.setResistance = function (property) {
	this.resistance = property;
};
module.exports = function (properties) {
	return new DynamicItemBehavior(properties);
};