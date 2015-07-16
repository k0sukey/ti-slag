function PushSchedules(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Modules.Cloud.PushSchedules';
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
PushSchedules.prototype.remove = function () {
};
PushSchedules.prototype.query = function () {
};
PushSchedules.prototype.getBubbleParent = function () {
	return true;
};
PushSchedules.prototype.setBubbleParent = function () {
};
PushSchedules.prototype.getApiName = function () {
	return '';
};
PushSchedules.prototype.getLifecycleContainer = function () {
	return {};
};
PushSchedules.prototype.setLifecycleContainer = function () {
};
module.exports = function (properties) {
	return new PushSchedules(properties);
};