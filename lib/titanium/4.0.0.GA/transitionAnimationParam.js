function transitionAnimationParam(properties) {
	properties = properties || {};
	this.duration = properties.duration || undefined;
	this.tranistionTo = properties.tranistionTo || undefined;
	this.transitionFrom = properties.transitionFrom || undefined;
	return this;
}
module.exports = function (properties) {
	return new transitionAnimationParam(properties);
};