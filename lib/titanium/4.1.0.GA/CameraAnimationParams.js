function CameraAnimationParams(properties) {
	properties = properties || {};
	this.camera = properties.camera || {};
	this.duration = properties.duration || 0;
	this.curve = properties.curve || 0;
	return this;
}
module.exports = function (properties) {
	return new CameraAnimationParams(properties);
};