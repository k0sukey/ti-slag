function Places(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Modules.Cloud.Places';
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
Places.prototype.query = function () {
};
Places.prototype.remove = function () {
};
Places.prototype.search = function () {
};
Places.prototype.show = function () {
};
Places.prototype.update = function () {
};
Places.prototype.getBubbleParent = function () {
	return true;
};
Places.prototype.setBubbleParent = function () {
};
Places.prototype.getApiName = function () {
	return '';
};
Places.prototype.getLifecycleContainer = function () {
	return {};
};
Places.prototype.setLifecycleContainer = function () {
};
module.exports = function (properties) {
	return new Places(properties);
};