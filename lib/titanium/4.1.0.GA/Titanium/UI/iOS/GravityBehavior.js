function GravityBehavior(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.iOS.GravityBehavior';
	this.angle = properties.angle || 0;
	this.gravityDirection = properties.gravityDirection || {
		x: 0,
		y: 0
	};
	this.items = properties.items || [];
	this.magnitude = properties.magnitude || 0;
	return this;
}
GravityBehavior.prototype.addEventListener = function () {
};
GravityBehavior.prototype.removeEventListener = function () {
};
GravityBehavior.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
GravityBehavior.prototype.fireEvent = function () {
};
GravityBehavior.prototype.addItem = function () {
};
GravityBehavior.prototype.removeItem = function () {
};
GravityBehavior.prototype.getBubbleParent = function () {
	return true;
};
GravityBehavior.prototype.setBubbleParent = function () {
};
GravityBehavior.prototype.getApiName = function () {
	return '';
};
GravityBehavior.prototype.getAngle = function () {
	return 0;
};
GravityBehavior.prototype.setAngle = function () {
};
GravityBehavior.prototype.getGravityDirection = function () {
	return {
		x: 0,
		y: 0
	};
};
GravityBehavior.prototype.setGravityDirection = function () {
};
GravityBehavior.prototype.getItems = function () {
	return [];
};
GravityBehavior.prototype.getMagnitude = function () {
	return 0;
};
GravityBehavior.prototype.setMagnitude = function () {
};
module.exports = function (properties) {
	return new GravityBehavior(properties);
};