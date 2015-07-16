function Module(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.Module';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	return this;
}
Module.prototype.addEventListener = function () {
};
Module.prototype.removeEventListener = function () {
};
Module.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Module.prototype.fireEvent = function () {
};
Module.prototype.getBubbleParent = function () {
	return true;
};
Module.prototype.setBubbleParent = function () {
};
Module.prototype.getApiName = function () {
	return '';
};
Module.prototype.getLifecycleContainer = function () {
	return {};
};
Module.prototype.setLifecycleContainer = function () {
};
module.exports = function (properties) {
	return new Module(properties);
};