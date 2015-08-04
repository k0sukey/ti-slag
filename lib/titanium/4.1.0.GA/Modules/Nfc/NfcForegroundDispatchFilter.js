var crypto = require('crypto');
function NfcForegroundDispatchFilter(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'apiName',
			'lifecycleContainer',
			'intent',
			'intentFilters',
			'techLists',
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
		throw new Error('Modules.Nfc.NfcForegroundDispatchFilter.apiName is read only property');
	}
	this.apiName = 'Modules.Nfc.NfcForegroundDispatchFilter';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.intent = __SLAG__properties.intent || {};
	this.intentFilters = __SLAG__properties.intentFilters || [];
	this.techLists = __SLAG__properties.techLists || '';
	this.id = __SLAG__properties.id || '';
	return this;
}
NfcForegroundDispatchFilter.prototype.getApiName = function () {
	return this.apiName;
};
NfcForegroundDispatchFilter.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
NfcForegroundDispatchFilter.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
NfcForegroundDispatchFilter.prototype.getIntent = function () {
	return this.intent;
};
NfcForegroundDispatchFilter.prototype.setIntent = function (property) {
	this.intent = property;
};
NfcForegroundDispatchFilter.prototype.getIntentFilters = function () {
	return this.intentFilters;
};
NfcForegroundDispatchFilter.prototype.setIntentFilters = function (property) {
	this.intentFilters = property;
};
NfcForegroundDispatchFilter.prototype.getTechLists = function () {
	return this.techLists;
};
NfcForegroundDispatchFilter.prototype.setTechLists = function (property) {
	this.techLists = property;
};
module.exports = function (properties) {
	return new NfcForegroundDispatchFilter(properties);
};