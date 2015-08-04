var crypto = require('crypto');
function PushBehavior(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'active',
			'angle',
			'items',
			'magnitude',
			'pushDirection',
			'pushMode',
			'id'
		];
	if (__SLAG__names.length > 0 && process.env.SLAG_STRICT) {
		for (var __SLAG__name in __SLAG__properties) {
			if (__SLAG__names.indexOf(__SLAG__name) === -1) {
				throw new Error('Use user custom property ' + __SLAG__name);
			}
		}
	} else if (__SLAG__names.length === 0 && __SLAG__properties.length > 0 && process.env.SLAG_STRICT) {
		throw new Error('Use user custom properties. ' + __SLAG__properties.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.iOS.PushBehavior.apiName is read only property');
	}
	this.apiName = 'Ti.UI.iOS.PushBehavior';
	this.active = __SLAG__properties.active || true;
	this.angle = __SLAG__properties.angle || 0;
	if (__SLAG__properties.items) {
		throw new Error('Ti.UI.iOS.PushBehavior.items is read only property');
	}
	this.items = [];
	this.magnitude = __SLAG__properties.magnitude || 0;
	this.pushDirection = __SLAG__properties.pushDirection || {
		x: 0,
		y: 0
	};
	this.pushMode = __SLAG__properties.pushMode || 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
PushBehavior.prototype.addEventListener = function () {
};
PushBehavior.prototype.removeEventListener = function () {
};
PushBehavior.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
PushBehavior.prototype.fireEvent = function () {
};
PushBehavior.prototype.addItem = function () {
};
PushBehavior.prototype.removeItem = function () {
};
PushBehavior.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
PushBehavior.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
PushBehavior.prototype.getApiName = function () {
	return this.apiName;
};
PushBehavior.prototype.getActive = function () {
	return this.active;
};
PushBehavior.prototype.setActive = function (property) {
	this.active = property;
};
PushBehavior.prototype.getAngle = function () {
	return this.angle;
};
PushBehavior.prototype.setAngle = function (property) {
	this.angle = property;
};
PushBehavior.prototype.getItems = function () {
	return this.items;
};
PushBehavior.prototype.getMagnitude = function () {
	return this.magnitude;
};
PushBehavior.prototype.setMagnitude = function (property) {
	this.magnitude = property;
};
PushBehavior.prototype.getPushDirection = function () {
	return this.pushDirection;
};
PushBehavior.prototype.setPushDirection = function (property) {
	this.pushDirection = property;
};
PushBehavior.prototype.getPushMode = function () {
	return this.pushMode;
};
PushBehavior.prototype.setPushMode = function (property) {
	this.pushMode = property;
};
module.exports = function (properties) {
	return new PushBehavior(properties);
};