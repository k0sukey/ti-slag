function showStatusBarParams(properties) {
	properties = properties || {};

	this.animated = properties.animated || undefined;
	this.animationStyle = properties.animationStyle || undefined;

	return this;
}



module.exports = function(properties){ return new showStatusBarParams(properties); };