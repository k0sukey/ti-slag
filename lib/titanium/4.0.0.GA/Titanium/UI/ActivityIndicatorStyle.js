function ActivityIndicatorStyle(properties) {
	properties = properties || {};
	this.BIG = properties.BIG || undefined;
	this.BIG_DARK = properties.BIG_DARK || undefined;
	this.DARK = properties.DARK || undefined;
	this.PLAIN = properties.PLAIN || undefined;
	this.apiName = 'Titanium.UI.ActivityIndicatorStyle';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
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
	return this.apiName;
};
ActivityIndicatorStyle.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
ActivityIndicatorStyle.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
ActivityIndicatorStyle.prototype.removeEventListener = function () {
};
ActivityIndicatorStyle.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
ActivityIndicatorStyle.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
module.exports = function (properties) {
	return new ActivityIndicatorStyle(properties);
};