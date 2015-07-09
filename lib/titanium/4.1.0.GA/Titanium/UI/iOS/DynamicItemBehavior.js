function DynamicItemBehavior(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.iOS.DynamicItemBehavior';
	this.allowsRotation = properties.allowsRotation || true;
	this.angularResistance = properties.angularResistance || 0;
	this.density = properties.density || 0;
	this.elasticity = properties.elasticity || 0;
	this.friction = properties.friction || 0;
	this.items = properties.items || [];
	this.resistance = properties.resistance || 0;
	return this;
}
DynamicItemBehavior.prototype.addEventListener = function () {
};
DynamicItemBehavior.prototype.removeEventListener = function () {
};
DynamicItemBehavior.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
DynamicItemBehavior.prototype.fireEvent = function () {
};
DynamicItemBehavior.prototype.addAngularVelocityForItem = function () {
};
DynamicItemBehavior.prototype.addItem = function () {
};
DynamicItemBehavior.prototype.addLinearVelocityForItem = function () {
};
DynamicItemBehavior.prototype.angularVelocityForItem = function () {
	return {};
};
DynamicItemBehavior.prototype.linearVelocityForItem = function () {
	return {};
};
DynamicItemBehavior.prototype.removeItem = function () {
};
DynamicItemBehavior.prototype.getBubbleParent = function () {
	return {};
};
DynamicItemBehavior.prototype.setBubbleParent = function () {
};
DynamicItemBehavior.prototype.getApiName = function () {
	return {};
};
DynamicItemBehavior.prototype.getAllowsRotation = function () {
	return {};
};
DynamicItemBehavior.prototype.setAllowsRotation = function () {
};
DynamicItemBehavior.prototype.getAngularResistance = function () {
	return {};
};
DynamicItemBehavior.prototype.setAngularResistance = function () {
};
DynamicItemBehavior.prototype.getDensity = function () {
	return {};
};
DynamicItemBehavior.prototype.setDensity = function () {
};
DynamicItemBehavior.prototype.getElasticity = function () {
	return {};
};
DynamicItemBehavior.prototype.setElasticity = function () {
};
DynamicItemBehavior.prototype.getFriction = function () {
	return {};
};
DynamicItemBehavior.prototype.setFriction = function () {
};
DynamicItemBehavior.prototype.getItems = function () {
	return {};
};
DynamicItemBehavior.prototype.getResistance = function () {
	return {};
};
DynamicItemBehavior.prototype.setResistance = function () {
};
module.exports = function (properties) {
	return new DynamicItemBehavior(properties);
};