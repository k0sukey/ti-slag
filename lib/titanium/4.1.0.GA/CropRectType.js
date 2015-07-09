function CropRectType(properties) {
	properties = properties || {};
	this.x = properties.x || 0;
	this.y = properties.y || 0;
	this.width = properties.width || 0;
	this.height = properties.height || 0;
	return this;
}
module.exports = function (properties) {
	return new CropRectType(properties);
};