function Service(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.Android.Service';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.intent = properties.intent || {};
	this.serviceInstanceId = properties.serviceInstanceId || 0;
	return this;
}
Service.prototype.addEventListener = function () {
};
Service.prototype.removeEventListener = function () {
};
Service.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Service.prototype.fireEvent = function () {
};
Service.prototype.start = function () {
};
Service.prototype.stop = function () {
};
Service.prototype.getBubbleParent = function () {
	return true;
};
Service.prototype.setBubbleParent = function () {
};
Service.prototype.getApiName = function () {
	return '';
};
Service.prototype.getLifecycleContainer = function () {
	return {};
};
Service.prototype.setLifecycleContainer = function () {
};
Service.prototype.getIntent = function () {
	return {};
};
Service.prototype.getServiceInstanceId = function () {
	return 0;
};
module.exports = function (properties) {
	return new Service(properties);
};