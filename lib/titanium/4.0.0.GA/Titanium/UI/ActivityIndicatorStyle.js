function ActivityIndicatorStyle(properties) {
	properties = properties || {};
	this.BIG = properties.BIG || 0;
	this.BIG_DARK = properties.BIG_DARK || 0;
	this.DARK = properties.DARK || 0;
	this.PLAIN = properties.PLAIN || 0;
	this.apiName = 'Ti.UI.ActivityIndicatorStyle';
	this.bubbleParent = properties.bubbleParent || true;
	this.lifecycleContainer = properties.lifecycleContainer || {};
	return this;
}
ActivityIndicatorStyle.prototype.addEventListener = function () {
};
ActivityIndicatorStyle.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
ActivityIndicatorStyle.prototype.fireEvent = function () {
};
ActivityIndicatorStyle.prototype.getApiName = function () {
	return '';
};
ActivityIndicatorStyle.prototype.getBubbleParent = function () {
	return true;
};
ActivityIndicatorStyle.prototype.getLifecycleContainer = function () {
	return {};
};
ActivityIndicatorStyle.prototype.removeEventListener = function () {
};
ActivityIndicatorStyle.prototype.setBubbleParent = function () {
};
ActivityIndicatorStyle.prototype.setLifecycleContainer = function () {
};
module.exports = function (properties) {
	return new ActivityIndicatorStyle(properties);
};