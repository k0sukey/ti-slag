function Camera(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Modules.Map.Camera';
	this.altitude = properties.altitude || 0;
	this.centerCoordinate = properties.centerCoordinate || {
		x: 0,
		y: 0
	};
	this.heading = properties.heading || 0;
	this.pitch = properties.pitch || 0;
	this.eyeCoordinate = properties.eyeCoordinate || {
		x: 0,
		y: 0
	};
	return this;
}
Camera.prototype.addEventListener = function () {
};
Camera.prototype.removeEventListener = function () {
};
Camera.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Camera.prototype.fireEvent = function () {
};
Camera.prototype.getBubbleParent = function () {
	return true;
};
Camera.prototype.setBubbleParent = function () {
};
Camera.prototype.getApiName = function () {
	return '';
};
Camera.prototype.getAltitude = function () {
	return 0;
};
Camera.prototype.setAltitude = function () {
};
Camera.prototype.getCenterCoordinate = function () {
	return {
		x: 0,
		y: 0
	};
};
Camera.prototype.setCenterCoordinate = function () {
};
Camera.prototype.getHeading = function () {
	return 0;
};
Camera.prototype.setHeading = function () {
};
Camera.prototype.getPitch = function () {
	return 0;
};
Camera.prototype.setPitch = function () {
};
Camera.prototype.getEyeCoordinate = function () {
	return {
		x: 0,
		y: 0
	};
};
Camera.prototype.setEyeCoordinate = function () {
};
module.exports = function (properties) {
	return new Camera(properties);
};