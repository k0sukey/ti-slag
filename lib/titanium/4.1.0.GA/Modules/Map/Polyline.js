function Polyline(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Modules.Map.Polyline';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.points = properties.points || {
		x: 0,
		y: 0
	};
	this.strokeColor = properties.strokeColor || '';
	this.strokeWidth = properties.strokeWidth || 0;
	this.zIndex = properties.zIndex || 0;
	return this;
}
Polyline.prototype.addEventListener = function () {
};
Polyline.prototype.removeEventListener = function () {
};
Polyline.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Polyline.prototype.fireEvent = function () {
};
Polyline.prototype.getBubbleParent = function () {
	return true;
};
Polyline.prototype.setBubbleParent = function () {
};
Polyline.prototype.getApiName = function () {
	return '';
};
Polyline.prototype.getLifecycleContainer = function () {
	return {};
};
Polyline.prototype.setLifecycleContainer = function () {
};
Polyline.prototype.getPoints = function () {
	return {
		x: 0,
		y: 0
	};
};
Polyline.prototype.setPoints = function () {
};
Polyline.prototype.getStrokeColor = function () {
	return '';
};
Polyline.prototype.setStrokeColor = function () {
};
Polyline.prototype.getStrokeWidth = function () {
	return 0;
};
Polyline.prototype.setStrokeWidth = function () {
};
Polyline.prototype.getZIndex = function () {
	return 0;
};
Polyline.prototype.setZIndex = function () {
};
module.exports = function (properties) {
	return new Polyline(properties);
};