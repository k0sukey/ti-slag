var crypto = require('crypto');
function Buffer(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'length',
			'value',
			'type',
			'byteOrder',
			'id'
		];
	if (__SLAG__names.length > 0 && process.env.SLAG_STRICT === 'true') {
		for (var __SLAG__name in __SLAG__properties) {
			if (__SLAG__names.indexOf(__SLAG__name) === -1) {
				throw new Error('Use user custom property ' + __SLAG__name);
			}
		}
	} else if (__SLAG__names.length === 0 && __SLAG__properties.length > 0 && process.env.SLAG_STRICT === 'true') {
		throw new Error('Use user custom properties. ' + __SLAG__properties.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.Buffer.apiName is read only property');
	}
	this.apiName = 'Ti.Buffer';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.length = __SLAG__properties.length || 0;
	this.value = __SLAG__properties.value || 0;
	this.type = __SLAG__properties.type || '';
	this.byteOrder = __SLAG__properties.byteOrder || 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
Buffer.prototype.addEventListener = function () {
};
Buffer.prototype.removeEventListener = function () {
};
Buffer.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Buffer.prototype.fireEvent = function () {
};
Buffer.prototype.append = function () {
	return 0;
};
Buffer.prototype.insert = function () {
	return 0;
};
Buffer.prototype.copy = function () {
	return 0;
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
	return '';
};
Buffer.prototype.toBlob = function () {
	return {};
};
Buffer.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Buffer.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Buffer.prototype.getApiName = function () {
	return this.apiName;
};
Buffer.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Buffer.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
Buffer.prototype.getLength = function () {
	return this.length;
};
Buffer.prototype.setLength = function (property) {
	this.length = property;
};
Buffer.prototype.getValue = function () {
	return this.value;
};
Buffer.prototype.setValue = function (property) {
	this.value = property;
};
Buffer.prototype.getType = function () {
	return this.type;
};
Buffer.prototype.setType = function (property) {
	this.type = property;
};
Buffer.prototype.getByteOrder = function () {
	return this.byteOrder;
};
Buffer.prototype.setByteOrder = function (property) {
	this.byteOrder = property;
};
module.exports = function (properties) {
	return new Buffer(properties);
};