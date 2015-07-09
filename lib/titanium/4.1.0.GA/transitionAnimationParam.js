function transitionAnimationParam(properties) {
	properties = properties || {};
	this.duration = properties.duration || 0;
	this.transitionFrom = properties.transitionFrom || {};
	this.tranistionTo = properties.tranistionTo || {};
	return this;
}
module.exports = function (properties) {
	return new transitionAnimationParam(properties);
};