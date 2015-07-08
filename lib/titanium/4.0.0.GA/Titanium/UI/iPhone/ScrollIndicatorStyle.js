function ScrollIndicatorStyle(properties) {
	properties = properties || {};
	this.BLACK = properties.BLACK || 0;
	this.DEFAULT = properties.DEFAULT || 0;
	this.WHITE = properties.WHITE || 0;
	this.apiName = 'Ti.UI.iPhone.ScrollIndicatorStyle';
	this.bubbleParent = properties.bubbleParent || true;
	return this;
}
ScrollIndicatorStyle.prototype.addEventListener = function () {
};
ScrollIndicatorStyle.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
ScrollIndicatorStyle.prototype.fireEvent = function () {
};
ScrollIndicatorStyle.prototype.getApiName = function () {
	return '';
};
ScrollIndicatorStyle.prototype.getBubbleParent = function () {
	return true;
};
ScrollIndicatorStyle.prototype.removeEventListener = function () {
};
ScrollIndicatorStyle.prototype.setBubbleParent = function () {
};
module.exports = function (properties) {
	return new ScrollIndicatorStyle(properties);
};