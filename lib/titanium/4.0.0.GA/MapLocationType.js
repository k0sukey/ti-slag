function MapLocationType(properties) {
	properties = properties || {};
	this.animate = properties.animate || undefined;
	this.latitude = properties.latitude || undefined;
	this.latitudeDelta = properties.latitudeDelta || undefined;
	this.longitude = properties.longitude || undefined;
	this.longitudeDelta = properties.longitudeDelta || undefined;
	this.regionFit = properties.regionFit || undefined;
	return this;
}
module.exports = function (properties) {
	return new MapLocationType(properties);
};