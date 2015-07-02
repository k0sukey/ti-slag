function Accelerometer(properties) {
	properties = properties || {};
	this.apiName = 'Titanium.Accelerometer';
	this.bubbleParent = properties.bubbleParent || undefined;
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
	return this.apiName;
};
Accelerometer.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Accelerometer.prototype.removeEventListener = function () {
};
Accelerometer.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
module.exports = function (properties) {
	return new Accelerometer(properties);
};