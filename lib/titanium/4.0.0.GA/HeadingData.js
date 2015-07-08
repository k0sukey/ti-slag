function HeadingData(properties) {
	properties = properties || {};
	this.accuracy = properties.accuracy || 0;
	this.magneticHeading = properties.magneticHeading || 0;
	this.timestamp = properties.timestamp || 0;
	this.trueHeading = properties.trueHeading || 0;
	this.x = properties.x || 0;
	this.y = properties.y || 0;
	this.z = properties.z || 0;
	return this;
}
module.exports = function (properties) {
	return new HeadingData(properties);
};