function windowToolbarParam(properties) {
	properties = properties || {};

	this.animated = properties.animated || undefined;
	this.barColor = properties.barColor || undefined;
	this.tintColor = properties.tintColor || undefined;
	this.translucent = properties.translucent || undefined;

	return this;
}



module.exports = function(properties){ return new windowToolbarParam(properties); };