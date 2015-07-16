function Annotation(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Modules.Map.Annotation';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.canShowCallout = properties.canShowCallout || true;
	this.centerOffset = properties.centerOffset || {
		x: 0,
		y: 0
	};
	this.customView = properties.customView || {};
	this.draggable = properties.draggable || true;
	this.image = properties.image || '';
	this.latitude = properties.latitude || 0;
	this.longitude = properties.longitude || 0;
	this.pincolor = properties.pincolor || 0;
	this.subtitle = properties.subtitle || '';
	this.subtitleid = properties.subtitleid || '';
	this.title = properties.title || '';
	this.titleid = properties.titleid || '';
	this.leftButton = properties.leftButton || '';
	this.leftView = properties.leftView || {};
	this.rightButton = properties.rightButton || '';
	this.rightView = properties.rightView || {};
	this.showInfoWindow = properties.showInfoWindow || true;
	return this;
}
Annotation.prototype.addEventListener = function () {
};
Annotation.prototype.removeEventListener = function () {
};
Annotation.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Annotation.prototype.fireEvent = function () {
};
Annotation.prototype.getBubbleParent = function () {
	return true;
};
Annotation.prototype.setBubbleParent = function () {
};
Annotation.prototype.getApiName = function () {
	return '';
};
Annotation.prototype.getLifecycleContainer = function () {
	return {};
};
Annotation.prototype.setLifecycleContainer = function () {
};
Annotation.prototype.getCanShowCallout = function () {
	return true;
};
Annotation.prototype.setCanShowCallout = function () {
};
Annotation.prototype.getCenterOffset = function () {
	return {
		x: 0,
		y: 0
	};
};
Annotation.prototype.setCenterOffset = function () {
};
Annotation.prototype.getCustomView = function () {
	return {};
};
Annotation.prototype.setCustomView = function () {
};
Annotation.prototype.getDraggable = function () {
	return true;
};
Annotation.prototype.setDraggable = function () {
};
Annotation.prototype.getImage = function () {
	return '';
};
Annotation.prototype.setImage = function () {
};
Annotation.prototype.getLatitude = function () {
	return 0;
};
Annotation.prototype.setLatitude = function () {
};
Annotation.prototype.getLongitude = function () {
	return 0;
};
Annotation.prototype.setLongitude = function () {
};
Annotation.prototype.getPincolor = function () {
	return 0;
};
Annotation.prototype.setPincolor = function () {
};
Annotation.prototype.getSubtitle = function () {
	return '';
};
Annotation.prototype.setSubtitle = function () {
};
Annotation.prototype.getSubtitleid = function () {
	return '';
};
Annotation.prototype.setSubtitleid = function () {
};
Annotation.prototype.getTitle = function () {
	return '';
};
Annotation.prototype.setTitle = function () {
};
Annotation.prototype.getTitleid = function () {
	return '';
};
Annotation.prototype.setTitleid = function () {
};
Annotation.prototype.getLeftButton = function () {
	return '';
};
Annotation.prototype.setLeftButton = function () {
};
Annotation.prototype.getLeftView = function () {
	return {};
};
Annotation.prototype.setLeftView = function () {
};
Annotation.prototype.getRightButton = function () {
	return '';
};
Annotation.prototype.setRightButton = function () {
};
Annotation.prototype.getRightView = function () {
	return {};
};
Annotation.prototype.setRightView = function () {
};
Annotation.prototype.getShowInfoWindow = function () {
	return true;
};
Annotation.prototype.setShowInfoWindow = function () {
};
module.exports = function (properties) {
	return new Annotation(properties);
};