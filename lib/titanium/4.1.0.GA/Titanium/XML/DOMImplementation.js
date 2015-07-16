function DOMImplementation(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.XML.DOMImplementation';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	return this;
}
DOMImplementation.prototype.addEventListener = function () {
};
DOMImplementation.prototype.removeEventListener = function () {
};
DOMImplementation.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
DOMImplementation.prototype.fireEvent = function () {
};
DOMImplementation.prototype.hasFeature = function () {
	return true;
};
DOMImplementation.prototype.createDocumentType = function (params) {
	var DocumentType = require('./DOMImplementation/DocumentType');
	return DocumentType(params);
};
DOMImplementation.prototype.createDocument = function (params) {
	var Document = require('./DOMImplementation/Document');
	return Document(params);
};
DOMImplementation.prototype.getBubbleParent = function () {
	return true;
};
DOMImplementation.prototype.setBubbleParent = function () {
};
DOMImplementation.prototype.getApiName = function () {
	return '';
};
DOMImplementation.prototype.getLifecycleContainer = function () {
	return {};
};
DOMImplementation.prototype.setLifecycleContainer = function () {
};
module.exports = function (properties) {
	return new DOMImplementation(properties);
};