function Animation(properties) {
	properties = properties || {};
	this.anchorPoint = properties.anchorPoint || undefined;
	this.apiName = 'Ti.UI.Animation';
	this.autoreverse = properties.autoreverse || undefined;
	this.backgroundColor = properties.backgroundColor || undefined;
	this.bottom = properties.bottom || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.center = properties.center || undefined;
	this.color = properties.color || undefined;
	this.curve = properties.curve || undefined;
	this.delay = properties.delay || undefined;
	this.duration = properties.duration || undefined;
	this.height = properties.height || undefined;
	this.left = properties.left || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.opacity = properties.opacity || undefined;
	this.opaque = properties.opaque || undefined;
	this.repeat = properties.repeat || undefined;
	this.right = properties.right || undefined;
	this.top = properties.top || undefined;
	this.transform = properties.transform || undefined;
	this.transition = properties.transition || undefined;
	this.view = properties.view || undefined;
	this.visible = properties.visible || undefined;
	this.width = properties.width || undefined;
	this.zIndex = properties.zIndex || undefined;
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
Animation.prototype.getLifecycleContainer = function () {
	return {};
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
Animation.prototype.setLifecycleContainer = function () {
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