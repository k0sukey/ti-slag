function CollisionBehavior(properties) {
	properties = properties || {};
	this.apiName = 'Ti.UI.iOS.CollisionBehavior';
	this.boundaryIdentifiers = properties.boundaryIdentifiers || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.collisionMode = properties.collisionMode || undefined;
	this.items = properties.items || undefined;
	this.referenceInsets = properties.referenceInsets || undefined;
	this.treatReferenceAsBoundary = properties.treatReferenceAsBoundary || undefined;
	return this;
}
CollisionBehavior.prototype.addBoundary = function () {
};
CollisionBehavior.prototype.addEventListener = function () {
};
CollisionBehavior.prototype.addItem = function () {
};
CollisionBehavior.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
CollisionBehavior.prototype.fireEvent = function () {
};
CollisionBehavior.prototype.getApiName = function () {
	return '';
};
CollisionBehavior.prototype.getBoundaryIdentifiers = function () {
	return [];
};
CollisionBehavior.prototype.getBubbleParent = function () {
	return true;
};
CollisionBehavior.prototype.getCollisionMode = function () {
	return 0;
};
CollisionBehavior.prototype.getItems = function () {
	return [];
};
CollisionBehavior.prototype.getTreatReferenceAsBoundary = function () {
	return true;
};
CollisionBehavior.prototype.removeAllBoundaries = function () {
};
CollisionBehavior.prototype.removeBoundary = function () {
};
CollisionBehavior.prototype.removeEventListener = function () {
};
CollisionBehavior.prototype.removeItem = function () {
};
CollisionBehavior.prototype.setBubbleParent = function () {
};
CollisionBehavior.prototype.setCollisionMode = function () {
};
CollisionBehavior.prototype.setReferenceInsets = function () {
};
CollisionBehavior.prototype.setTreatReferenceAsBoundary = function () {
};
module.exports = function (properties) {
	return new CollisionBehavior(properties);
};