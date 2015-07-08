function XML(properties) {
	properties = properties || {};
	this.apiName = 'Ti.XML';
	this.bubbleParent = properties.bubbleParent || true;
	this.lifecycleContainer = properties.lifecycleContainer || {};
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
XML.prototype.getLifecycleContainer = function () {
	return {};
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
XML.prototype.setLifecycleContainer = function () {
};
module.exports = function (properties) {
	return new XML(properties);
};