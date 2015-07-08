function PushSchedules(properties) {
	properties = properties || {};
	this.apiName = 'Modules.Cloud.PushSchedules';
	this.bubbleParent = properties.bubbleParent || true;
	this.lifecycleContainer = properties.lifecycleContainer || {};
	return this;
}
PushSchedules.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
PushSchedules.prototype.create = function () {
};
PushSchedules.prototype.getApiName = function () {
	return '';
};
PushSchedules.prototype.getBubbleParent = function () {
	return true;
};
PushSchedules.prototype.getLifecycleContainer = function () {
	return {};
};
PushSchedules.prototype.query = function () {
};
PushSchedules.prototype.remove = function () {
};
PushSchedules.prototype.setBubbleParent = function () {
};
PushSchedules.prototype.setLifecycleContainer = function () {
};
module.exports = function (properties) {
	return new PushSchedules(properties);
};