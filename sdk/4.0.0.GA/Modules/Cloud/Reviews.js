function Reviews(properties) {
	properties = properties || {};
	this.apiName = 'Modules.Cloud.Reviews';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	return this;
}
Reviews.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Reviews.prototype.create = function () {
};
Reviews.prototype.getApiName = function () {
	return this.apiName;
};
Reviews.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Reviews.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Reviews.prototype.query = function () {
};
Reviews.prototype.remove = function () {
};
Reviews.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Reviews.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
Reviews.prototype.show = function () {
};
Reviews.prototype.update = function () {
};
module.exports = function (properties) {
	return new Reviews(properties);
};