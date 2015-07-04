function Attribute(properties) {
	properties = properties || {};
	this.apiName = 'Ti.UI.iOS.Attribute';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.range = properties.range || undefined;
	this.type = properties.type || undefined;
	this.value = properties.value || undefined;
	return this;
}
Attribute.prototype.addEventListener = function () {
};
Attribute.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Attribute.prototype.fireEvent = function () {
};
Attribute.prototype.getApiName = function () {
	return '';
};
Attribute.prototype.getBubbleParent = function () {
	return true;
};
Attribute.prototype.getRange = function () {
	return 0;
};
Attribute.prototype.getType = function () {
	return 0;
};
Attribute.prototype.getValue = function () {
	return 0;
};
Attribute.prototype.removeEventListener = function () {
};
Attribute.prototype.setBubbleParent = function () {
};
Attribute.prototype.setRange = function () {
};
Attribute.prototype.setType = function () {
};
Attribute.prototype.setValue = function () {
};
module.exports = function (properties) {
	return new Attribute(properties);
};