function MapRegionTypev2(properties) {
	properties = properties || {};
	this.bearing = properties.bearing || 0;
	this.longitude = properties.longitude || 0;
	this.latitude = properties.latitude || 0;
	this.longitudeDelta = properties.longitudeDelta || 0;
	this.latitudeDelta = properties.latitudeDelta || 0;
	this.tilt = properties.tilt || 0;
	this.zoom = properties.zoom || 0;
	return this;
}
module.exports = function (properties) {
	return new MapRegionTypev2(properties);
};