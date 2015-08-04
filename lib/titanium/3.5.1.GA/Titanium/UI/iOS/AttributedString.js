var crypto = require('crypto');
function AttributedString(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'apiName',
			'attributes',
			'bubbleParent',
			'text',
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
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.iOS.AttributedString.apiName is read only property');
	}
	this.apiName = 'Ti.UI.iOS.AttributedString';
	this.attributes = __SLAG__properties.attributes || [];
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.text = __SLAG__properties.text || '';
	this.id = __SLAG__properties.id || '';
	return this;
}
AttributedString.prototype.addAttribute = function () {
};
AttributedString.prototype.addEventListener = function () {
};
AttributedString.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
AttributedString.prototype.fireEvent = function () {
};
AttributedString.prototype.getApiName = function () {
	return this.apiName;
};
AttributedString.prototype.getAttributes = function () {
	return this.attributes;
};
AttributedString.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
AttributedString.prototype.getText = function () {
	return this.text;
};
AttributedString.prototype.removeEventListener = function () {
};
AttributedString.prototype.setAttributes = function (property) {
	this.attributes = property;
};
AttributedString.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
AttributedString.prototype.setText = function (property) {
	this.text = property;
};
module.exports = function (properties) {
	return new AttributedString(properties);
};