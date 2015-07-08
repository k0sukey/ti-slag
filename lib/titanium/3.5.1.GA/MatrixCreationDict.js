function MatrixCreationDict(properties) {
	properties = properties || {};
	this.anchorPoint = properties.anchorPoint || {};
	this.rotate = properties.rotate || 0;
	this.scale = properties.scale || 0;
	return this;
}
module.exports = function (properties) {
	return new MatrixCreationDict(properties);
};