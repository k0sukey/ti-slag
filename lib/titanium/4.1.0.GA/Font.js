function Font(properties) {
	properties = properties || {};
	this.fontFamily = properties.fontFamily || '';
	this.fontSize = properties.fontSize || 0;
	this.fontWeight = properties.fontWeight || '';
	this.fontStyle = properties.fontStyle || '';
	this.textStyle = properties.textStyle || '';
	return this;
}
module.exports = function (properties) {
	return new Font(properties);
};