function Photos(properties) {
	properties = properties || {};
	this.apiName = 'Modules.Cloud.Photos';
	this.bubbleParent = properties.bubbleParent || true;
	this.lifecycleContainer = properties.lifecycleContainer || {};
	return this;
}
Photos.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Photos.prototype.create = function () {
};
Photos.prototype.getApiName = function () {
	return '';
};
Photos.prototype.getBubbleParent = function () {
	return true;
};
Photos.prototype.getLifecycleContainer = function () {
	return {};
};
Photos.prototype.query = function () {
};
Photos.prototype.remove = function () {
};
Photos.prototype.search = function () {
};
Photos.prototype.setBubbleParent = function () {
};
Photos.prototype.setLifecycleContainer = function () {
};
Photos.prototype.show = function () {
};
Photos.prototype.update = function () {
};
module.exports = function (properties) {
	return new Photos(properties);
};