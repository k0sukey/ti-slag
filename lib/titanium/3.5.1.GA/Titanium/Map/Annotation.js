function Annotation(properties) {
	properties = properties || {};
	this.animate = properties.animate || undefined;
	this.apiName = 'Titanium.Map.Annotation';
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
	this.pinImage = properties.pinImage || undefined;
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
	return this.animate;
};
Annotation.prototype.getApiName = function () {
	return this.apiName;
};
Annotation.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Annotation.prototype.getCanShowCallout = function () {
	return this.canShowCallout;
};
Annotation.prototype.getCenterOffset = function () {
	return this.centerOffset;
};
Annotation.prototype.getCustomView = function () {
	return this.customView;
};
Annotation.prototype.getDraggable = function () {
	return this.draggable;
};
Annotation.prototype.getImage = function () {
	return this.image;
};
Annotation.prototype.getLatitude = function () {
	return this.latitude;
};
Annotation.prototype.getLeftButton = function () {
	return this.leftButton;
};
Annotation.prototype.getLeftView = function () {
	return this.leftView;
};
Annotation.prototype.getLongitude = function () {
	return this.longitude;
};
Annotation.prototype.getPinImage = function () {
	return this.pinImage;
};
Annotation.prototype.getPincolor = function () {
	return this.pincolor;
};
Annotation.prototype.getRightButton = function () {
	return this.rightButton;
};
Annotation.prototype.getRightView = function () {
	return this.rightView;
};
Annotation.prototype.getSubtitle = function () {
	return this.subtitle;
};
Annotation.prototype.getSubtitleid = function () {
	return this.subtitleid;
};
Annotation.prototype.getTitle = function () {
	return this.title;
};
Annotation.prototype.getTitleid = function () {
	return this.titleid;
};
Annotation.prototype.removeEventListener = function () {
};
Annotation.prototype.setAnimate = function (property) {
	this.animate = property;
};
Annotation.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Annotation.prototype.setCanShowCallout = function (property) {
	this.canShowCallout = property;
};
Annotation.prototype.setCenterOffset = function (property) {
	this.centerOffset = property;
};
Annotation.prototype.setCustomView = function (property) {
	this.customView = property;
};
Annotation.prototype.setDraggable = function (property) {
	this.draggable = property;
};
Annotation.prototype.setImage = function (property) {
	this.image = property;
};
Annotation.prototype.setLatitude = function (property) {
	this.latitude = property;
};
Annotation.prototype.setLeftButton = function (property) {
	this.leftButton = property;
};
Annotation.prototype.setLeftView = function (property) {
	this.leftView = property;
};
Annotation.prototype.setLongitude = function (property) {
	this.longitude = property;
};
Annotation.prototype.setPinImage = function (property) {
	this.pinImage = property;
};
Annotation.prototype.setPincolor = function (property) {
	this.pincolor = property;
};
Annotation.prototype.setRightButton = function (property) {
	this.rightButton = property;
};
Annotation.prototype.setRightView = function (property) {
	this.rightView = property;
};
Annotation.prototype.setSubtitle = function (property) {
	this.subtitle = property;
};
Annotation.prototype.setSubtitleid = function (property) {
	this.subtitleid = property;
};
Annotation.prototype.setTitle = function (property) {
	this.title = property;
};
Annotation.prototype.setTitleid = function (property) {
	this.titleid = property;
};
module.exports = function (properties) {
	return new Annotation(properties);
};