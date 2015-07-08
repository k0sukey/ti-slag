function Clipboard(properties) {
	properties = properties || {};
	this.apiName = 'Ti.UI.Clipboard';
	this.bubbleParent = properties.bubbleParent || true;
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
	return '';
};
Clipboard.prototype.getBubbleParent = function () {
	return true;
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
Clipboard.prototype.removeEventListener = function () {
};
Clipboard.prototype.setBubbleParent = function () {
};
Clipboard.prototype.setData = function () {
};
Clipboard.prototype.setText = function () {
};
module.exports = function (properties) {
	return new Clipboard(properties);
};