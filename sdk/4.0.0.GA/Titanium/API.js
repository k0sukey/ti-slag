function API(properties) {
	properties = properties || {};
	this.apiName = 'Titanium.API';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	return this;
}
API.prototype.addEventListener = function () {
};
API.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
API.prototype.debug = function (params) {
	console.info(params);
};
API.prototype.error = function (params) {
	console.error(params);
};
API.prototype.fireEvent = function () {
};
API.prototype.getApiName = function () {
	return this.apiName;
};
API.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
API.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
API.prototype.info = function (params) {
	console.info(params);
};
API.prototype.log = function (params) {
	console.log(params);
};
API.prototype.removeEventListener = function () {
};
API.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
API.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
API.prototype.timestamp = function () {
};
API.prototype.trace = function (params) {
	console.trace(params);
};
API.prototype.warn = function (params) {
	console.warn(params);
};
module.exports = function (properties) {
	return new API(properties);
};