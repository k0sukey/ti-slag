function ProgressBarStyle(properties) {
	properties = properties || {};
	this.BAR = properties.BAR || undefined;
	this.DEFAULT = properties.DEFAULT || undefined;
	this.PLAIN = properties.PLAIN || undefined;
	this.apiName = 'Titanium.UI.iPhone.ProgressBarStyle';
	this.bubbleParent = properties.bubbleParent || undefined;
	return this;
}
ProgressBarStyle.prototype.addEventListener = function () {
};
ProgressBarStyle.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
ProgressBarStyle.prototype.fireEvent = function () {
};
ProgressBarStyle.prototype.getApiName = function () {
	return this.apiName;
};
ProgressBarStyle.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
ProgressBarStyle.prototype.removeEventListener = function () {
};
ProgressBarStyle.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
module.exports = function (properties) {
	return new ProgressBarStyle(properties);
};