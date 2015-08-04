var crypto = require('crypto');
function SnapBehavior(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'damping',
			'item',
			'snapPoint',
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
		throw new Error('Ti.UI.iOS.SnapBehavior.apiName is read only property');
	}
	this.apiName = 'Ti.UI.iOS.SnapBehavior';
	this.damping = __SLAG__properties.damping || 0;
	this.item = __SLAG__properties.item || {};
	this.snapPoint = __SLAG__properties.snapPoint || {
		x: 0,
		y: 0
	};
	this.id = __SLAG__properties.id || '';
	return this;
}
SnapBehavior.prototype.addEventListener = function () {
};
SnapBehavior.prototype.removeEventListener = function () {
};
SnapBehavior.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
SnapBehavior.prototype.fireEvent = function () {
};
SnapBehavior.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
SnapBehavior.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
SnapBehavior.prototype.getApiName = function () {
	return this.apiName;
};
SnapBehavior.prototype.getDamping = function () {
	return this.damping;
};
SnapBehavior.prototype.setDamping = function (property) {
	this.damping = property;
};
SnapBehavior.prototype.getItem = function () {
	return this.item;
};
SnapBehavior.prototype.setItem = function (property) {
	this.item = property;
};
SnapBehavior.prototype.getSnapPoint = function () {
	return this.snapPoint;
};
SnapBehavior.prototype.setSnapPoint = function (property) {
	this.snapPoint = property;
};
module.exports = function (properties) {
	return new SnapBehavior(properties);
};