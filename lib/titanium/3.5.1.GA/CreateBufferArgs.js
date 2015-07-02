function CreateBufferArgs(properties) {
	properties = properties || {};
	this.byteOrder = properties.byteOrder || undefined;
	this.length = properties.length || undefined;
	this.type = properties.type || undefined;
	this.value = properties.value || undefined;
	return this;
}
module.exports = function (properties) {
	return new CreateBufferArgs(properties);
};