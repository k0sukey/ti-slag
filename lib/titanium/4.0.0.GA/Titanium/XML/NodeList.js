function NodeList(properties) {
	properties = properties || {};
	this.apiName = 'Ti.XML.NodeList';
	this.bubbleParent = properties.bubbleParent || true;
	this.length = properties.length || 0;
	this.lifecycleContainer = properties.lifecycleContainer || {};
	return this;
}
NodeList.prototype.addEventListener = function () {
};
NodeList.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
NodeList.prototype.fireEvent = function () {
};
NodeList.prototype.getApiName = function () {
	return '';
};
NodeList.prototype.getBubbleParent = function () {
	return true;
};
NodeList.prototype.getLength = function () {
	return 0;
};
NodeList.prototype.getLifecycleContainer = function () {
	return {};
};
NodeList.prototype.item = function () {
	return {};
};
NodeList.prototype.removeEventListener = function () {
};
NodeList.prototype.setBubbleParent = function () {
};
NodeList.prototype.setLifecycleContainer = function () {
};
module.exports = function (properties) {
	return new NodeList(properties);
};