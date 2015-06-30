function MatrixCreationDict(properties) {
	properties = properties || {};

	this.anchorPoint = properties.anchorPoint || undefined;
	this.rotate = properties.rotate || undefined;
	this.scale = properties.scale || undefined;

	return this;
}



module.exports = function(properties){ return new MatrixCreationDict(properties); };