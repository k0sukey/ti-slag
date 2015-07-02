function CoverFlowImageType(properties) {
	properties = properties || {};
	this.height = properties.height || undefined;
	this.image = properties.image || undefined;
	this.width = properties.width || undefined;
	return this;
}
module.exports = function (properties) {
	return new CoverFlowImageType(properties);
};