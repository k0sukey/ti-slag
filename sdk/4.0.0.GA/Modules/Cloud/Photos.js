function Photos(properties) {
	properties = properties || {};
	this.apiName = 'Modules.Cloud.Photos';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
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
	return this.apiName;
};
Photos.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Photos.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Photos.prototype.query = function () {
};
Photos.prototype.remove = function () {
};
Photos.prototype.search = function () {
};
Photos.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Photos.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
Photos.prototype.show = function () {
};
Photos.prototype.update = function () {
};
module.exports = function (properties) {
	return new Photos(properties);
};