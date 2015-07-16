function Notation(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.XML.Notation';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.publicId = properties.publicId || '';
	this.systemId = properties.systemId || '';
	return this;
}
Notation.prototype.addEventListener = function () {
};
Notation.prototype.removeEventListener = function () {
};
Notation.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Notation.prototype.fireEvent = function () {
};
Notation.prototype.getBubbleParent = function () {
	return true;
};
Notation.prototype.setBubbleParent = function () {
};
Notation.prototype.getApiName = function () {
	return '';
};
Notation.prototype.getLifecycleContainer = function () {
	return {};
};
Notation.prototype.setLifecycleContainer = function () {
};
Notation.prototype.getPublicId = function () {
	return '';
};
Notation.prototype.getSystemId = function () {
	return '';
};
module.exports = function (properties) {
	return new Notation(properties);
};