function Buffer(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.Buffer';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.length = properties.length || 0;
	this.value = properties.value || 0;
	this.type = properties.type || '';
	this.byteOrder = properties.byteOrder || 0;
	return this;
}
Buffer.prototype.addEventListener = function () {
};
Buffer.prototype.removeEventListener = function () {
};
Buffer.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Buffer.prototype.fireEvent = function () {
};
Buffer.prototype.append = function () {
	return {};
};
Buffer.prototype.insert = function () {
	return {};
};
Buffer.prototype.copy = function () {
	return {};
};
Buffer.prototype.clone = function () {
	return {};
};
Buffer.prototype.fill = function () {
};
Buffer.prototype.clear = function () {
};
Buffer.prototype.release = function () {
};
Buffer.prototype.toString = function () {
	return {};
};
Buffer.prototype.toBlob = function () {
	return {};
};
Buffer.prototype.getBubbleParent = function () {
	return {};
};
Buffer.prototype.setBubbleParent = function () {
};
Buffer.prototype.getApiName = function () {
	return {};
};
Buffer.prototype.getLifecycleContainer = function () {
	return {};
};
Buffer.prototype.setLifecycleContainer = function () {
};
Buffer.prototype.getLength = function () {
	return {};
};
Buffer.prototype.setLength = function () {
};
Buffer.prototype.getValue = function () {
	return {};
};
Buffer.prototype.setValue = function () {
};
Buffer.prototype.getType = function () {
	return {};
};
Buffer.prototype.setType = function () {
};
Buffer.prototype.getByteOrder = function () {
	return {};
};
Buffer.prototype.setByteOrder = function () {
};
module.exports = function (properties) {
	return new Buffer(properties);
};