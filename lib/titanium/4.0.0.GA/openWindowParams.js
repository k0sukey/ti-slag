function openWindowParams(properties) {
	properties = properties || {};
	this.activityEnterAnimation = properties.activityEnterAnimation || 0;
	this.activityExitAnimation = properties.activityExitAnimation || 0;
	this.animated = properties.animated || true;
	this.bottom = properties.bottom || 0;
	this.fullscreen = properties.fullscreen || true;
	this.height = properties.height || 0;
	this.left = properties.left || 0;
	this.modal = properties.modal || true;
	this.modalStyle = properties.modalStyle || 0;
	this.modalTransitionStyle = properties.modalTransitionStyle || 0;
	this.navBarHidden = properties.navBarHidden || true;
	this.right = properties.right || 0;
	this.top = properties.top || 0;
	this.transition = properties.transition || 0;
	this.width = properties.width || 0;
	return this;
}
module.exports = function (properties) {
	return new openWindowParams(properties);
};