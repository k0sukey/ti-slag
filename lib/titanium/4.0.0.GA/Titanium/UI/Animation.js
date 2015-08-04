var crypto = require('crypto');
function Animation(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'anchorPoint',
			'apiName',
			'autoreverse',
			'backgroundColor',
			'bottom',
			'bubbleParent',
			'center',
			'color',
			'curve',
			'delay',
			'duration',
			'height',
			'left',
			'lifecycleContainer',
			'opacity',
			'opaque',
			'repeat',
			'right',
			'top',
			'transform',
			'transition',
			'view',
			'visible',
			'width',
			'zIndex',
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
	this.anchorPoint = __SLAG__properties.anchorPoint || {
		x: 0,
		y: 0
	};
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.Animation.apiName is read only property');
	}
	this.apiName = 'Ti.UI.Animation';
	this.autoreverse = __SLAG__properties.autoreverse || true;
	this.backgroundColor = __SLAG__properties.backgroundColor || '';
	this.bottom = __SLAG__properties.bottom || 0;
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.center = __SLAG__properties.center || {};
	this.color = __SLAG__properties.color || '';
	this.curve = __SLAG__properties.curve || 0;
	this.delay = __SLAG__properties.delay || 0;
	this.duration = __SLAG__properties.duration || 0;
	this.height = __SLAG__properties.height || 0;
	this.left = __SLAG__properties.left || 0;
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.opacity = __SLAG__properties.opacity || 0;
	this.opaque = __SLAG__properties.opaque || true;
	this.repeat = __SLAG__properties.repeat || 0;
	this.right = __SLAG__properties.right || 0;
	this.top = __SLAG__properties.top || 0;
	this.transform = __SLAG__properties.transform || {};
	this.transition = __SLAG__properties.transition || 0;
	this.view = __SLAG__properties.view || {};
	this.visible = __SLAG__properties.visible || true;
	this.width = __SLAG__properties.width || 0;
	this.zIndex = __SLAG__properties.zIndex || 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
Animation.prototype.addEventListener = function () {
};
Animation.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Animation.prototype.fireEvent = function () {
};
Animation.prototype.getAnchorPoint = function () {
	return this.anchorPoint;
};
Animation.prototype.getApiName = function () {
	return this.apiName;
};
Animation.prototype.getAutoreverse = function () {
	return this.autoreverse;
};
Animation.prototype.getBackgroundColor = function () {
	return this.backgroundColor;
};
Animation.prototype.getBottom = function () {
	return this.bottom;
};
Animation.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Animation.prototype.getCenter = function () {
	return this.center;
};
Animation.prototype.getColor = function () {
	return this.color;
};
Animation.prototype.getCurve = function () {
	return this.curve;
};
Animation.prototype.getDelay = function () {
	return this.delay;
};
Animation.prototype.getDuration = function () {
	return this.duration;
};
Animation.prototype.getHeight = function () {
	return this.height;
};
Animation.prototype.getLeft = function () {
	return this.left;
};
Animation.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Animation.prototype.getOpacity = function () {
	return this.opacity;
};
Animation.prototype.getOpaque = function () {
	return this.opaque;
};
Animation.prototype.getRepeat = function () {
	return this.repeat;
};
Animation.prototype.getRight = function () {
	return this.right;
};
Animation.prototype.getTop = function () {
	return this.top;
};
Animation.prototype.getTransform = function () {
	return this.transform;
};
Animation.prototype.getTransition = function () {
	return this.transition;
};
Animation.prototype.getView = function () {
	return this.view;
};
Animation.prototype.getVisible = function () {
	return this.visible;
};
Animation.prototype.getWidth = function () {
	return this.width;
};
Animation.prototype.getZIndex = function () {
	return this.zIndex;
};
Animation.prototype.removeEventListener = function () {
};
Animation.prototype.setAnchorPoint = function (property) {
	this.anchorPoint = property;
};
Animation.prototype.setAutoreverse = function (property) {
	this.autoreverse = property;
};
Animation.prototype.setBackgroundColor = function (property) {
	this.backgroundColor = property;
};
Animation.prototype.setBottom = function (property) {
	this.bottom = property;
};
Animation.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Animation.prototype.setCenter = function (property) {
	this.center = property;
};
Animation.prototype.setColor = function (property) {
	this.color = property;
};
Animation.prototype.setCurve = function (property) {
	this.curve = property;
};
Animation.prototype.setDelay = function (property) {
	this.delay = property;
};
Animation.prototype.setDuration = function (property) {
	this.duration = property;
};
Animation.prototype.setHeight = function (property) {
	this.height = property;
};
Animation.prototype.setLeft = function (property) {
	this.left = property;
};
Animation.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
Animation.prototype.setOpacity = function (property) {
	this.opacity = property;
};
Animation.prototype.setOpaque = function (property) {
	this.opaque = property;
};
Animation.prototype.setRepeat = function (property) {
	this.repeat = property;
};
Animation.prototype.setRight = function (property) {
	this.right = property;
};
Animation.prototype.setTop = function (property) {
	this.top = property;
};
Animation.prototype.setTransform = function (property) {
	this.transform = property;
};
Animation.prototype.setTransition = function (property) {
	this.transition = property;
};
Animation.prototype.setView = function (property) {
	this.view = property;
};
Animation.prototype.setVisible = function (property) {
	this.visible = property;
};
Animation.prototype.setWidth = function (property) {
	this.width = property;
};
Animation.prototype.setZIndex = function (property) {
	this.zIndex = property;
};
module.exports = function (properties) {
	return new Animation(properties);
};