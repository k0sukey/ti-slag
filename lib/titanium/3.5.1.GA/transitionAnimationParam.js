function transitionAnimationParam(properties) {
	properties = properties || {};
	this.duration = properties.duration || 0;
	this.tranistionTo = properties.tranistionTo || {};
	this.transitionFrom = properties.transitionFrom || {};
	return this;
}
module.exports = function (properties) {
	return new transitionAnimationParam(properties);
};