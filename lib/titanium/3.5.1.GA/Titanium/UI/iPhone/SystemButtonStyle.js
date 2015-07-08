function SystemButtonStyle(properties) {
	properties = properties || {};
	this.BAR = properties.BAR || 0;
	this.BORDERED = properties.BORDERED || 0;
	this.DONE = properties.DONE || 0;
	this.PLAIN = properties.PLAIN || 0;
	this.apiName = 'Ti.UI.iPhone.SystemButtonStyle';
	this.bubbleParent = properties.bubbleParent || true;
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