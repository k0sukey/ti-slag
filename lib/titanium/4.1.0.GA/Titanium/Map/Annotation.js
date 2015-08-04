var crypto = require('crypto');
function Annotation(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'animate',
			'canShowCallout',
			'centerOffset',
			'customView',
			'draggable',
			'image',
			'latitude',
			'longitude',
			'leftButton',
			'leftView',
			'pinImage',
			'pincolor',
			'rightButton',
			'rightView',
			'subtitle',
			'subtitleid',
			'title',
			'titleid',
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
		throw new Error('Ti.Map.Annotation.apiName is read only property');
	}
	this.apiName = 'Ti.Map.Annotation';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.animate = __SLAG__properties.animate || true;
	this.canShowCallout = __SLAG__properties.canShowCallout || true;
	this.centerOffset = __SLAG__properties.centerOffset || {
		x: 0,
		y: 0
	};
	this.customView = __SLAG__properties.customView || {};
	this.draggable = __SLAG__properties.draggable || true;
	this.image = __SLAG__properties.image || '';
	this.latitude = __SLAG__properties.latitude || 0;
	this.longitude = __SLAG__properties.longitude || 0;
	this.leftButton = __SLAG__properties.leftButton || 0;
	this.leftView = __SLAG__properties.leftView || {};
	if (__SLAG__properties.pinImage) {
		throw new Error('Ti.Map.Annotation.pinImage was deprecated, since 1.4');
	}
	this.pincolor = __SLAG__properties.pincolor || 0;
	this.rightButton = __SLAG__properties.rightButton || 0;
	this.rightView = __SLAG__properties.rightView || {};
	this.subtitle = __SLAG__properties.subtitle || '';
	this.subtitleid = __SLAG__properties.subtitleid || '';
	this.title = __SLAG__properties.title || '';
	this.titleid = __SLAG__properties.titleid || '';
	this.id = __SLAG__properties.id || '';
	return this;
}
Annotation.prototype.addEventListener = function () {
};
Annotation.prototype.removeEventListener = function () {
};
Annotation.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Annotation.prototype.fireEvent = function () {
};
Annotation.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Annotation.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Annotation.prototype.getApiName = function () {
	return this.apiName;
};
Annotation.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Annotation.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
Annotation.prototype.getAnimate = function () {
	return this.animate;
};
Annotation.prototype.setAnimate = function (property) {
	this.animate = property;
};
Annotation.prototype.getCanShowCallout = function () {
	return this.canShowCallout;
};
Annotation.prototype.setCanShowCallout = function (property) {
	this.canShowCallout = property;
};
Annotation.prototype.getCenterOffset = function () {
	return this.centerOffset;
};
Annotation.prototype.setCenterOffset = function (property) {
	this.centerOffset = property;
};
Annotation.prototype.getCustomView = function () {
	return this.customView;
};
Annotation.prototype.setCustomView = function (property) {
	this.customView = property;
};
Annotation.prototype.getDraggable = function () {
	return this.draggable;
};
Annotation.prototype.setDraggable = function (property) {
	this.draggable = property;
};
Annotation.prototype.getImage = function () {
	return this.image;
};
Annotation.prototype.setImage = function (property) {
	this.image = property;
};
Annotation.prototype.getLatitude = function () {
	return this.latitude;
};
Annotation.prototype.setLatitude = function (property) {
	this.latitude = property;
};
Annotation.prototype.getLongitude = function () {
	return this.longitude;
};
Annotation.prototype.setLongitude = function (property) {
	this.longitude = property;
};
Annotation.prototype.getLeftButton = function () {
	return this.leftButton;
};
Annotation.prototype.setLeftButton = function (property) {
	this.leftButton = property;
};
Annotation.prototype.getLeftView = function () {
	return this.leftView;
};
Annotation.prototype.setLeftView = function (property) {
	this.leftView = property;
};
Annotation.prototype.getPinImage = function () {
	throw new Error('Ti.Map.Annotation.getPinImage was deprecated, since 1.4');
};
Annotation.prototype.setPinImage = function () {
	throw new Error('Ti.Map.Annotation.setPinImage was deprecated, since 1.4');
};
Annotation.prototype.getPincolor = function () {
	return this.pincolor;
};
Annotation.prototype.setPincolor = function (property) {
	this.pincolor = property;
};
Annotation.prototype.getRightButton = function () {
	return this.rightButton;
};
Annotation.prototype.setRightButton = function (property) {
	this.rightButton = property;
};
Annotation.prototype.getRightView = function () {
	return this.rightView;
};
Annotation.prototype.setRightView = function (property) {
	this.rightView = property;
};
Annotation.prototype.getSubtitle = function () {
	return this.subtitle;
};
Annotation.prototype.setSubtitle = function (property) {
	this.subtitle = property;
};
Annotation.prototype.getSubtitleid = function () {
	return this.subtitleid;
};
Annotation.prototype.setSubtitleid = function (property) {
	this.subtitleid = property;
};
Annotation.prototype.getTitle = function () {
	return this.title;
};
Annotation.prototype.setTitle = function (property) {
	this.title = property;
};
Annotation.prototype.getTitleid = function () {
	return this.titleid;
};
Annotation.prototype.setTitleid = function (property) {
	this.titleid = property;
};
module.exports = function (properties) {
	return new Annotation(properties);
};