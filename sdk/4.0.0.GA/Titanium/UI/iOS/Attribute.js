function Attribute(properties) {
	properties = properties || {};
	this.apiName = 'Titanium.UI.iOS.Attribute';
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
	return this.apiName;
};
Attribute.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Attribute.prototype.getRange = function () {
	return this.range;
};
Attribute.prototype.getType = function () {
	return this.type;
};
Attribute.prototype.getValue = function () {
	return this.value;
};
Attribute.prototype.removeEventListener = function () {
};
Attribute.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Attribute.prototype.setRange = function (property) {
	this.range = property;
};
Attribute.prototype.setType = function (property) {
	this.type = property;
};
Attribute.prototype.setValue = function (property) {
	this.value = property;
};
module.exports = function (properties) {
	return new Attribute(properties);
};