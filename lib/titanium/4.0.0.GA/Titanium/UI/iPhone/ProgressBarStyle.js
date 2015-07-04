function ProgressBarStyle(properties) {
	properties = properties || {};
	this.BAR = properties.BAR || undefined;
	this.DEFAULT = properties.DEFAULT || undefined;
	this.PLAIN = properties.PLAIN || undefined;
	this.apiName = 'Ti.UI.iPhone.ProgressBarStyle';
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
	return '';
};
ProgressBarStyle.prototype.getBubbleParent = function () {
	return true;
};
ProgressBarStyle.prototype.removeEventListener = function () {
};
ProgressBarStyle.prototype.setBubbleParent = function () {
};
module.exports = function (properties) {
	return new ProgressBarStyle(properties);
};