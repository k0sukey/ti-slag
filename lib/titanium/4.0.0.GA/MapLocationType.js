function MapLocationType(properties) {
	properties = properties || {};
	this.animate = properties.animate || true;
	this.latitude = properties.latitude || 0;
	this.latitudeDelta = properties.latitudeDelta || 0;
	this.longitude = properties.longitude || 0;
	this.longitudeDelta = properties.longitudeDelta || 0;
	this.regionFit = properties.regionFit || true;
	return this;
}
module.exports = function (properties) {
	return new MapLocationType(properties);
};