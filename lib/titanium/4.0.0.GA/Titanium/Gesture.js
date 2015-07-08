function Gesture(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Gesture';
	this.bubbleParent = properties.bubbleParent || true;
	this.landscape = properties.landscape || true;
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.orientation = properties.orientation || 0;
	this.portrait = properties.portrait || true;
	return this;
}
Gesture.prototype.addEventListener = function () {
};
Gesture.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Gesture.prototype.fireEvent = function () {
};
Gesture.prototype.getApiName = function () {
	return '';
};
Gesture.prototype.getBubbleParent = function () {
	return true;
};
Gesture.prototype.getLandscape = function () {
	return true;
};
Gesture.prototype.getLifecycleContainer = function () {
	return {};
};
Gesture.prototype.getOrientation = function () {
	return 0;
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
Gesture.prototype.removeEventListener = function () {
};
Gesture.prototype.setBubbleParent = function () {
};
Gesture.prototype.setLifecycleContainer = function () {
};
module.exports = function (properties) {
	return new Gesture(properties);
};