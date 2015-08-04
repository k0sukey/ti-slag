var crypto = require('crypto');
function NdefMessage(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'apiName',
			'lifecycleContainer',
			'records',
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
		throw new Error('Modules.Nfc.NdefMessage.apiName is read only property');
	}
	this.apiName = 'Modules.Nfc.NdefMessage';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.records = __SLAG__properties.records || [];
	this.id = __SLAG__properties.id || '';
	return this;
}
NdefMessage.prototype.toByte = function () {
	return {};
};
NdefMessage.prototype.getApiName = function () {
	return this.apiName;
};
NdefMessage.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
NdefMessage.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
NdefMessage.prototype.getRecords = function () {
	return this.records;
};
NdefMessage.prototype.setRecords = function (property) {
	this.records = property;
};
module.exports = function (properties) {
	return new NdefMessage(properties);
};