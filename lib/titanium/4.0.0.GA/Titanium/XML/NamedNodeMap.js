function NamedNodeMap(properties) {
	properties = properties || {};
	this.apiName = 'Ti.XML.NamedNodeMap';
	this.bubbleParent = properties.bubbleParent || true;
	this.length = properties.length || 0;
	this.lifecycleContainer = properties.lifecycleContainer || {};
	return this;
}
NamedNodeMap.prototype.addEventListener = function () {
};
NamedNodeMap.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
NamedNodeMap.prototype.fireEvent = function () {
};
NamedNodeMap.prototype.getApiName = function () {
	return '';
};
NamedNodeMap.prototype.getBubbleParent = function () {
	return true;
};
NamedNodeMap.prototype.getLength = function () {
	return 0;
};
NamedNodeMap.prototype.getLifecycleContainer = function () {
	return {};
};
NamedNodeMap.prototype.getNamedItem = function () {
	return {};
};
NamedNodeMap.prototype.getNamedItemNS = function () {
	return {};
};
NamedNodeMap.prototype.item = function () {
	return {};
};
NamedNodeMap.prototype.removeEventListener = function () {
};
NamedNodeMap.prototype.removeNamedItem = function () {
	return {};
};
NamedNodeMap.prototype.removeNamedItemNS = function () {
	return {};
};
NamedNodeMap.prototype.setBubbleParent = function () {
};
NamedNodeMap.prototype.setLifecycleContainer = function () {
};
NamedNodeMap.prototype.setNamedItem = function () {
	return {};
};
NamedNodeMap.prototype.setNamedItemNS = function () {
	return {};
};
module.exports = function (properties) {
	return new NamedNodeMap(properties);
};