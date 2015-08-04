var crypto = require('crypto');
function AttributedString(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'text',
			'attributes',
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
		throw new Error('Ti.UI.AttributedString.apiName is read only property');
	}
	this.apiName = 'Ti.UI.AttributedString';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.text = __SLAG__properties.text || '';
	this.attributes = __SLAG__properties.attributes || [];
	this.id = __SLAG__properties.id || '';
	return this;
}
AttributedString.prototype.addEventListener = function () {
};
AttributedString.prototype.removeEventListener = function () {
};
AttributedString.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
AttributedString.prototype.fireEvent = function () {
};
AttributedString.prototype.addAttribute = function () {
};
AttributedString.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
AttributedString.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
AttributedString.prototype.getApiName = function () {
	return this.apiName;
};
AttributedString.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
AttributedString.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
AttributedString.prototype.getText = function () {
	return this.text;
};
AttributedString.prototype.setText = function (property) {
	this.text = property;
};
AttributedString.prototype.getAttributes = function () {
	return this.attributes;
};
AttributedString.prototype.setAttributes = function (property) {
	this.attributes = property;
};
module.exports = function (properties) {
	return new AttributedString(properties);
};