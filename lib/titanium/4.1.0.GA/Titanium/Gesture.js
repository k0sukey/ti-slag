function Gesture(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.Gesture';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.orientation = properties.orientation || 0;
	this.landscape = properties.landscape || true;
	this.portrait = properties.portrait || true;
	return this;
}
Gesture.prototype.addEventListener = function () {
};
Gesture.prototype.removeEventListener = function () {
};
Gesture.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Gesture.prototype.fireEvent = function () {
};
Gesture.prototype.getLandscape = function () {
	return {};
};
Gesture.prototype.getPortrait = function () {
	return {};
};
Gesture.prototype.isLandscape = function () {
	return {};
};
Gesture.prototype.isPortrait = function () {
	return {};
};
Gesture.prototype.isFaceUp = function () {
	return {};
};
Gesture.prototype.isFaceDown = function () {
	return {};
};
Gesture.prototype.getBubbleParent = function () {
	return {};
};
Gesture.prototype.setBubbleParent = function () {
};
Gesture.prototype.getApiName = function () {
	return {};
};
Gesture.prototype.getLifecycleContainer = function () {
	return {};
};
Gesture.prototype.setLifecycleContainer = function () {
};
Gesture.prototype.getOrientation = function () {
	return {};
};
module.exports = function (properties) {
	return new Gesture(properties);
};