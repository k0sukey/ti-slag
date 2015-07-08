function Reviews(properties) {
	properties = properties || {};
	this.apiName = 'Modules.Cloud.Reviews';
	this.bubbleParent = properties.bubbleParent || true;
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
Reviews.prototype.getApiName = function () {
	return '';
};
Reviews.prototype.getBubbleParent = function () {
	return true;
};
Reviews.prototype.getLifecycleContainer = function () {
	return {};
};
Reviews.prototype.query = function () {
};
Reviews.prototype.remove = function () {
};
Reviews.prototype.setBubbleParent = function () {
};
Reviews.prototype.setLifecycleContainer = function () {
};
Reviews.prototype.show = function () {
};
Reviews.prototype.update = function () {
};
module.exports = function (properties) {
	return new Reviews(properties);
};