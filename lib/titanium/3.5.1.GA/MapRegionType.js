function MapRegionType(properties) {
	properties = properties || {};
	this.latitude = properties.latitude || undefined;
	this.latitudeDelta = properties.latitudeDelta || undefined;
	this.longitude = properties.longitude || undefined;
	this.longitudeDelta = properties.longitudeDelta || undefined;
	return this;
}
module.exports = function (properties) {
	return new MapRegionType(properties);
};