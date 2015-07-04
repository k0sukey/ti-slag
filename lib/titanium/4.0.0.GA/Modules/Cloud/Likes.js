function Likes(properties) {
	properties = properties || {};
	this.apiName = 'Modules.Cloud.Likes';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	return this;
}
Likes.prototype.create = function () {
};
Likes.prototype.getApiName = function () {
	return '';
};
Likes.prototype.getBubbleParent = function () {
	return true;
};
Likes.prototype.getLifecycleContainer = function () {
	return {};
};
Likes.prototype.remove = function () {
};
Likes.prototype.setBubbleParent = function () {
};
Likes.prototype.setLifecycleContainer = function () {
};
module.exports = function (properties) {
	return new Likes(properties);
};