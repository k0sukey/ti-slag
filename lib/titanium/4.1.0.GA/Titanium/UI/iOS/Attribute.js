var crypto = require('crypto');
function Attribute(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'type',
			'value',
			'range',
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
		throw new Error('Ti.UI.iOS.Attribute.apiName is read only property');
	}
	this.apiName = 'Ti.UI.iOS.Attribute';
	this.type = __SLAG__properties.type || 0;
	this.value = __SLAG__properties.value || 0;
	this.range = __SLAG__properties.range || 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
Attribute.prototype.addEventListener = function () {
};
Attribute.prototype.removeEventListener = function () {
};
Attribute.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Attribute.prototype.fireEvent = function () {
};
Attribute.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Attribute.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Attribute.prototype.getApiName = function () {
	return this.apiName;
};
Attribute.prototype.getType = function () {
	return this.type;
};
Attribute.prototype.setType = function (property) {
	this.type = property;
};
Attribute.prototype.getValue = function () {
	return this.value;
};
Attribute.prototype.setValue = function (property) {
	this.value = property;
};
Attribute.prototype.getRange = function () {
	return this.range;
};
Attribute.prototype.setRange = function (property) {
	this.range = property;
};
module.exports = function (properties) {
	return new Attribute(properties);
};