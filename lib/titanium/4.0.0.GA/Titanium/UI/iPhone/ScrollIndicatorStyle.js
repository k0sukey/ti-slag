var crypto = require('crypto');
function ScrollIndicatorStyle(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'BLACK',
			'DEFAULT',
			'WHITE',
			'apiName',
			'bubbleParent',
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
	if (__SLAG__properties.BLACK) {
		throw new Error('Ti.UI.iPhone.ScrollIndicatorStyle.BLACK is read only property');
	}
	this.BLACK = 0;
	if (__SLAG__properties.DEFAULT) {
		throw new Error('Ti.UI.iPhone.ScrollIndicatorStyle.DEFAULT is read only property');
	}
	this.DEFAULT = 0;
	if (__SLAG__properties.WHITE) {
		throw new Error('Ti.UI.iPhone.ScrollIndicatorStyle.WHITE is read only property');
	}
	this.WHITE = 0;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.iPhone.ScrollIndicatorStyle.apiName is read only property');
	}
	this.apiName = 'Ti.UI.iPhone.ScrollIndicatorStyle';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.id = __SLAG__properties.id || '';
	return this;
}
ScrollIndicatorStyle.prototype.addEventListener = function () {
};
ScrollIndicatorStyle.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
ScrollIndicatorStyle.prototype.fireEvent = function () {
};
ScrollIndicatorStyle.prototype.getApiName = function () {
	return this.apiName;
};
ScrollIndicatorStyle.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
ScrollIndicatorStyle.prototype.removeEventListener = function () {
};
ScrollIndicatorStyle.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
module.exports = function (properties) {
	return new ScrollIndicatorStyle(properties);
};