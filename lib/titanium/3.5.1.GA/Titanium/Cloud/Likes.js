function Likes(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Cloud.Likes';
	this.bubbleParent = properties.bubbleParent || true;
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
Likes.prototype.remove = function () {
};
Likes.prototype.setBubbleParent = function () {
};
module.exports = function (properties) {
	return new Likes(properties);
};