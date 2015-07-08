function Accelerometer(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Accelerometer';
	this.bubbleParent = properties.bubbleParent || true;
	this.lifecycleContainer = properties.lifecycleContainer || {};
	return this;
}
Accelerometer.prototype.addEventListener = function () {
};
Accelerometer.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Accelerometer.prototype.fireEvent = function () {
};
Accelerometer.prototype.getApiName = function () {
	return '';
};
Accelerometer.prototype.getBubbleParent = function () {
	return true;
};
Accelerometer.prototype.getLifecycleContainer = function () {
	return {};
};
Accelerometer.prototype.removeEventListener = function () {
};
Accelerometer.prototype.setBubbleParent = function () {
};
Accelerometer.prototype.setLifecycleContainer = function () {
};
module.exports = function (properties) {
	return new Accelerometer(properties);
};