function MediaScannerResponse(properties) {
	properties = properties || {};
	this.path = properties.path || '';
	this.uri = properties.uri || '';
	return this;
}
module.exports = function (properties) {
	return new MediaScannerResponse(properties);
};