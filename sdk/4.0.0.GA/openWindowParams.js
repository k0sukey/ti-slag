function openWindowParams(properties) {
	properties = properties || {};

	this.activityEnterAnimation = properties.activityEnterAnimation || undefined;
	this.activityExitAnimation = properties.activityExitAnimation || undefined;
	this.animated = properties.animated || undefined;
	this.bottom = properties.bottom || undefined;
	this.fullscreen = properties.fullscreen || undefined;
	this.height = properties.height || undefined;
	this.left = properties.left || undefined;
	this.modal = properties.modal || undefined;
	this.modalStyle = properties.modalStyle || undefined;
	this.modalTransitionStyle = properties.modalTransitionStyle || undefined;
	this.navBarHidden = properties.navBarHidden || undefined;
	this.right = properties.right || undefined;
	this.top = properties.top || undefined;
	this.transition = properties.transition || undefined;
	this.width = properties.width || undefined;

	return this;
}



module.exports = function(properties){ return new openWindowParams(properties); };