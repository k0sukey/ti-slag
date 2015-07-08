function Posts(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Cloud.Posts';
	this.bubbleParent = properties.bubbleParent || true;
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
Posts.prototype.query = function () {
};
Posts.prototype.remove = function () {
};
Posts.prototype.setBubbleParent = function () {
};
Posts.prototype.show = function () {
};
Posts.prototype.update = function () {
};
module.exports = function (properties) {
	return new Posts(properties);
};