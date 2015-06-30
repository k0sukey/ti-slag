function ListViewAnimationProperties(properties) {
	properties = properties || {};

	this.animated = properties.animated || undefined;
	this.animationStyle = properties.animationStyle || undefined;
	this.position = properties.position || undefined;

	return this;
}



module.exports = function(properties){ return new ListViewAnimationProperties(properties); };