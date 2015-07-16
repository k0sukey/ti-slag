function Yahoo(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.Yahoo';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	return this;
}
Yahoo.prototype.addEventListener = function () {
};
Yahoo.prototype.removeEventListener = function () {
};
Yahoo.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Yahoo.prototype.fireEvent = function () {
};
Yahoo.prototype.yql = function () {
};
Yahoo.prototype.getBubbleParent = function () {
	return true;
};
Yahoo.prototype.setBubbleParent = function () {
};
Yahoo.prototype.getApiName = function () {
	return '';
};
Yahoo.prototype.getLifecycleContainer = function () {
	return {};
};
Yahoo.prototype.setLifecycleContainer = function () {
};
module.exports = function (properties) {
	return new Yahoo(properties);
};