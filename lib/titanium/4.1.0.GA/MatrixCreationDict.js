function MatrixCreationDict(properties) {
	properties = properties || {};
	this.scale = properties.scale || 0;
	this.rotate = properties.rotate || 0;
	this.anchorPoint = properties.anchorPoint || {};
	return this;
}
module.exports = function (properties) {
	return new MatrixCreationDict(properties);
};