function ImageAsCroppedDict(properties) {
	properties = properties || {};
	this.width = properties.width || 0;
	this.height = properties.height || 0;
	this.x = properties.x || 0;
	this.y = properties.y || 0;
	return this;
}
module.exports = function (properties) {
	return new ImageAsCroppedDict(properties);
};