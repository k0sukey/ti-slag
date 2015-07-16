function Attribute(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.iOS.Attribute';
	this.type = properties.type || 0;
	this.value = properties.value || 0;
	this.range = properties.range || 0;
	return this;
}
Attribute.prototype.addEventListener = function () {
};
Attribute.prototype.removeEventListener = function () {
};
Attribute.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Attribute.prototype.fireEvent = function () {
};
Attribute.prototype.getBubbleParent = function () {
	return true;
};
Attribute.prototype.setBubbleParent = function () {
};
Attribute.prototype.getApiName = function () {
	return '';
};
Attribute.prototype.getType = function () {
	return 0;
};
Attribute.prototype.setType = function () {
};
Attribute.prototype.getValue = function () {
	return 0;
};
Attribute.prototype.setValue = function () {
};
Attribute.prototype.getRange = function () {
	return 0;
};
Attribute.prototype.setRange = function () {
};
module.exports = function (properties) {
	return new Attribute(properties);
};