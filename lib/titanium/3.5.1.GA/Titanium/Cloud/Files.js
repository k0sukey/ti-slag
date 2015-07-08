function Files(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Cloud.Files';
	this.bubbleParent = properties.bubbleParent || true;
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
Files.prototype.query = function () {
};
Files.prototype.remove = function () {
};
Files.prototype.setBubbleParent = function () {
};
Files.prototype.show = function () {
};
Files.prototype.update = function () {
};
module.exports = function (properties) {
	return new Files(properties);
};