function ScrollIndicatorStyle(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.iPhone.ScrollIndicatorStyle';
	this.BLACK = properties.BLACK || 0;
	this.DEFAULT = properties.DEFAULT || 0;
	this.WHITE = properties.WHITE || 0;
	return this;
}
ScrollIndicatorStyle.prototype.addEventListener = function () {
};
ScrollIndicatorStyle.prototype.removeEventListener = function () {
};
ScrollIndicatorStyle.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
ScrollIndicatorStyle.prototype.fireEvent = function () {
};
ScrollIndicatorStyle.prototype.getBubbleParent = function () {
	return true;
};
ScrollIndicatorStyle.prototype.setBubbleParent = function () {
};
ScrollIndicatorStyle.prototype.getApiName = function () {
	return '';
};
module.exports = function (properties) {
	return new ScrollIndicatorStyle(properties);
};