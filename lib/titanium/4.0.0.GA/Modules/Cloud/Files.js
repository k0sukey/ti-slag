function Files(properties) {
	properties = properties || {};
	this.apiName = 'Modules.Cloud.Files';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	return this;
}
Files.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Files.prototype.create = function () {
};
Files.prototype.getApiName = function () {
	return this.apiName;
};
Files.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Files.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Files.prototype.query = function () {
};
Files.prototype.remove = function () {
};
Files.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Files.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
Files.prototype.show = function () {
};
Files.prototype.update = function () {
};
module.exports = function (properties) {
	return new Files(properties);
};