function LocationCoordinatesFloor(properties) {
	properties = properties || {};
	this.level = properties.level || undefined;
	return this;
}
module.exports = function (properties) {
	return new LocationCoordinatesFloor(properties);
};