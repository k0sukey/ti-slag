function Objects(properties) {
	properties = properties || {};
	this.apiName = 'Modules.Cloud.Objects';
	this.bubbleParent = properties.bubbleParent || true;
	this.lifecycleContainer = properties.lifecycleContainer || {};
	return this;
}
Objects.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Objects.prototype.create = function () {
};
Objects.prototype.getApiName = function () {
	return '';
};
Objects.prototype.getBubbleParent = function () {
	return true;
};
Objects.prototype.getLifecycleContainer = function () {
	return {};
};
Objects.prototype.query = function () {
};
Objects.prototype.remove = function () {
};
Objects.prototype.setBubbleParent = function () {
};
Objects.prototype.setLifecycleContainer = function () {
};
Objects.prototype.show = function () {
};
Objects.prototype.update = function () {
};
module.exports = function (properties) {
	return new Objects(properties);
};