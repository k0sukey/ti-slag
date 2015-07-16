function NamedNodeMap(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.XML.NamedNodeMap';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.length = properties.length || 0;
	return this;
}
NamedNodeMap.prototype.addEventListener = function () {
};
NamedNodeMap.prototype.removeEventListener = function () {
};
NamedNodeMap.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
NamedNodeMap.prototype.fireEvent = function () {
};
NamedNodeMap.prototype.getNamedItem = function () {
	return {};
};
NamedNodeMap.prototype.setNamedItem = function () {
	return {};
};
NamedNodeMap.prototype.removeNamedItem = function () {
	return {};
};
NamedNodeMap.prototype.item = function () {
	return {};
};
NamedNodeMap.prototype.getNamedItemNS = function () {
	return {};
};
NamedNodeMap.prototype.setNamedItemNS = function () {
	return {};
};
NamedNodeMap.prototype.removeNamedItemNS = function () {
	return {};
};
NamedNodeMap.prototype.getBubbleParent = function () {
	return true;
};
NamedNodeMap.prototype.setBubbleParent = function () {
};
NamedNodeMap.prototype.getApiName = function () {
	return '';
};
NamedNodeMap.prototype.getLifecycleContainer = function () {
	return {};
};
NamedNodeMap.prototype.setLifecycleContainer = function () {
};
NamedNodeMap.prototype.getLength = function () {
	return 0;
};
module.exports = function (properties) {
	return new NamedNodeMap(properties);
};