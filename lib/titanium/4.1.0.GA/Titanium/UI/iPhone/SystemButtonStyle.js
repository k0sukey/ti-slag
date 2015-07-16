function SystemButtonStyle(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.iPhone.SystemButtonStyle';
	this.BAR = properties.BAR || 0;
	this.BORDERED = properties.BORDERED || 0;
	this.DONE = properties.DONE || 0;
	this.PLAIN = properties.PLAIN || 0;
	return this;
}
SystemButtonStyle.prototype.addEventListener = function () {
};
SystemButtonStyle.prototype.removeEventListener = function () {
};
SystemButtonStyle.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
SystemButtonStyle.prototype.fireEvent = function () {
};
SystemButtonStyle.prototype.getBubbleParent = function () {
	return true;
};
SystemButtonStyle.prototype.setBubbleParent = function () {
};
SystemButtonStyle.prototype.getApiName = function () {
	return '';
};
module.exports = function (properties) {
	return new SystemButtonStyle(properties);
};