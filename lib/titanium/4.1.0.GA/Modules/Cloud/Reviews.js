function Reviews(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Modules.Cloud.Reviews';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	return this;
}
Reviews.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Reviews.prototype.create = function () {
};
Reviews.prototype.query = function () {
};
Reviews.prototype.remove = function () {
};
Reviews.prototype.show = function () {
};
Reviews.prototype.update = function () {
};
Reviews.prototype.getBubbleParent = function () {
	return true;
};
Reviews.prototype.setBubbleParent = function () {
};
Reviews.prototype.getApiName = function () {
	return '';
};
Reviews.prototype.getLifecycleContainer = function () {
	return {};
};
Reviews.prototype.setLifecycleContainer = function () {
};
module.exports = function (properties) {
	return new Reviews(properties);
};