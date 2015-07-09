function MapPointType(properties) {
	properties = properties || {};
	this.longitude = properties.longitude || 0;
	this.latitude = properties.latitude || 0;
	return this;
}
module.exports = function (properties) {
	return new MapPointType(properties);
};