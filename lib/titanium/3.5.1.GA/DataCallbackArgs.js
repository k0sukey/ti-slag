function DataCallbackArgs(properties) {
	properties = properties || {};
	this.address = properties.address || undefined;
	this.bytesData = properties.bytesData || undefined;
	this.port = properties.port || undefined;
	this.stringData = properties.stringData || undefined;
	return this;
}
module.exports = function (properties) {
	return new DataCallbackArgs(properties);
};