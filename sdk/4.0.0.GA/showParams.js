function showParams(properties) {
	properties = properties || {};

	this.animated = properties.animated || undefined;
	this.rect = properties.rect || undefined;
	this.view = properties.view || undefined;

	return this;
}



module.exports = function(properties){ return new showParams(properties); };