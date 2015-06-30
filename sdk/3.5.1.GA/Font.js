function Font(properties) {
	properties = properties || {};
	this.fontFamily = properties.fontFamily || undefined;
	this.fontSize = properties.fontSize || undefined;
	this.fontStyle = properties.fontStyle || undefined;
	this.fontWeight = properties.fontWeight || undefined;
	this.textStyle = properties.textStyle || undefined;
	return this;
}
module.exports = function (properties) {
	return new Font(properties);
};