function DocumentViewerOptions(properties) {
	properties = properties || {};

	this.animated = properties.animated || undefined;
	this.view = properties.view || undefined;

	return this;
}



module.exports = function(properties){ return new DocumentViewerOptions(properties); };