function AttributedString(properties) {
	properties = properties || {};
	this.apiName = 'Ti.UI.iOS.AttributedString';
	this.attributes = properties.attributes || [];
	this.bubbleParent = properties.bubbleParent || true;
	this.text = properties.text || '';
	return this;
}
AttributedString.prototype.addAttribute = function () {
};
AttributedString.prototype.addEventListener = function () {
};
AttributedString.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
AttributedString.prototype.fireEvent = function () {
};
AttributedString.prototype.getApiName = function () {
	return '';
};
AttributedString.prototype.getAttributes = function () {
	return [];
};
AttributedString.prototype.getBubbleParent = function () {
	return true;
};
AttributedString.prototype.getText = function () {
	return '';
};
AttributedString.prototype.removeEventListener = function () {
};
AttributedString.prototype.setAttributes = function () {
};
AttributedString.prototype.setBubbleParent = function () {
};
AttributedString.prototype.setText = function () {
};
module.exports = function (properties) {
	return new AttributedString(properties);
};