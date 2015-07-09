function LocationCoordinates(properties) {
	properties = properties || {};
	this.latitude = properties.latitude || 0;
	this.longitude = properties.longitude || 0;
	this.altitude = properties.altitude || 0;
	this.accuracy = properties.accuracy || 0;
	this.altitudeAccuracy = properties.altitudeAccuracy || 0;
	this.heading = properties.heading || 0;
	this.speed = properties.speed || 0;
	this.timestamp = properties.timestamp || 0;
	this.floor = properties.floor || {};
	return this;
}
module.exports = function (properties) {
	return new LocationCoordinates(properties);
};