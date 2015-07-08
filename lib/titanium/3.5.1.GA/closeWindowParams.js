function closeWindowParams(properties) {
	properties = properties || {};
	this.activityEnterAnimation = properties.activityEnterAnimation || 0;
	this.activityExitAnimation = properties.activityExitAnimation || 0;
	this.animated = properties.animated || true;
	return this;
}
module.exports = function (properties) {
	return new closeWindowParams(properties);
};