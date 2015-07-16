function Polygon(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Modules.Map.Polygon';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.points = properties.points || {
		x: 0,
		y: 0
	};
	this.holes = properties.holes || {
		x: 0,
		y: 0
	};
	this.fillColor = properties.fillColor || '';
	this.strokeColor = properties.strokeColor || '';
	this.strokeWidth = properties.strokeWidth || 0;
	this.zIndex = properties.zIndex || 0;
	return this;
}
Polygon.prototype.addEventListener = function () {
};
Polygon.prototype.removeEventListener = function () {
};
Polygon.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Polygon.prototype.fireEvent = function () {
};
Polygon.prototype.getBubbleParent = function () {
	return true;
};
Polygon.prototype.setBubbleParent = function () {
};
Polygon.prototype.getApiName = function () {
	return '';
};
Polygon.prototype.getLifecycleContainer = function () {
	return {};
};
Polygon.prototype.setLifecycleContainer = function () {
};
Polygon.prototype.getPoints = function () {
	return {
		x: 0,
		y: 0
	};
};
Polygon.prototype.setPoints = function () {
};
Polygon.prototype.getHoles = function () {
	return {
		x: 0,
		y: 0
	};
};
Polygon.prototype.setHoles = function () {
};
Polygon.prototype.getFillColor = function () {
	return '';
};
Polygon.prototype.setFillColor = function () {
};
Polygon.prototype.getStrokeColor = function () {
	return '';
};
Polygon.prototype.setStrokeColor = function () {
};
Polygon.prototype.getStrokeWidth = function () {
	return 0;
};
Polygon.prototype.setStrokeWidth = function () {
};
Polygon.prototype.getZIndex = function () {
	return 0;
};
Polygon.prototype.setZIndex = function () {
};
module.exports = function (properties) {
	return new Polygon(properties);
};