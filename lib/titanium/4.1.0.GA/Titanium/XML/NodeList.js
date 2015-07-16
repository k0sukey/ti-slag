function NodeList(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.XML.NodeList';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.length = properties.length || 0;
	return this;
}
NodeList.prototype.addEventListener = function () {
};
NodeList.prototype.removeEventListener = function () {
};
NodeList.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
NodeList.prototype.fireEvent = function () {
};
NodeList.prototype.item = function () {
	return {};
};
NodeList.prototype.getBubbleParent = function () {
	return true;
};
NodeList.prototype.setBubbleParent = function () {
};
NodeList.prototype.getApiName = function () {
	return '';
};
NodeList.prototype.getLifecycleContainer = function () {
	return {};
};
NodeList.prototype.setLifecycleContainer = function () {
};
NodeList.prototype.getLength = function () {
	return 0;
};
module.exports = function (properties) {
	return new NodeList(properties);
};