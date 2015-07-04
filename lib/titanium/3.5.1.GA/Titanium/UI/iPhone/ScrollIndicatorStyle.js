function ScrollIndicatorStyle(properties) {
	properties = properties || {};
	this.BLACK = properties.BLACK || undefined;
	this.DEFAULT = properties.DEFAULT || undefined;
	this.WHITE = properties.WHITE || undefined;
	this.apiName = 'Ti.UI.iPhone.ScrollIndicatorStyle';
	this.bubbleParent = properties.bubbleParent || undefined;
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