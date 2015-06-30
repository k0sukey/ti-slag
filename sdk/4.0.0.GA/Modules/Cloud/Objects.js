function Objects(properties) {
	properties = properties || {};
	this.apiName = 'Modules.Cloud.Objects';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	return this;
}
Objects.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Objects.prototype.create = function () {
};
Objects.prototype.getApiName = function () {
	return this.apiName;
};
Objects.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Objects.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Objects.prototype.query = function () {
};
Objects.prototype.remove = function () {
};
Objects.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Objects.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
Objects.prototype.show = function () {
};
Objects.prototype.update = function () {
};
module.exports = function (properties) {
	return new Objects(properties);
};