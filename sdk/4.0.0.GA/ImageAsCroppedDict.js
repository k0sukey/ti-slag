function ImageAsCroppedDict(properties) {
	properties = properties || {};

	this.height = properties.height || undefined;
	this.width = properties.width || undefined;
	this.x = properties.x || undefined;
	this.y = properties.y || undefined;

	return this;
}



module.exports = function(properties){ return new ImageAsCroppedDict(properties); };