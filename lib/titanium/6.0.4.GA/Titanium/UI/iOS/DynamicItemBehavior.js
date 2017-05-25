var crypto = require('crypto');
function DynamicItemBehavior(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
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
	if (__SLAG_NAMES.length > 0 && process.env.SLAG_STRICT === 'true') {
		for (var __SLAG_NAME in __SLAG_PROPERTIES) {
			if (__SLAG_NAMES.indexOf(__SLAG_NAME) === -1) {
				throw new Error('Use user custom property ' + __SLAG_NAME);
			}
		}
	} else if (__SLAG_NAMES.length === 0 && __SLAG_PROPERTIES.length > 0 && process.env.SLAG_STRICT === 'true') {
		throw new Error('Use user custom properties. ' + __SLAG_PROPERTIES.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.bubbleParent = undefined;
	} else {
		this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	}
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.UI.iOS.DynamicItemBehavior.apiName is read only property');
	}
	this.apiName = 'Ti.UI.iOS.DynamicItemBehavior';
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.allowsRotation = undefined;
	} else {
		this.allowsRotation = __SLAG_PROPERTIES.allowsRotation || true;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.angularResistance = undefined;
	} else {
		this.angularResistance = __SLAG_PROPERTIES.angularResistance || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.density = undefined;
	} else {
		this.density = __SLAG_PROPERTIES.density || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.elasticity = undefined;
	} else {
		this.elasticity = __SLAG_PROPERTIES.elasticity || 0;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.friction = undefined;
	} else {
		this.friction = __SLAG_PROPERTIES.friction || 0;
	}
	if (__SLAG_PROPERTIES.items) {
		throw new Error('Ti.UI.iOS.DynamicItemBehavior.items is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.items = undefined;
	} else {
		this.items = [];
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.resistance = undefined;
	} else {
		this.resistance = __SLAG_PROPERTIES.resistance || 0;
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
DynamicItemBehavior.prototype.addEventListener = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
DynamicItemBehavior.prototype.removeEventListener = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
DynamicItemBehavior.prototype.fireEvent = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
DynamicItemBehavior.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
DynamicItemBehavior.prototype.addAngularVelocityForItem = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
DynamicItemBehavior.prototype.addItem = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
DynamicItemBehavior.prototype.addLinearVelocityForItem = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
DynamicItemBehavior.prototype.angularVelocityForItem = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return 0;
};
DynamicItemBehavior.prototype.linearVelocityForItem = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {
		x: 0,
		y: 0
	};
};
DynamicItemBehavior.prototype.removeItem = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
DynamicItemBehavior.prototype.getBubbleParent = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
DynamicItemBehavior.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
DynamicItemBehavior.prototype.getApiName = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
DynamicItemBehavior.prototype.getAllowsRotation = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.allowsRotation;
};
DynamicItemBehavior.prototype.setAllowsRotation = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.allowsRotation = __SLAG__PROPERTY;
};
DynamicItemBehavior.prototype.getAngularResistance = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.angularResistance;
};
DynamicItemBehavior.prototype.setAngularResistance = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.angularResistance = __SLAG__PROPERTY;
};
DynamicItemBehavior.prototype.getDensity = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.density;
};
DynamicItemBehavior.prototype.setDensity = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.density = __SLAG__PROPERTY;
};
DynamicItemBehavior.prototype.getElasticity = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.elasticity;
};
DynamicItemBehavior.prototype.setElasticity = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.elasticity = __SLAG__PROPERTY;
};
DynamicItemBehavior.prototype.getFriction = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.friction;
};
DynamicItemBehavior.prototype.setFriction = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.friction = __SLAG__PROPERTY;
};
DynamicItemBehavior.prototype.getItems = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.items;
};
DynamicItemBehavior.prototype.getResistance = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.resistance;
};
DynamicItemBehavior.prototype.setResistance = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.resistance = __SLAG__PROPERTY;
};
module.exports = function (properties) {
	return new DynamicItemBehavior(properties);
};