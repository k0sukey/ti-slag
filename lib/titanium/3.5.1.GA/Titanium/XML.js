function XML(properties) {
	properties = properties || {};
	this.apiName = 'Ti.XML';
	this.bubbleParent = properties.bubbleParent || true;
	return this;
}
XML.prototype.addEventListener = function () {
};
XML.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
XML.prototype.fireEvent = function () {
};
XML.prototype.getApiName = function () {
	return '';
};
XML.prototype.getBubbleParent = function () {
	return true;
};
XML.prototype.parseString = function () {
	return {};
};
XML.prototype.removeEventListener = function () {
};
XML.prototype.serializeToString = function () {
	return '';
};
XML.prototype.setBubbleParent = function () {
};
module.exports = function (properties) {
	return new XML(properties);
};