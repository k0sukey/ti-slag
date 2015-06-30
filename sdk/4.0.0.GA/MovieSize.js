function MovieSize(properties) {
	properties = properties || {};

	this.height = properties.height || undefined;
	this.width = properties.width || undefined;

	return this;
}



module.exports = function(properties){ return new MovieSize(properties); };