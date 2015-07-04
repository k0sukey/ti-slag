function SystemButtonStyle(properties) {
	properties = properties || {};
	this.BAR = properties.BAR || undefined;
	this.BORDERED = properties.BORDERED || undefined;
	this.DONE = properties.DONE || undefined;
	this.PLAIN = properties.PLAIN || undefined;
	this.apiName = 'Ti.UI.iPhone.SystemButtonStyle';
	this.bubbleParent = properties.bubbleParent || undefined;
	return this;
}
SystemButtonStyle.prototype.addEventListener = function () {
};
SystemButtonStyle.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
SystemButtonStyle.prototype.fireEvent = function () {
};
SystemButtonStyle.prototype.getApiName = function () {
	return '';
};
SystemButtonStyle.prototype.getBubbleParent = function () {
	return true;
};
SystemButtonStyle.prototype.removeEventListener = function () {
};
SystemButtonStyle.prototype.setBubbleParent = function () {
};
module.exports = function (properties) {
	return new SystemButtonStyle(properties);
};