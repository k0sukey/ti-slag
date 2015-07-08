function MapPointType(properties) {
	properties = properties || {};
	this.latitude = properties.latitude || 0;
	this.longitude = properties.longitude || 0;
	return this;
}
module.exports = function (properties) {
	return new MapPointType(properties);
};