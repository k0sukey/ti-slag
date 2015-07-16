function Circle(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Modules.Map.Circle';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.center = properties.center || {
		x: 0,
		y: 0
	};
	this.radius = properties.radius || 0;
	this.fillColor = properties.fillColor || '';
	this.strokeColor = properties.strokeColor || '';
	this.strokeWidth = properties.strokeWidth || 0;
	this.zIndex = properties.zIndex || 0;
	return this;
}
Circle.prototype.addEventListener = function () {
};
Circle.prototype.removeEventListener = function () {
};
Circle.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Circle.prototype.fireEvent = function () {
};
Circle.prototype.getBubbleParent = function () {
	return true;
};
Circle.prototype.setBubbleParent = function () {
};
Circle.prototype.getApiName = function () {
	return '';
};
Circle.prototype.getLifecycleContainer = function () {
	return {};
};
Circle.prototype.setLifecycleContainer = function () {
};
Circle.prototype.getCenter = function () {
	return {
		x: 0,
		y: 0
	};
};
Circle.prototype.setCenter = function () {
};
Circle.prototype.getRadius = function () {
	return 0;
};
Circle.prototype.setRadius = function () {
};
Circle.prototype.getFillColor = function () {
	return '';
};
Circle.prototype.setFillColor = function () {
};
Circle.prototype.getStrokeColor = function () {
	return '';
};
Circle.prototype.setStrokeColor = function () {
};
Circle.prototype.getStrokeWidth = function () {
	return 0;
};
Circle.prototype.setStrokeWidth = function () {
};
Circle.prototype.getZIndex = function () {
	return 0;
};
Circle.prototype.setZIndex = function () {
};
module.exports = function (properties) {
	return new Circle(properties);
};