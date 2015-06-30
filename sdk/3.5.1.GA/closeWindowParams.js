function closeWindowParams(properties) {
	properties = properties || {};

	this.activityEnterAnimation = properties.activityEnterAnimation || undefined;
	this.activityExitAnimation = properties.activityExitAnimation || undefined;
	this.animated = properties.animated || undefined;

	return this;
}



module.exports = function(properties){ return new closeWindowParams(properties); };