function CreateBufferArgs(properties) {
	properties = properties || {};
	this.value = properties.value || '';
	this.length = properties.length || 0;
	this.type = properties.type || '';
	this.byteOrder = properties.byteOrder || 0;
	return this;
}
module.exports = function (properties) {
	return new CreateBufferArgs(properties);
};