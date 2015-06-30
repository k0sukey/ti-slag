function MediaScannerResponse(properties) {
	properties = properties || {};

	this.path = properties.path || undefined;
	this.uri = properties.uri || undefined;

	return this;
}



module.exports = function(properties){ return new MediaScannerResponse(properties); };