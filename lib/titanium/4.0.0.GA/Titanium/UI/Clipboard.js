function Clipboard(properties) {
	properties = properties || {};
	this.apiName = 'Titanium.UI.Clipboard';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	return this;
}
Clipboard.prototype.addEventListener = function () {
};
Clipboard.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Clipboard.prototype.clearData = function () {
};
Clipboard.prototype.clearText = function () {
};
Clipboard.prototype.fireEvent = function () {
};
Clipboard.prototype.getApiName = function () {
	return this.apiName;
};
Clipboard.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Clipboard.prototype.getData = function () {
	return '';
};
Clipboard.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Clipboard.prototype.getText = function () {
	return '';
};
Clipboard.prototype.hasData = function () {
	return true;
};
Clipboard.prototype.hasText = function () {
	return true;
};
Clipboard.prototype.removeEventListener = function () {
};
Clipboard.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Clipboard.prototype.setData = function () {
};
Clipboard.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
Clipboard.prototype.setText = function () {
};
module.exports = function (properties) {
	return new Clipboard(properties);
};