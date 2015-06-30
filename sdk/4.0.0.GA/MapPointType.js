function MapPointType(properties) {
	properties = properties || {};
	this.latitude = properties.latitude || undefined;
	this.longitude = properties.longitude || undefined;
	return this;
}
module.exports = function (properties) {
	return new MapPointType(properties);
};