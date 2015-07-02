function DynamicItemBehavior(properties) {
	properties = properties || {};
	this.allowsRotation = properties.allowsRotation || undefined;
	this.angularResistance = properties.angularResistance || undefined;
	this.apiName = 'Titanium.UI.iOS.DynamicItemBehavior';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.density = properties.density || undefined;
	this.elasticity = properties.elasticity || undefined;
	this.friction = properties.friction || undefined;
	this.items = properties.items || undefined;
	this.resistance = properties.resistance || undefined;
	return this;
}
DynamicItemBehavior.prototype.addAngularVelocityForItem = function () {
};
DynamicItemBehavior.prototype.addEventListener = function () {
};
DynamicItemBehavior.prototype.addItem = function () {
};
DynamicItemBehavior.prototype.addLinearVelocityForItem = function () {
};
DynamicItemBehavior.prototype.angularVelocityForItem = function () {
	return 0;
};
DynamicItemBehavior.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
DynamicItemBehavior.prototype.fireEvent = function () {
};
DynamicItemBehavior.prototype.getAllowsRotation = function () {
	return this.allowsRotation;
};
DynamicItemBehavior.prototype.getAngularResistance = function () {
	return this.angularResistance;
};
DynamicItemBehavior.prototype.getApiName = function () {
	return this.apiName;
};
DynamicItemBehavior.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
DynamicItemBehavior.prototype.getDensity = function () {
	return this.density;
};
DynamicItemBehavior.prototype.getElasticity = function () {
	return this.elasticity;
};
DynamicItemBehavior.prototype.getFriction = function () {
	return this.friction;
};
DynamicItemBehavior.prototype.getItems = function () {
	return this.items;
};
DynamicItemBehavior.prototype.getResistance = function () {
	return this.resistance;
};
DynamicItemBehavior.prototype.linearVelocityForItem = function () {
	return {
		x: 0,
		y: 0
	};
};
DynamicItemBehavior.prototype.removeEventListener = function () {
};
DynamicItemBehavior.prototype.removeItem = function () {
};
DynamicItemBehavior.prototype.setAllowsRotation = function (property) {
	this.allowsRotation = property;
};
DynamicItemBehavior.prototype.setAngularResistance = function (property) {
	this.angularResistance = property;
};
DynamicItemBehavior.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
DynamicItemBehavior.prototype.setDensity = function (property) {
	this.density = property;
};
DynamicItemBehavior.prototype.setElasticity = function (property) {
	this.elasticity = property;
};
DynamicItemBehavior.prototype.setFriction = function (property) {
	this.friction = property;
};
DynamicItemBehavior.prototype.setResistance = function (property) {
	this.resistance = property;
};
module.exports = function (properties) {
	return new DynamicItemBehavior(properties);
};