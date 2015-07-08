function CoverFlowImageType(properties) {
	properties = properties || {};
	this.height = properties.height || 0;
	this.image = properties.image || '';
	this.width = properties.width || 0;
	return this;
}
module.exports = function (properties) {
	return new CoverFlowImageType(properties);
};