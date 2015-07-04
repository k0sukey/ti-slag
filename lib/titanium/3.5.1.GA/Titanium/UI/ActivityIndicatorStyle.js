function ActivityIndicatorStyle(properties) {
	properties = properties || {};
	this.BIG = properties.BIG || undefined;
	this.BIG_DARK = properties.BIG_DARK || undefined;
	this.DARK = properties.DARK || undefined;
	this.PLAIN = properties.PLAIN || undefined;
	this.apiName = 'Ti.UI.ActivityIndicatorStyle';
	this.bubbleParent = properties.bubbleParent || undefined;
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
ActivityIndicatorStyle.prototype.removeEventListener = function () {
};
ActivityIndicatorStyle.prototype.setBubbleParent = function () {
};
module.exports = function (properties) {
	return new ActivityIndicatorStyle(properties);
};