function AnimationStyle(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.iPhone.AnimationStyle';
	this.CURL_DOWN = properties.CURL_DOWN || 0;
	this.CURL_UP = properties.CURL_UP || 0;
	this.FLIP_FROM_LEFT = properties.FLIP_FROM_LEFT || 0;
	this.FLIP_FROM_RIGHT = properties.FLIP_FROM_RIGHT || 0;
	this.NONE = properties.NONE || 0;
	return this;
}
AnimationStyle.prototype.addEventListener = function () {
};
AnimationStyle.prototype.removeEventListener = function () {
};
AnimationStyle.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
AnimationStyle.prototype.fireEvent = function () {
};
AnimationStyle.prototype.getBubbleParent = function () {
	return true;
};
AnimationStyle.prototype.setBubbleParent = function () {
};
AnimationStyle.prototype.getApiName = function () {
	return '';
};
module.exports = function (properties) {
	return new AnimationStyle(properties);
};