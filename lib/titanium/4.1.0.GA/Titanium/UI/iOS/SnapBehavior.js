function SnapBehavior(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.iOS.SnapBehavior';
	this.damping = properties.damping || 0;
	this.item = properties.item || {};
	this.snapPoint = properties.snapPoint || {
		x: 0,
		y: 0
	};
	return this;
}
SnapBehavior.prototype.addEventListener = function () {
};
SnapBehavior.prototype.removeEventListener = function () {
};
SnapBehavior.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
SnapBehavior.prototype.fireEvent = function () {
};
SnapBehavior.prototype.getBubbleParent = function () {
	return true;
};
SnapBehavior.prototype.setBubbleParent = function () {
};
SnapBehavior.prototype.getApiName = function () {
	return '';
};
SnapBehavior.prototype.getDamping = function () {
	return 0;
};
SnapBehavior.prototype.setDamping = function () {
};
SnapBehavior.prototype.getItem = function () {
	return {};
};
SnapBehavior.prototype.setItem = function () {
};
SnapBehavior.prototype.getSnapPoint = function () {
	return {
		x: 0,
		y: 0
	};
};
SnapBehavior.prototype.setSnapPoint = function () {
};
module.exports = function (properties) {
	return new SnapBehavior(properties);
};