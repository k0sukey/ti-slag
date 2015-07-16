function AttributedString(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.iOS.AttributedString';
	this.text = properties.text || '';
	this.attributes = properties.attributes || [];
	return this;
}
AttributedString.prototype.addEventListener = function () {
};
AttributedString.prototype.removeEventListener = function () {
};
AttributedString.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
AttributedString.prototype.fireEvent = function () {
};
AttributedString.prototype.addAttribute = function () {
};
AttributedString.prototype.getBubbleParent = function () {
	return true;
};
AttributedString.prototype.setBubbleParent = function () {
};
AttributedString.prototype.getApiName = function () {
	return '';
};
AttributedString.prototype.getText = function () {
	return '';
};
AttributedString.prototype.setText = function () {
};
AttributedString.prototype.getAttributes = function () {
	return [];
};
AttributedString.prototype.setAttributes = function () {
};
module.exports = function (properties) {
	return new AttributedString(properties);
};