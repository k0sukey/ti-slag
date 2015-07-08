function CreateBufferArgs(properties) {
	properties = properties || {};
	this.byteOrder = properties.byteOrder || 0;
	this.length = properties.length || 0;
	this.type = properties.type || '';
	this.value = properties.value || '';
	return this;
}
module.exports = function (properties) {
	return new CreateBufferArgs(properties);
};