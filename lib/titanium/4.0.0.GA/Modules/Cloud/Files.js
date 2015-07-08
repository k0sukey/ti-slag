function Files(properties) {
	properties = properties || {};
	this.apiName = 'Modules.Cloud.Files';
	this.bubbleParent = properties.bubbleParent || true;
	this.lifecycleContainer = properties.lifecycleContainer || {};
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
	return '';
};
Files.prototype.getBubbleParent = function () {
	return true;
};
Files.prototype.getLifecycleContainer = function () {
	return {};
};
Files.prototype.query = function () {
};
Files.prototype.remove = function () {
};
Files.prototype.setBubbleParent = function () {
};
Files.prototype.setLifecycleContainer = function () {
};
Files.prototype.show = function () {
};
Files.prototype.update = function () {
};
module.exports = function (properties) {
	return new Files(properties);
};