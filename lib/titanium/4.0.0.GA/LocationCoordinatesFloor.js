function LocationCoordinatesFloor(properties) {
	properties = properties || {};
	this.level = properties.level || 0;
	return this;
}
module.exports = function (properties) {
	return new LocationCoordinatesFloor(properties);
};