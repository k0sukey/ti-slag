var crypto = require('crypto');
function ProcessingInstruction(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'data',
			'target',
			'id'
		];
	if (__SLAG__names.length > 0 && process.env.SLAG_STRICT) {
		for (var __SLAG__name in __SLAG__properties) {
			if (__SLAG__names.indexOf(__SLAG__name) === -1) {
				throw new Error('Use user custom property ' + __SLAG__name);
			}
		}
	} else if (__SLAG__names.length === 0 && __SLAG__properties.length > 0 && process.env.SLAG_STRICT) {
		throw new Error('Use user custom properties. ' + __SLAG__properties.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.XML.ProcessingInstruction.apiName is read only property');
	}
	this.apiName = 'Ti.XML.ProcessingInstruction';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.data = __SLAG__properties.data || '';
	if (__SLAG__properties.target) {
		throw new Error('Ti.XML.ProcessingInstruction.target is read only property');
	}
	this.target = '';
	this.id = __SLAG__properties.id || '';
	return this;
}
ProcessingInstruction.prototype.addEventListener = function () {
};
ProcessingInstruction.prototype.removeEventListener = function () {
};
ProcessingInstruction.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
ProcessingInstruction.prototype.fireEvent = function () {
};
ProcessingInstruction.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
ProcessingInstruction.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
ProcessingInstruction.prototype.getApiName = function () {
	return this.apiName;
};
ProcessingInstruction.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
ProcessingInstruction.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
ProcessingInstruction.prototype.getData = function () {
	return this.data;
};
ProcessingInstruction.prototype.setData = function (property) {
	this.data = property;
};
ProcessingInstruction.prototype.getTarget = function () {
	return this.target;
};
module.exports = function (properties) {
	return new ProcessingInstruction(properties);
};