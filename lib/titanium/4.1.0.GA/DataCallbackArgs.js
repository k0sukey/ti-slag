function DataCallbackArgs(properties) {
	properties = properties || {};
	this.stringData = properties.stringData || '';
	this.bytesData = properties.bytesData || 0;
	this.address = properties.address || '';
	this.port = properties.port || '';
	return this;
}
module.exports = function (properties) {
	return new DataCallbackArgs(properties);
};