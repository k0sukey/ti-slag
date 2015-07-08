function Module(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Module';
	this.bubbleParent = properties.bubbleParent || true;
	this.lifecycleContainer = properties.lifecycleContainer || {};
	return this;
}
Module.prototype.addEventListener = function () {
};
Module.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Module.prototype.fireEvent = function () {
};
Module.prototype.getApiName = function () {
	return '';
};
Module.prototype.getBubbleParent = function () {
	return true;
};
Module.prototype.getLifecycleContainer = function () {
	return {};
};
Module.prototype.removeEventListener = function () {
};
Module.prototype.setBubbleParent = function () {
};
Module.prototype.setLifecycleContainer = function () {
};
module.exports = function (properties) {
	return new Module(properties);
};