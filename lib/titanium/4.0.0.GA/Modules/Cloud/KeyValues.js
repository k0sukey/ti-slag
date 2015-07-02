function KeyValues(properties) {
	properties = properties || {};
	this.apiName = 'Modules.Cloud.KeyValues';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	return this;
}
KeyValues.prototype.append = function () {
};
KeyValues.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
KeyValues.prototype.get = function () {
};
KeyValues.prototype.getApiName = function () {
	return this.apiName;
};
KeyValues.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
KeyValues.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
KeyValues.prototype.increment = function () {
};
KeyValues.prototype.remove = function () {
};
KeyValues.prototype.set = function () {
};
KeyValues.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
KeyValues.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
module.exports = function (properties) {
	return new KeyValues(properties);
};