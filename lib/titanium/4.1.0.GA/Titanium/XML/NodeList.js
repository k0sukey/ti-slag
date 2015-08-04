var crypto = require('crypto');
function NodeList(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'length',
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
		throw new Error('Ti.XML.NodeList.apiName is read only property');
	}
	this.apiName = 'Ti.XML.NodeList';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	if (__SLAG__properties.length) {
		throw new Error('Ti.XML.NodeList.length is read only property');
	}
	this.length = 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
NodeList.prototype.addEventListener = function () {
};
NodeList.prototype.removeEventListener = function () {
};
NodeList.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
NodeList.prototype.fireEvent = function () {
};
NodeList.prototype.item = function () {
	return {};
};
NodeList.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
NodeList.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
NodeList.prototype.getApiName = function () {
	return this.apiName;
};
NodeList.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
NodeList.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
NodeList.prototype.getLength = function () {
	return this.length;
};
module.exports = function (properties) {
	return new NodeList(properties);
};