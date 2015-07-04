function Service(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Android.Service';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.intent = properties.intent || undefined;
	this.serviceInstanceId = properties.serviceInstanceId || undefined;
	return this;
}
Service.prototype.addEventListener = function () {
};
Service.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Service.prototype.fireEvent = function () {
};
Service.prototype.getApiName = function () {
	return '';
};
Service.prototype.getBubbleParent = function () {
	return true;
};
Service.prototype.getIntent = function () {
	return {};
};
Service.prototype.getServiceInstanceId = function () {
	return 0;
};
Service.prototype.removeEventListener = function () {
};
Service.prototype.setBubbleParent = function () {
};
Service.prototype.start = function () {
};
Service.prototype.stop = function () {
};
module.exports = function (properties) {
	return new Service(properties);
};