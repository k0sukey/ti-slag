function KeyValues(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Modules.Cloud.KeyValues';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	return this;
}
KeyValues.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
KeyValues.prototype.append = function () {
};
KeyValues.prototype.get = function () {
};
KeyValues.prototype.increment = function () {
};
KeyValues.prototype.remove = function () {
};
KeyValues.prototype.set = function () {
};
KeyValues.prototype.getBubbleParent = function () {
	return true;
};
KeyValues.prototype.setBubbleParent = function () {
};
KeyValues.prototype.getApiName = function () {
	return '';
};
KeyValues.prototype.getLifecycleContainer = function () {
	return {};
};
KeyValues.prototype.setLifecycleContainer = function () {
};
module.exports = function (properties) {
	return new KeyValues(properties);
};