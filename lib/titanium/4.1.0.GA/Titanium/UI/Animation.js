function Animation(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.Animation';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.anchorPoint = properties.anchorPoint || {
		x: 0,
		y: 0
	};
	this.autoreverse = properties.autoreverse || true;
	this.backgroundColor = properties.backgroundColor || '';
	this.bottom = properties.bottom || 0;
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
Animation.prototype.removeEventListener = function () {
};
Animation.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Animation.prototype.fireEvent = function () {
};
Animation.prototype.getBubbleParent = function () {
	return true;
};
Animation.prototype.setBubbleParent = function () {
};
Animation.prototype.getApiName = function () {
	return '';
};
Animation.prototype.getLifecycleContainer = function () {
	return {};
};
Animation.prototype.setLifecycleContainer = function () {
};
Animation.prototype.getAnchorPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
Animation.prototype.setAnchorPoint = function () {
};
Animation.prototype.getAutoreverse = function () {
	return true;
};
Animation.prototype.setAutoreverse = function () {
};
Animation.prototype.getBackgroundColor = function () {
	return '';
};
Animation.prototype.setBackgroundColor = function () {
};
Animation.prototype.getBottom = function () {
	return 0;
};
Animation.prototype.setBottom = function () {
};
Animation.prototype.getCenter = function () {
	return {};
};
Animation.prototype.setCenter = function () {
};
Animation.prototype.getColor = function () {
	return '';
};
Animation.prototype.setColor = function () {
};
Animation.prototype.getCurve = function () {
	return 0;
};
Animation.prototype.setCurve = function () {
};
Animation.prototype.getDelay = function () {
	return 0;
};
Animation.prototype.setDelay = function () {
};
Animation.prototype.getDuration = function () {
	return 0;
};
Animation.prototype.setDuration = function () {
};
Animation.prototype.getHeight = function () {
	return 0;
};
Animation.prototype.setHeight = function () {
};
Animation.prototype.getLeft = function () {
	return 0;
};
Animation.prototype.setLeft = function () {
};
Animation.prototype.getOpacity = function () {
	return 0;
};
Animation.prototype.setOpacity = function () {
};
Animation.prototype.getOpaque = function () {
	return true;
};
Animation.prototype.setOpaque = function () {
};
Animation.prototype.getRepeat = function () {
	return 0;
};
Animation.prototype.setRepeat = function () {
};
Animation.prototype.getRight = function () {
	return 0;
};
Animation.prototype.setRight = function () {
};
Animation.prototype.getTop = function () {
	return 0;
};
Animation.prototype.setTop = function () {
};
Animation.prototype.getTransform = function () {
	return {};
};
Animation.prototype.setTransform = function () {
};
Animation.prototype.getTransition = function () {
	return 0;
};
Animation.prototype.setTransition = function () {
};
Animation.prototype.getView = function () {
	return {};
};
Animation.prototype.setView = function () {
};
Animation.prototype.getVisible = function () {
	return true;
};
Animation.prototype.setVisible = function () {
};
Animation.prototype.getWidth = function () {
	return 0;
};
Animation.prototype.setWidth = function () {
};
Animation.prototype.getZIndex = function () {
	return 0;
};
Animation.prototype.setZIndex = function () {
};
module.exports = function (properties) {
	return new Animation(properties);
};