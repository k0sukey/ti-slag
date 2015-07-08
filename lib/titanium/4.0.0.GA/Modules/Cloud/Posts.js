function Posts(properties) {
	properties = properties || {};
	this.apiName = 'Modules.Cloud.Posts';
	this.bubbleParent = properties.bubbleParent || true;
	this.lifecycleContainer = properties.lifecycleContainer || {};
	return this;
}
Posts.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Posts.prototype.create = function () {
};
Posts.prototype.getApiName = function () {
	return '';
};
Posts.prototype.getBubbleParent = function () {
	return true;
};
Posts.prototype.getLifecycleContainer = function () {
	return {};
};
Posts.prototype.query = function () {
};
Posts.prototype.remove = function () {
};
Posts.prototype.setBubbleParent = function () {
};
Posts.prototype.setLifecycleContainer = function () {
};
Posts.prototype.show = function () {
};
Posts.prototype.update = function () {
};
module.exports = function (properties) {
	return new Posts(properties);
};