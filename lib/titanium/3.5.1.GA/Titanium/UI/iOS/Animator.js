function Animator(properties) {
	properties = properties || {};
	this.apiName = 'Titanium.UI.iOS.Animator';
	this.behaviors = properties.behaviors || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.referenceView = properties.referenceView || undefined;
	this.running = properties.running || undefined;
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
	return this.apiName;
};
Animator.prototype.getBehaviors = function () {
	return this.behaviors;
};
Animator.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Animator.prototype.getReferenceView = function () {
	return this.referenceView;
};
Animator.prototype.getRunning = function () {
	return this.running;
};
Animator.prototype.removeAllBehaviors = function () {
};
Animator.prototype.removeBehavior = function () {
};
Animator.prototype.removeEventListener = function () {
};
Animator.prototype.setBehaviors = function (property) {
	this.behaviors = property;
};
Animator.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Animator.prototype.setReferenceView = function (property) {
	this.referenceView = property;
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