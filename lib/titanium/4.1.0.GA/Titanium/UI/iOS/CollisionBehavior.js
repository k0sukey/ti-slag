function CollisionBehavior(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.iOS.CollisionBehavior';
	this.boundaryIdentifiers = properties.boundaryIdentifiers || [];
	this.collisionMode = properties.collisionMode || 0;
	this.items = properties.items || [];
	this.referenceInsets = properties.referenceInsets || {};
	this.treatReferenceAsBoundary = properties.treatReferenceAsBoundary || true;
	return this;
}
CollisionBehavior.prototype.addEventListener = function () {
};
CollisionBehavior.prototype.removeEventListener = function () {
};
CollisionBehavior.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
CollisionBehavior.prototype.fireEvent = function () {
};
CollisionBehavior.prototype.addBoundary = function () {
};
CollisionBehavior.prototype.addItem = function () {
};
CollisionBehavior.prototype.removeAllBoundaries = function () {
};
CollisionBehavior.prototype.removeBoundary = function () {
};
CollisionBehavior.prototype.removeItem = function () {
};
CollisionBehavior.prototype.getBubbleParent = function () {
	return true;
};
CollisionBehavior.prototype.setBubbleParent = function () {
};
CollisionBehavior.prototype.getApiName = function () {
	return '';
};
CollisionBehavior.prototype.getBoundaryIdentifiers = function () {
	return [];
};
CollisionBehavior.prototype.getCollisionMode = function () {
	return 0;
};
CollisionBehavior.prototype.setCollisionMode = function () {
};
CollisionBehavior.prototype.getItems = function () {
	return [];
};
CollisionBehavior.prototype.getReferenceInsets = function () {
	return {};
};
CollisionBehavior.prototype.setReferenceInsets = function () {
};
CollisionBehavior.prototype.getTreatReferenceAsBoundary = function () {
	return true;
};
CollisionBehavior.prototype.setTreatReferenceAsBoundary = function () {
};
module.exports = function (properties) {
	return new CollisionBehavior(properties);
};