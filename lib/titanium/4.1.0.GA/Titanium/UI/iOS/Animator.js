function Animator(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.iOS.Animator';
	this.behaviors = properties.behaviors || [];
	this.referenceView = properties.referenceView || {};
	this.running = properties.running || true;
	return this;
}
Animator.prototype.addEventListener = function () {
};
Animator.prototype.removeEventListener = function () {
};
Animator.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Animator.prototype.fireEvent = function () {
};
Animator.prototype.addBehavior = function () {
};
Animator.prototype.removeAllBehaviors = function () {
};
Animator.prototype.removeBehavior = function () {
};
Animator.prototype.startAnimator = function () {
};
Animator.prototype.stopAnimator = function () {
};
Animator.prototype.updateItemUsingCurrentState = function () {
};
Animator.prototype.getBubbleParent = function () {
	return true;
};
Animator.prototype.setBubbleParent = function () {
};
Animator.prototype.getApiName = function () {
	return '';
};
Animator.prototype.getBehaviors = function () {
	return [];
};
Animator.prototype.setBehaviors = function () {
};
Animator.prototype.getReferenceView = function () {
	return {};
};
Animator.prototype.setReferenceView = function () {
};
Animator.prototype.getRunning = function () {
	return true;
};
module.exports = function (properties) {
	return new Animator(properties);
};