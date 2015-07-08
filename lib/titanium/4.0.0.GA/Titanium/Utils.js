function Utils(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Utils';
	this.bubbleParent = properties.bubbleParent || true;
	this.lifecycleContainer = properties.lifecycleContainer || {};
	return this;
}
Utils.prototype.addEventListener = function () {
};
Utils.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Utils.prototype.base64decode = function () {
	return {};
};
Utils.prototype.base64encode = function () {
	return {};
};
Utils.prototype.fireEvent = function () {
};
Utils.prototype.getApiName = function () {
	return '';
};
Utils.prototype.getBubbleParent = function () {
	return true;
};
Utils.prototype.getLifecycleContainer = function () {
	return {};
};
Utils.prototype.md5HexDigest = function () {
	return '';
};
Utils.prototype.removeEventListener = function () {
};
Utils.prototype.setBubbleParent = function () {
};
Utils.prototype.setLifecycleContainer = function () {
};
Utils.prototype.sha1 = function () {
	return '';
};
Utils.prototype.sha256 = function () {
	return '';
};
module.exports = function (properties) {
	return new Utils(properties);
};