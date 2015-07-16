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
	return true;
};
Gesture.prototype.getPortrait = function () {
	return true;
};
Gesture.prototype.isLandscape = function () {
	return true;
};
Gesture.prototype.isPortrait = function () {
	return true;
};
Gesture.prototype.isFaceUp = function () {
	return true;
};
Gesture.prototype.isFaceDown = function () {
	return true;
};
Gesture.prototype.getBubbleParent = function () {
	return true;
};
Gesture.prototype.setBubbleParent = function () {
};
Gesture.prototype.getApiName = function () {
	return '';
};
Gesture.prototype.getLifecycleContainer = function () {
	return {};
};
Gesture.prototype.setLifecycleContainer = function () {
};
Gesture.prototype.getOrientation = function () {
	return 0;
};
module.exports = function (properties) {
	return new Gesture(properties);
};