function RowAnimationStyle(properties) {
	properties = properties || {};
	this.BOTTOM = properties.BOTTOM || undefined;
	this.FADE = properties.FADE || undefined;
	this.LEFT = properties.LEFT || undefined;
	this.NONE = properties.NONE || undefined;
	this.RIGHT = properties.RIGHT || undefined;
	this.TOP = properties.TOP || undefined;
	this.apiName = 'Ti.UI.iPhone.RowAnimationStyle';
	this.bubbleParent = properties.bubbleParent || undefined;
	return this;
}
RowAnimationStyle.prototype.addEventListener = function () {
};
RowAnimationStyle.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
RowAnimationStyle.prototype.fireEvent = function () {
};
RowAnimationStyle.prototype.getApiName = function () {
	return '';
};
RowAnimationStyle.prototype.getBubbleParent = function () {
	return true;
};
RowAnimationStyle.prototype.removeEventListener = function () {
};
RowAnimationStyle.prototype.setBubbleParent = function () {
};
module.exports = function (properties) {
	return new RowAnimationStyle(properties);
};