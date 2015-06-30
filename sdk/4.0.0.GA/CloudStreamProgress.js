function CloudStreamProgress(properties) {
	properties = properties || {};

	this.progress = properties.progress || undefined;
	this.url = properties.url || undefined;

	return this;
}



module.exports = function(properties){ return new CloudStreamProgress(properties); };