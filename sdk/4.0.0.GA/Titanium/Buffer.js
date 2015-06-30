function Buffer(properties) {
	properties = properties || {};
	this.apiName = 'Titanium.Buffer';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.byteOrder = properties.byteOrder || undefined;
	this.length = properties.length || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.type = properties.type || undefined;
	this.value = properties.value || undefined;
	return this;
}
Buffer.prototype.addEventListener = function () {
};
Buffer.prototype.append = function () {
	return 0;
};
Buffer.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Buffer.prototype.clear = function () {
};
Buffer.prototype.clone = function () {
	return {};
};
Buffer.prototype.copy = function () {
	return 0;
};
Buffer.prototype.fill = function () {
};
Buffer.prototype.fireEvent = function () {
};
Buffer.prototype.getApiName = function () {
	return this.apiName;
};
Buffer.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Buffer.prototype.getByteOrder = function () {
	return this.byteOrder;
};
Buffer.prototype.getLength = function () {
	return this.length;
};
Buffer.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Buffer.prototype.getType = function () {
	return this.type;
};
Buffer.prototype.getValue = function () {
	return this.value;
};
Buffer.prototype.insert = function () {
	return 0;
};
Buffer.prototype.release = function () {
};
Buffer.prototype.removeEventListener = function () {
};
Buffer.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Buffer.prototype.setLength = function (property) {
	this.length = property;
};
Buffer.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
Buffer.prototype.toBlob = function () {
	return {};
};
Buffer.prototype.toString = function () {
	return '';
};
module.exports = function (properties) {
	return new Buffer(properties);
};