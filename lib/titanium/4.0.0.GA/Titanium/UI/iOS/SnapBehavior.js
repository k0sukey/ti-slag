function SnapBehavior(properties) {
	properties = properties || {};
	this.apiName = 'Titanium.UI.iOS.SnapBehavior';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.damping = properties.damping || undefined;
	this.item = properties.item || undefined;
	this.snapPoint = properties.snapPoint || undefined;
	return this;
}
SnapBehavior.prototype.addEventListener = function () {
};
SnapBehavior.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
SnapBehavior.prototype.fireEvent = function () {
};
SnapBehavior.prototype.getApiName = function () {
	return this.apiName;
};
SnapBehavior.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
SnapBehavior.prototype.getDamping = function () {
	return this.damping;
};
SnapBehavior.prototype.getItem = function () {
	return this.item;
};
SnapBehavior.prototype.getSnapPoint = function () {
	return this.snapPoint;
};
SnapBehavior.prototype.removeEventListener = function () {
};
SnapBehavior.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
SnapBehavior.prototype.setDamping = function (property) {
	this.damping = property;
};
SnapBehavior.prototype.setItem = function (property) {
	this.item = property;
};
SnapBehavior.prototype.setSnapPoint = function (property) {
	this.snapPoint = property;
};
module.exports = function (properties) {
	return new SnapBehavior(properties);
};