function ProgressBarStyle(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.iPhone.ProgressBarStyle';
	this.BAR = properties.BAR || 0;
	this.DEFAULT = properties.DEFAULT || 0;
	this.PLAIN = properties.PLAIN || 0;
	return this;
}
ProgressBarStyle.prototype.addEventListener = function () {
};
ProgressBarStyle.prototype.removeEventListener = function () {
};
ProgressBarStyle.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
ProgressBarStyle.prototype.fireEvent = function () {
};
ProgressBarStyle.prototype.getBubbleParent = function () {
	return true;
};
ProgressBarStyle.prototype.setBubbleParent = function () {
};
ProgressBarStyle.prototype.getApiName = function () {
	return '';
};
module.exports = function (properties) {
	return new ProgressBarStyle(properties);
};