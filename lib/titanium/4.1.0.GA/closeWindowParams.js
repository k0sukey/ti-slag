function closeWindowParams(properties) {
	properties = properties || {};
	this.animated = properties.animated || true;
	this.activityEnterAnimation = properties.activityEnterAnimation || 0;
	this.activityExitAnimation = properties.activityExitAnimation || 0;
	return this;
}
module.exports = function (properties) {
	return new closeWindowParams(properties);
};