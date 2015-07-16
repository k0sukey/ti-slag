function ActivityIndicatorStyle(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.iPhone.ActivityIndicatorStyle';
	this.BIG = properties.BIG || 0;
	this.DARK = properties.DARK || 0;
	this.PLAIN = properties.PLAIN || 0;
	return this;
}
ActivityIndicatorStyle.prototype.addEventListener = function () {
};
ActivityIndicatorStyle.prototype.removeEventListener = function () {
};
ActivityIndicatorStyle.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
ActivityIndicatorStyle.prototype.fireEvent = function () {
};
ActivityIndicatorStyle.prototype.getBubbleParent = function () {
	return true;
};
ActivityIndicatorStyle.prototype.setBubbleParent = function () {
};
ActivityIndicatorStyle.prototype.getApiName = function () {
	return '';
};
module.exports = function (properties) {
	return new ActivityIndicatorStyle(properties);
};