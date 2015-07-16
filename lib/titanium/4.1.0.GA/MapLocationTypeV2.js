function MapLocationTypeV2(properties) {
	properties = properties || {};
	this.longitude = properties.longitude || 0;
	this.latitude = properties.latitude || 0;
	this.longitudeDelta = properties.longitudeDelta || 0;
	this.latitudeDelta = properties.latitudeDelta || 0;
	this.animate = properties.animate || true;
	return this;
}
module.exports = function (properties) {
	return new MapLocationTypeV2(properties);
};