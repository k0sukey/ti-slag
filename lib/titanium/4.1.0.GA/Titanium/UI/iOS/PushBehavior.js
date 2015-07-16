function PushBehavior(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.iOS.PushBehavior';
	this.active = properties.active || true;
	this.angle = properties.angle || 0;
	this.items = properties.items || [];
	this.magnitude = properties.magnitude || 0;
	this.pushDirection = properties.pushDirection || {
		x: 0,
		y: 0
	};
	this.pushMode = properties.pushMode || 0;
	return this;
}
PushBehavior.prototype.addEventListener = function () {
};
PushBehavior.prototype.removeEventListener = function () {
};
PushBehavior.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
PushBehavior.prototype.fireEvent = function () {
};
PushBehavior.prototype.addItem = function () {
};
PushBehavior.prototype.removeItem = function () {
};
PushBehavior.prototype.getBubbleParent = function () {
	return true;
};
PushBehavior.prototype.setBubbleParent = function () {
};
PushBehavior.prototype.getApiName = function () {
	return '';
};
PushBehavior.prototype.getActive = function () {
	return true;
};
PushBehavior.prototype.setActive = function () {
};
PushBehavior.prototype.getAngle = function () {
	return 0;
};
PushBehavior.prototype.setAngle = function () {
};
PushBehavior.prototype.getItems = function () {
	return [];
};
PushBehavior.prototype.getMagnitude = function () {
	return 0;
};
PushBehavior.prototype.setMagnitude = function () {
};
PushBehavior.prototype.getPushDirection = function () {
	return {
		x: 0,
		y: 0
	};
};
PushBehavior.prototype.setPushDirection = function () {
};
PushBehavior.prototype.getPushMode = function () {
	return 0;
};
PushBehavior.prototype.setPushMode = function () {
};
module.exports = function (properties) {
	return new PushBehavior(properties);
};