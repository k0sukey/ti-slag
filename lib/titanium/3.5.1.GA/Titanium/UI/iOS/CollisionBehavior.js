var crypto = require('crypto');
function CollisionBehavior(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'apiName',
			'boundaryIdentifiers',
			'bubbleParent',
			'collisionMode',
			'items',
			'referenceInsets',
			'treatReferenceAsBoundary',
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
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.iOS.CollisionBehavior.apiName is read only property');
	}
	this.apiName = 'Ti.UI.iOS.CollisionBehavior';
	if (__SLAG__properties.boundaryIdentifiers) {
		throw new Error('Ti.UI.iOS.CollisionBehavior.boundaryIdentifiers is read only property');
	}
	this.boundaryIdentifiers = [];
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.collisionMode = __SLAG__properties.collisionMode || 0;
	if (__SLAG__properties.items) {
		throw new Error('Ti.UI.iOS.CollisionBehavior.items is read only property');
	}
	this.items = [];
	this.referenceInsets = __SLAG__properties.referenceInsets || {};
	this.treatReferenceAsBoundary = __SLAG__properties.treatReferenceAsBoundary || true;
	this.id = __SLAG__properties.id || '';
	return this;
}
CollisionBehavior.prototype.addBoundary = function () {
};
CollisionBehavior.prototype.addEventListener = function () {
};
CollisionBehavior.prototype.addItem = function () {
};
CollisionBehavior.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
CollisionBehavior.prototype.fireEvent = function () {
};
CollisionBehavior.prototype.getApiName = function () {
	return this.apiName;
};
CollisionBehavior.prototype.getBoundaryIdentifiers = function () {
	return this.boundaryIdentifiers;
};
CollisionBehavior.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
CollisionBehavior.prototype.getCollisionMode = function () {
	return this.collisionMode;
};
CollisionBehavior.prototype.getItems = function () {
	return this.items;
};
CollisionBehavior.prototype.getReferenceInsets = function () {
	return this.referenceInsets;
};
CollisionBehavior.prototype.getTreatReferenceAsBoundary = function () {
	return this.treatReferenceAsBoundary;
};
CollisionBehavior.prototype.removeAllBoundaries = function () {
};
CollisionBehavior.prototype.removeBoundary = function () {
};
CollisionBehavior.prototype.removeEventListener = function () {
};
CollisionBehavior.prototype.removeItem = function () {
};
CollisionBehavior.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
CollisionBehavior.prototype.setCollisionMode = function (property) {
	this.collisionMode = property;
};
CollisionBehavior.prototype.setReferenceInsets = function (property) {
	this.referenceInsets = property;
};
CollisionBehavior.prototype.setTreatReferenceAsBoundary = function (property) {
	this.treatReferenceAsBoundary = property;
};
module.exports = function (properties) {
	return new CollisionBehavior(properties);
};