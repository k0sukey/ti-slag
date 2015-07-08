function DataCallbackArgs(properties) {
	properties = properties || {};
	this.address = properties.address || '';
	this.bytesData = properties.bytesData || 0;
	this.port = properties.port || '';
	this.stringData = properties.stringData || '';
	return this;
}
module.exports = function (properties) {
	return new DataCallbackArgs(properties);
};