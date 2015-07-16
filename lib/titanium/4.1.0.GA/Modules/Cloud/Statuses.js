function Statuses(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Modules.Cloud.Statuses';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	return this;
}
Statuses.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Statuses.prototype.create = function () {
};
Statuses.prototype.update = function () {
};
Statuses.prototype.show = function () {
};
Statuses.prototype.delete = function () {
};
Statuses.prototype.query = function () {
};
Statuses.prototype.search = function () {
};
Statuses.prototype.getBubbleParent = function () {
	return true;
};
Statuses.prototype.setBubbleParent = function () {
};
Statuses.prototype.getApiName = function () {
	return '';
};
Statuses.prototype.getLifecycleContainer = function () {
	return {};
};
Statuses.prototype.setLifecycleContainer = function () {
};
module.exports = function (properties) {
	return new Statuses(properties);
};