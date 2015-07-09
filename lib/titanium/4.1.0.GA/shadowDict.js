function shadowDict(properties) {
	properties = properties || {};
	this.blurRadius = properties.blurRadius || 0;
	this.color = properties.color || '';
	this.offset = properties.offset || {};
	return this;
}
module.exports = function (properties) {
	return new shadowDict(properties);
};