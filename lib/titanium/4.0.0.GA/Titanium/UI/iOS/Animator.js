var crypto = require('crypto');
function Animator(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'apiName',
			'behaviors',
			'bubbleParent',
			'referenceView',
			'running',
			'id'
		];
	if (__SLAG__names.length > 0 && process.env.SLAG_STRICT) {
		for (var __SLAG__name in __SLAG__properties) {
			if (__SLAG__names.indexOf(__SLAG__name) === -1) {
				throw new Error('Use user custom property ' + __SLAG__name);
			}
		}
	} else if (__SLAG__names.length === 0 && __SLAG__properties.length > 0 && process.env.SLAG_STRICT) {
		throw new Error('Use user custom properties. ' + __SLAG__properties.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.iOS.Animator.apiName is read only property');
	}
	this.apiName = 'Ti.UI.iOS.Animator';
	this.behaviors = __SLAG__properties.behaviors || [];
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.referenceView = __SLAG__properties.referenceView || {};
	if (__SLAG__properties.running) {
		throw new Error('Ti.UI.iOS.Animator.running is read only property');
	}
	this.running = true;
	this.id = __SLAG__properties.id || '';
	return this;
}
Animator.prototype.addBehavior = function () {
};
Animator.prototype.addEventListener = function () {
};
Animator.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
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