var crypto = require('crypto');
function ActivityIndicatorStyle(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'BIG',
			'DARK',
			'PLAIN',
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
		throw new Error('Ti.UI.iPhone.ActivityIndicatorStyle.apiName is read only property');
	}
	this.apiName = 'Ti.UI.iPhone.ActivityIndicatorStyle';
	if (__SLAG__properties.BIG) {
		throw new Error('Ti.UI.iPhone.ActivityIndicatorStyle.BIG is read only property');
	}
	this.BIG = 0;
	if (__SLAG__properties.DARK) {
		throw new Error('Ti.UI.iPhone.ActivityIndicatorStyle.DARK is read only property');
	}
	this.DARK = 0;
	if (__SLAG__properties.PLAIN) {
		throw new Error('Ti.UI.iPhone.ActivityIndicatorStyle.PLAIN is read only property');
	}
	this.PLAIN = 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
ActivityIndicatorStyle.prototype.addEventListener = function () {
};
ActivityIndicatorStyle.prototype.removeEventListener = function () {
};
ActivityIndicatorStyle.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
ActivityIndicatorStyle.prototype.fireEvent = function () {
};
ActivityIndicatorStyle.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
ActivityIndicatorStyle.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
ActivityIndicatorStyle.prototype.getApiName = function () {
	return this.apiName;
};
module.exports = function (properties) {
	return new ActivityIndicatorStyle(properties);
};