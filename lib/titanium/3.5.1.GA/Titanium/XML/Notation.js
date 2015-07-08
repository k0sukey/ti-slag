function Notation(properties) {
	properties = properties || {};
	this.apiName = 'Ti.XML.Notation';
	this.bubbleParent = properties.bubbleParent || true;
	this.publicId = properties.publicId || '';
	this.systemId = properties.systemId || '';
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
	return '';
};
Notation.prototype.getBubbleParent = function () {
	return true;
};
Notation.prototype.getPublicId = function () {
	return '';
};
Notation.prototype.getSystemId = function () {
	return '';
};
Notation.prototype.removeEventListener = function () {
};
Notation.prototype.setBubbleParent = function () {
};
module.exports = function (properties) {
	return new Notation(properties);
};