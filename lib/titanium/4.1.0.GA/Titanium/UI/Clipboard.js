function Clipboard(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.Clipboard';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	return this;
}
Clipboard.prototype.addEventListener = function () {
};
Clipboard.prototype.removeEventListener = function () {
};
Clipboard.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Clipboard.prototype.fireEvent = function () {
};
Clipboard.prototype.clearData = function () {
};
Clipboard.prototype.clearText = function () {
};
Clipboard.prototype.getData = function () {
	return '';
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
Clipboard.prototype.setData = function () {
};
Clipboard.prototype.setText = function () {
};
Clipboard.prototype.getBubbleParent = function () {
	return true;
};
Clipboard.prototype.setBubbleParent = function () {
};
Clipboard.prototype.getApiName = function () {
	return '';
};
Clipboard.prototype.getLifecycleContainer = function () {
	return {};
};
Clipboard.prototype.setLifecycleContainer = function () {
};
module.exports = function (properties) {
	return new Clipboard(properties);
};