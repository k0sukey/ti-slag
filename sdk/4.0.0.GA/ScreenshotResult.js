function ScreenshotResult(properties) {
	properties = properties || {};

	this.media = properties.media || undefined;

	return this;
}



module.exports = function(properties){ return new ScreenshotResult(properties); };