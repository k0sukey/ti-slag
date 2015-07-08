function Animator(properties) {
	properties = properties || {};
	this.apiName = 'Ti.UI.iOS.Animator';
	this.behaviors = properties.behaviors || [];
	this.bubbleParent = properties.bubbleParent || true;
	this.referenceView = properties.referenceView || {};
	this.running = properties.running || true;
	return this;
}
Animator.prototype.addBehavior = function () {
};
Animator.prototype.addEventListener = function () {
};
Animator.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Animator.prototype.fireEvent = function () {
};
Animator.prototype.getApiName = function () {
	return '';
};
Animator.prototype.getBehaviors = function () {
	return [];
};
Animator.prototype.getBubbleParent = function () {
	return true;
};
Animator.prototype.getReferenceView = function () {
	return {};
};
Animator.prototype.getRunning = function () {
	return true;
};
Animator.prototype.removeAllBehaviors = function () {
};
Animator.prototype.removeBehavior = function () {
};
Animator.prototype.removeEventListener = function () {
};
Animator.prototype.setBehaviors = function () {
};
Animator.prototype.setBubbleParent = function () {
};
Animator.prototype.setReferenceView = function () {
};
Animator.prototype.startAnimator = function () {
};
Animator.prototype.stopAnimator = function () {
};
Animator.prototype.updateItemUsingCurrentState = function () {
};
module.exports = function (properties) {
	return new Animator(properties);
};