function Notation(properties) {
	properties = properties || {};
	this.apiName = 'Titanium.XML.Notation';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.publicId = properties.publicId || undefined;
	this.systemId = properties.systemId || undefined;
	return this;
}
Notation.prototype.addEventListener = function () {
};
Notation.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Notation.prototype.fireEvent = function () {
};
Notation.prototype.getApiName = function () {
	return this.apiName;
};
Notation.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Notation.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Notation.prototype.getPublicId = function () {
	return this.publicId;
};
Notation.prototype.getSystemId = function () {
	return this.systemId;
};
Notation.prototype.removeEventListener = function () {
};
Notation.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Notation.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
module.exports = function (properties) {
	return new Notation(properties);
};