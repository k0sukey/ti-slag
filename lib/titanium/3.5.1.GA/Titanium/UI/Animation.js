function Animation(properties) {
	properties = properties || {};
	this.anchorPoint = properties.anchorPoint || {
		x: 0,
		y: 0
	};
	this.apiName = 'Ti.UI.Animation';
	this.autoreverse = properties.autoreverse || true;
	this.backgroundColor = properties.backgroundColor || '';
	this.bottom = properties.bottom || 0;
	this.bubbleParent = properties.bubbleParent || true;
	this.center = properties.center || {};
	this.color = properties.color || '';
	this.curve = properties.curve || 0;
	this.delay = properties.delay || 0;
	this.duration = properties.duration || 0;
	this.height = properties.height || 0;
	this.left = properties.left || 0;
	this.opacity = properties.opacity || 0;
	this.opaque = properties.opaque || true;
	this.repeat = properties.repeat || 0;
	this.right = properties.right || 0;
	this.top = properties.top || 0;
	this.transform = properties.transform || {};
	this.transition = properties.transition || 0;
	this.view = properties.view || {};
	this.visible = properties.visible || true;
	this.width = properties.width || 0;
	this.zIndex = properties.zIndex || 0;
	return this;
}
Animation.prototype.addEventListener = function () {
};
Animation.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Animation.prototype.fireEvent = function () {
};
Animation.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
Animation.prototype.getApiName = function () {
	return '';
};
Animation.prototype.getAutoreverse = function () {
	return true;
};
Animation.prototype.getBackgroundColor = function () {
	return '';
};
Animation.prototype.getBottom = function () {
	return 0;
};
Animation.prototype.getBubbleParent = function () {
	return true;
};
Animation.prototype.getCenter = function () {
	return {};
};
Animation.prototype.getColor = function () {
	return '';
};
Animation.prototype.getCurve = function () {
	return 0;
};
Animation.prototype.getDelay = function () {
	return 0;
};
Animation.prototype.getDuration = function () {
	return 0;
};
Animation.prototype.getHeight = function () {
	return 0;
};
Animation.prototype.getLeft = function () {
	return 0;
};
Animation.prototype.getOpacity = function () {
	return 0;
};
Animation.prototype.getOpaque = function () {
	return true;
};
Animation.prototype.getRepeat = function () {
	return 0;
};
Animation.prototype.getRight = function () {
	return 0;
};
Animation.prototype.getTop = function () {
	return 0;
};
Animation.prototype.getTransform = function () {
	return {};
};
Animation.prototype.getTransition = function () {
	return 0;
};
Animation.prototype.getView = function () {
	return {};
};
Animation.prototype.getVisible = function () {
	return true;
};
Animation.prototype.getWidth = function () {
	return 0;
};
Animation.prototype.getZIndex = function () {
	return 0;
};
Animation.prototype.removeEventListener = function () {
};
Animation.prototype.setAnchorPoint = function () {
};
Animation.prototype.setAutoreverse = function () {
};
Animation.prototype.setBackgroundColor = function () {
};
Animation.prototype.setBottom = function () {
};
Animation.prototype.setBubbleParent = function () {
};
Animation.prototype.setCenter = function () {
};
Animation.prototype.setColor = function () {
};
Animation.prototype.setCurve = function () {
};
Animation.prototype.setDelay = function () {
};
Animation.prototype.setDuration = function () {
};
Animation.prototype.setHeight = function () {
};
Animation.prototype.setLeft = function () {
};
Animation.prototype.setOpacity = function () {
};
Animation.prototype.setOpaque = function () {
};
Animation.prototype.setRepeat = function () {
};
Animation.prototype.setRight = function () {
};
Animation.prototype.setTop = function () {
};
Animation.prototype.setTransform = function () {
};
Animation.prototype.setTransition = function () {
};
Animation.prototype.setView = function () {
};
Animation.prototype.setVisible = function () {
};
Animation.prototype.setWidth = function () {
};
Animation.prototype.setZIndex = function () {
};
module.exports = function (properties) {
	return new Animation(properties);
};