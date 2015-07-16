function Photos(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Modules.Cloud.Photos';
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
Photos.prototype.query = function () {
};
Photos.prototype.remove = function () {
};
Photos.prototype.search = function () {
};
Photos.prototype.show = function () {
};
Photos.prototype.update = function () {
};
Photos.prototype.getBubbleParent = function () {
	return true;
};
Photos.prototype.setBubbleParent = function () {
};
Photos.prototype.getApiName = function () {
	return '';
};
Photos.prototype.getLifecycleContainer = function () {
	return {};
};
Photos.prototype.setLifecycleContainer = function () {
};
module.exports = function (properties) {
	return new Photos(properties);
};