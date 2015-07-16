function Accelerometer(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.Accelerometer';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	return this;
}
Accelerometer.prototype.addEventListener = function () {
};
Accelerometer.prototype.removeEventListener = function () {
};
Accelerometer.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Accelerometer.prototype.fireEvent = function () {
};
Accelerometer.prototype.getBubbleParent = function () {
	return true;
};
Accelerometer.prototype.setBubbleParent = function () {
};
Accelerometer.prototype.getApiName = function () {
	return '';
};
Accelerometer.prototype.getLifecycleContainer = function () {
	return {};
};
Accelerometer.prototype.setLifecycleContainer = function () {
};
module.exports = function (properties) {
	return new Accelerometer(properties);
};