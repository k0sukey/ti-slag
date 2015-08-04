var crypto = require('crypto');
function AnchorAttachmentBehavior(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'anchor',
			'damping',
			'distance',
			'frequency',
			'item',
			'offset',
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
		throw new Error('Ti.UI.iOS.AnchorAttachmentBehavior.apiName is read only property');
	}
	this.apiName = 'Ti.UI.iOS.AnchorAttachmentBehavior';
	this.anchor = __SLAG__properties.anchor || {
		x: 0,
		y: 0
	};
	this.damping = __SLAG__properties.damping || 0;
	this.distance = __SLAG__properties.distance || 0;
	this.frequency = __SLAG__properties.frequency || 0;
	this.item = __SLAG__properties.item || {};
	this.offset = __SLAG__properties.offset || {
		x: 0,
		y: 0
	};
	this.id = __SLAG__properties.id || '';
	return this;
}
AnchorAttachmentBehavior.prototype.addEventListener = function () {
};
AnchorAttachmentBehavior.prototype.removeEventListener = function () {
};
AnchorAttachmentBehavior.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
AnchorAttachmentBehavior.prototype.fireEvent = function () {
};
AnchorAttachmentBehavior.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
AnchorAttachmentBehavior.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
AnchorAttachmentBehavior.prototype.getApiName = function () {
	return this.apiName;
};
AnchorAttachmentBehavior.prototype.getAnchor = function () {
	return this.anchor;
};
AnchorAttachmentBehavior.prototype.setAnchor = function (property) {
	this.anchor = property;
};
AnchorAttachmentBehavior.prototype.getDamping = function () {
	return this.damping;
};
AnchorAttachmentBehavior.prototype.setDamping = function (property) {
	this.damping = property;
};
AnchorAttachmentBehavior.prototype.getDistance = function () {
	return this.distance;
};
AnchorAttachmentBehavior.prototype.setDistance = function (property) {
	this.distance = property;
};
AnchorAttachmentBehavior.prototype.getFrequency = function () {
	return this.frequency;
};
AnchorAttachmentBehavior.prototype.setFrequency = function (property) {
	this.frequency = property;
};
AnchorAttachmentBehavior.prototype.getItem = function () {
	return this.item;
};
AnchorAttachmentBehavior.prototype.setItem = function (property) {
	this.item = property;
};
AnchorAttachmentBehavior.prototype.getOffset = function () {
	return this.offset;
};
AnchorAttachmentBehavior.prototype.setOffset = function (property) {
	this.offset = property;
};
module.exports = function (properties) {
	return new AnchorAttachmentBehavior(properties);
};