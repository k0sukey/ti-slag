function Places(properties) {
	properties = properties || {};
	this.apiName = 'Modules.Cloud.Places';
	this.bubbleParent = properties.bubbleParent || true;
	this.lifecycleContainer = properties.lifecycleContainer || {};
	return this;
}
Places.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Places.prototype.create = function () {
};
Places.prototype.getApiName = function () {
	return '';
};
Places.prototype.getBubbleParent = function () {
	return true;
};
Places.prototype.getLifecycleContainer = function () {
	return {};
};
Places.prototype.query = function () {
};
Places.prototype.remove = function () {
};
Places.prototype.search = function () {
};
Places.prototype.setBubbleParent = function () {
};
Places.prototype.setLifecycleContainer = function () {
};
Places.prototype.show = function () {
};
Places.prototype.update = function () {
};
module.exports = function (properties) {
	return new Places(properties);
};