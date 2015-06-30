function HeadingData(properties) {
	properties = properties || {};

	this.accuracy = properties.accuracy || undefined;
	this.magneticHeading = properties.magneticHeading || undefined;
	this.timestamp = properties.timestamp || undefined;
	this.trueHeading = properties.trueHeading || undefined;
	this.x = properties.x || undefined;
	this.y = properties.y || undefined;
	this.z = properties.z || undefined;

	return this;
}



module.exports = function(properties){ return new HeadingData(properties); };