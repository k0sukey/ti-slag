function ProgressBarStyle(properties) {
	properties = properties || {};
	this.BAR = properties.BAR || 0;
	this.DEFAULT = properties.DEFAULT || 0;
	this.PLAIN = properties.PLAIN || 0;
	this.apiName = 'Ti.UI.iPhone.ProgressBarStyle';
	this.bubbleParent = properties.bubbleParent || true;
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