function DOMImplementation(properties) {
	properties = properties || {};
	this.apiName = 'Titanium.XML.DOMImplementation';
	this.bubbleParent = properties.bubbleParent || undefined;
	return this;
}
DOMImplementation.prototype.addEventListener = function () {
};
DOMImplementation.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
DOMImplementation.prototype.createDocument = function (params) {
	var Document = require('./DOMImplementation/Document');
	return Document(params);
};
DOMImplementation.prototype.createDocumentType = function (params) {
	var DocumentType = require('./DOMImplementation/DocumentType');
	return DocumentType(params);
};
DOMImplementation.prototype.fireEvent = function () {
};
DOMImplementation.prototype.getApiName = function () {
	return this.apiName;
};
DOMImplementation.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
DOMImplementation.prototype.hasFeature = function () {
	return true;
};
DOMImplementation.prototype.removeEventListener = function () {
};
DOMImplementation.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
module.exports = function (properties) {
	return new DOMImplementation(properties);
};