var crypto = require('crypto');
function ProgressBarStyle(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'BAR',
			'DEFAULT',
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
		throw new Error('Ti.UI.iPhone.ProgressBarStyle.apiName is read only property');
	}
	this.apiName = 'Ti.UI.iPhone.ProgressBarStyle';
	if (__SLAG__properties.BAR) {
		throw new Error('Ti.UI.iPhone.ProgressBarStyle.BAR is read only property');
	}
	this.BAR = 0;
	if (__SLAG__properties.DEFAULT) {
		throw new Error('Ti.UI.iPhone.ProgressBarStyle.DEFAULT is read only property');
	}
	this.DEFAULT = 0;
	if (__SLAG__properties.PLAIN) {
		throw new Error('Ti.UI.iPhone.ProgressBarStyle.PLAIN is read only property');
	}
	this.PLAIN = 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
ProgressBarStyle.prototype.addEventListener = function () {
};
ProgressBarStyle.prototype.removeEventListener = function () {
};
ProgressBarStyle.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
ProgressBarStyle.prototype.fireEvent = function () {
};
ProgressBarStyle.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
ProgressBarStyle.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
ProgressBarStyle.prototype.getApiName = function () {
	return this.apiName;
};
module.exports = function (properties) {
	return new ProgressBarStyle(properties);
};