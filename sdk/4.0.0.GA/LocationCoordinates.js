function LocationCoordinates(properties) {
	properties = properties || {};

	this.accuracy = properties.accuracy || undefined;
	this.altitude = properties.altitude || undefined;
	this.altitudeAccuracy = properties.altitudeAccuracy || undefined;
	this.floor = properties.floor || undefined;
	this.heading = properties.heading || undefined;
	this.latitude = properties.latitude || undefined;
	this.longitude = properties.longitude || undefined;
	this.speed = properties.speed || undefined;
	this.timestamp = properties.timestamp || undefined;

	return this;
}



module.exports = function(properties){ return new LocationCoordinates(properties); };