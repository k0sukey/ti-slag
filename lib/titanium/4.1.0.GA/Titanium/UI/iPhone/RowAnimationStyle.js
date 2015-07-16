function RowAnimationStyle(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.iPhone.RowAnimationStyle';
	this.BOTTOM = properties.BOTTOM || 0;
	this.FADE = properties.FADE || 0;
	this.LEFT = properties.LEFT || 0;
	this.NONE = properties.NONE || 0;
	this.RIGHT = properties.RIGHT || 0;
	this.TOP = properties.TOP || 0;
	return this;
}
RowAnimationStyle.prototype.addEventListener = function () {
};
RowAnimationStyle.prototype.removeEventListener = function () {
};
RowAnimationStyle.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
RowAnimationStyle.prototype.fireEvent = function () {
};
RowAnimationStyle.prototype.getBubbleParent = function () {
	return true;
};
RowAnimationStyle.prototype.setBubbleParent = function () {
};
RowAnimationStyle.prototype.getApiName = function () {
	return '';
};
module.exports = function (properties) {
	return new RowAnimationStyle(properties);
};