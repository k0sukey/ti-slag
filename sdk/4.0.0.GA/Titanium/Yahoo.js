function Yahoo(properties) {
	properties = properties || {};
	this.apiName = 'Titanium.Yahoo';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	return this;
}
Yahoo.prototype.addEventListener = function () {
};
Yahoo.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Yahoo.prototype.fireEvent = function () {
};
Yahoo.prototype.getApiName = function () {
	return this.apiName;
};
Yahoo.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Yahoo.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Yahoo.prototype.removeEventListener = function () {
};
Yahoo.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Yahoo.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
Yahoo.prototype.yql = function () {
};
module.exports = function (properties) {
	return new Yahoo(properties);
};