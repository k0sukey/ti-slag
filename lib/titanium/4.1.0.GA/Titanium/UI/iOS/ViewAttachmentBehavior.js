var crypto = require('crypto');
function ViewAttachmentBehavior(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'anchorItem',
			'anchorOffset',
			'damping',
			'distance',
			'frequency',
			'item',
			'itemOffset',
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
		throw new Error('Ti.UI.iOS.ViewAttachmentBehavior.apiName is read only property');
	}
	this.apiName = 'Ti.UI.iOS.ViewAttachmentBehavior';
	this.anchorItem = __SLAG__properties.anchorItem || {};
	this.anchorOffset = __SLAG__properties.anchorOffset || {
		x: 0,
		y: 0
	};
	this.damping = __SLAG__properties.damping || 0;
	this.distance = __SLAG__properties.distance || 0;
	this.frequency = __SLAG__properties.frequency || 0;
	this.item = __SLAG__properties.item || {};
	this.itemOffset = __SLAG__properties.itemOffset || {
		x: 0,
		y: 0
	};
	this.id = __SLAG__properties.id || '';
	return this;
}
ViewAttachmentBehavior.prototype.addEventListener = function () {
};
ViewAttachmentBehavior.prototype.removeEventListener = function () {
};
ViewAttachmentBehavior.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
ViewAttachmentBehavior.prototype.fireEvent = function () {
};
ViewAttachmentBehavior.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
ViewAttachmentBehavior.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
ViewAttachmentBehavior.prototype.getApiName = function () {
	return this.apiName;
};
ViewAttachmentBehavior.prototype.getAnchorItem = function () {
	return this.anchorItem;
};
ViewAttachmentBehavior.prototype.setAnchorItem = function (property) {
	this.anchorItem = property;
};
ViewAttachmentBehavior.prototype.getAnchorOffset = function () {
	return this.anchorOffset;
};
ViewAttachmentBehavior.prototype.setAnchorOffset = function (property) {
	this.anchorOffset = property;
};
ViewAttachmentBehavior.prototype.getDamping = function () {
	return this.damping;
};
ViewAttachmentBehavior.prototype.setDamping = function (property) {
	this.damping = property;
};
ViewAttachmentBehavior.prototype.getDistance = function () {
	return this.distance;
};
ViewAttachmentBehavior.prototype.setDistance = function (property) {
	this.distance = property;
};
ViewAttachmentBehavior.prototype.getFrequency = function () {
	return this.frequency;
};
ViewAttachmentBehavior.prototype.setFrequency = function (property) {
	this.frequency = property;
};
ViewAttachmentBehavior.prototype.getItem = function () {
	return this.item;
};
ViewAttachmentBehavior.prototype.setItem = function (property) {
	this.item = property;
};
ViewAttachmentBehavior.prototype.getItemOffset = function () {
	return this.itemOffset;
};
ViewAttachmentBehavior.prototype.setItemOffset = function (property) {
	this.itemOffset = property;
};
module.exports = function (properties) {
	return new ViewAttachmentBehavior(properties);
};