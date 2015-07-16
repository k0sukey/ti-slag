function Proxy(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.Proxy';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	return this;
}
Proxy.prototype.addEventListener = function () {
};
Proxy.prototype.removeEventListener = function () {
};
Proxy.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Proxy.prototype.fireEvent = function () {
};
Proxy.prototype.getBubbleParent = function () {
	return true;
};
Proxy.prototype.setBubbleParent = function () {
};
Proxy.prototype.getApiName = function () {
	return '';
};
Proxy.prototype.getLifecycleContainer = function () {
	return {};
};
Proxy.prototype.setLifecycleContainer = function () {
};
module.exports = function (properties) {
	return new Proxy(properties);
};