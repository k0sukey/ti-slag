var crypto = require('crypto');
function Locale(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'apiName',
			'bubbleParent',
			'currentCountry',
			'currentLanguage',
			'currentLocale',
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
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.Locale.apiName is read only property');
	}
	this.apiName = 'Ti.Locale';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.currentCountry) {
		throw new Error('Ti.Locale.currentCountry is read only property');
	}
	this.currentCountry = '';
	if (__SLAG__properties.currentLanguage) {
		throw new Error('Ti.Locale.currentLanguage is read only property');
	}
	this.currentLanguage = '';
	if (__SLAG__properties.currentLocale) {
		throw new Error('Ti.Locale.currentLocale is read only property');
	}
	this.currentLocale = '';
	this.id = __SLAG__properties.id || '';
	return this;
}
Locale.prototype.addEventListener = function () {
};
Locale.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Locale.prototype.fireEvent = function () {
};
Locale.prototype.formatTelephoneNumber = function () {
	return '';
};
Locale.prototype.getApiName = function () {
	return this.apiName;
};
Locale.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Locale.prototype.getCurrencyCode = function () {
	return '';
};
Locale.prototype.getCurrencySymbol = function () {
	return '';
};
Locale.prototype.getCurrentCountry = function () {
	return this.currentCountry;
};
Locale.prototype.getCurrentLanguage = function () {
	return this.currentLanguage;
};
Locale.prototype.getCurrentLocale = function () {
	return this.currentLocale;
};
Locale.prototype.getLocaleCurrencySymbol = function () {
	return '';
};
Locale.prototype.getString = function () {
	return '';
};
Locale.prototype.removeEventListener = function () {
};
Locale.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
module.exports = function (properties) {
	return new Locale(properties);
};