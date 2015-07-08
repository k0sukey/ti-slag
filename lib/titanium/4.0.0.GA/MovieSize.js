function MovieSize(properties) {
	properties = properties || {};
	this.height = properties.height || 0;
	this.width = properties.width || 0;
	return this;
}
module.exports = function (properties) {
	return new MovieSize(properties);
};