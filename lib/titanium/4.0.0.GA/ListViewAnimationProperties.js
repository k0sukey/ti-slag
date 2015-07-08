function ListViewAnimationProperties(properties) {
	properties = properties || {};
	this.animated = properties.animated || true;
	this.animationStyle = properties.animationStyle || 0;
	this.position = properties.position || 0;
	return this;
}
module.exports = function (properties) {
	return new ListViewAnimationProperties(properties);
};