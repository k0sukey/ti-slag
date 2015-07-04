function Annotation(properties) {
	properties = properties || {};
	this.animate = properties.animate || undefined;
	this.apiName = 'Ti.Map.Annotation';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.canShowCallout = properties.canShowCallout || undefined;
	this.centerOffset = properties.centerOffset || undefined;
	this.customView = properties.customView || undefined;
	this.draggable = properties.draggable || undefined;
	this.image = properties.image || undefined;
	this.latitude = properties.latitude || undefined;
	this.leftButton = properties.leftButton || undefined;
	this.leftView = properties.leftView || undefined;
	this.longitude = properties.longitude || undefined;
	if (properties.pinImage) {
		throw new Error('Ti.Map.Annotation.pinImage was deprecated, since 1.4');
	}
	this.pincolor = properties.pincolor || undefined;
	this.rightButton = properties.rightButton || undefined;
	this.rightView = properties.rightView || undefined;
	this.subtitle = properties.subtitle || undefined;
	this.subtitleid = properties.subtitleid || undefined;
	this.title = properties.title || undefined;
	this.titleid = properties.titleid || undefined;
	return this;
}
Annotation.prototype.addEventListener = function () {
};
Annotation.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Annotation.prototype.fireEvent = function () {
};
Annotation.prototype.getAnimate = function () {
	return true;
};
Annotation.prototype.getApiName = function () {
	return '';
};
Annotation.prototype.getBubbleParent = function () {
	return true;
};
Annotation.prototype.getCanShowCallout = function () {
	return true;
};
Annotation.prototype.getCenterOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
Annotation.prototype.getCustomView = function () {
	return {};
};
Annotation.prototype.getDraggable = function () {
	return true;
};
Annotation.prototype.getImage = function () {
	return '';
};
Annotation.prototype.getLatitude = function () {
	return 0;
};
Annotation.prototype.getLeftButton = function () {
	return 0;
};
Annotation.prototype.getLeftView = function () {
	return {};
};
Annotation.prototype.getLongitude = function () {
	return 0;
};
Annotation.prototype.getPinImage = function () {
	throw new Error('Ti.Map.Annotation.getPinImage was deprecated, since 1.4');
};
Annotation.prototype.getPincolor = function () {
	return 0;
};
Annotation.prototype.getRightButton = function () {
	return 0;
};
Annotation.prototype.getRightView = function () {
	return {};
};
Annotation.prototype.getSubtitle = function () {
	return '';
};
Annotation.prototype.getSubtitleid = function () {
	return '';
};
Annotation.prototype.getTitle = function () {
	return '';
};
Annotation.prototype.getTitleid = function () {
	return '';
};
Annotation.prototype.removeEventListener = function () {
};
Annotation.prototype.setAnimate = function () {
};
Annotation.prototype.setBubbleParent = function () {
};
Annotation.prototype.setCanShowCallout = function () {
};
Annotation.prototype.setCenterOffset = function () {
};
Annotation.prototype.setCustomView = function () {
};
Annotation.prototype.setDraggable = function () {
};
Annotation.prototype.setImage = function () {
};
Annotation.prototype.setLatitude = function () {
};
Annotation.prototype.setLeftButton = function () {
};
Annotation.prototype.setLeftView = function () {
};
Annotation.prototype.setLongitude = function () {
};
Annotation.prototype.setPinImage = function () {
	throw new Error('Ti.Map.Annotation.setPinImage was deprecated, since 1.4');
};
Annotation.prototype.setPincolor = function () {
};
Annotation.prototype.setRightButton = function () {
};
Annotation.prototype.setRightView = function () {
};
Annotation.prototype.setSubtitle = function () {
};
Annotation.prototype.setSubtitleid = function () {
};
Annotation.prototype.setTitle = function () {
};
Annotation.prototype.setTitleid = function () {
};
module.exports = function (properties) {
	return new Annotation(properties);
};