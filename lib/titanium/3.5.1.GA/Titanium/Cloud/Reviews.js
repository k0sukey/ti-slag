function Reviews(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Cloud.Reviews';
	this.bubbleParent = properties.bubbleParent || true;
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
Reviews.prototype.query = function () {
};
Reviews.prototype.remove = function () {
};
Reviews.prototype.setBubbleParent = function () {
};
Reviews.prototype.show = function () {
};
Reviews.prototype.update = function () {
};
module.exports = function (properties) {
	return new Reviews(properties);
};