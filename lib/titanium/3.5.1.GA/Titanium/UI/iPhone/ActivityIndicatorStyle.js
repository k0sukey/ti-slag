function ActivityIndicatorStyle(properties) {
	properties = properties || {};
	this.BIG = properties.BIG || 0;
	this.DARK = properties.DARK || 0;
	this.PLAIN = properties.PLAIN || 0;
	this.apiName = 'Ti.UI.iPhone.ActivityIndicatorStyle';
	this.bubbleParent = properties.bubbleParent || true;
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