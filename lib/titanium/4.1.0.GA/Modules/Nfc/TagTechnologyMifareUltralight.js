var crypto = require('crypto');
function TagTechnologyMifareUltralight(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'apiName',
			'lifecycleContainer',
			'tag',
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
		throw new Error('Modules.Nfc.TagTechnologyMifareUltralight.apiName is read only property');
	}
	this.apiName = 'Modules.Nfc.TagTechnologyMifareUltralight';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.tag = __SLAG__properties.tag || {};
	this.id = __SLAG__properties.id || '';
	return this;
}
TagTechnologyMifareUltralight.prototype.isValid = function () {
	return true;
};
TagTechnologyMifareUltralight.prototype.close = function () {
};
TagTechnologyMifareUltralight.prototype.connect = function () {
};
TagTechnologyMifareUltralight.prototype.isConnected = function () {
	return true;
};
TagTechnologyMifareUltralight.prototype.getMaxTransceiveLength = function () {
	return 0;
};
TagTechnologyMifareUltralight.prototype.getTimeout = function () {
	return 0;
};
TagTechnologyMifareUltralight.prototype.getType = function () {
	return 0;
};
TagTechnologyMifareUltralight.prototype.readPages = function () {
	return {};
};
TagTechnologyMifareUltralight.prototype.setTimeout = function () {
};
TagTechnologyMifareUltralight.prototype.transceive = function () {
	return {};
};
TagTechnologyMifareUltralight.prototype.writePage = function () {
};
TagTechnologyMifareUltralight.prototype.getApiName = function () {
	return this.apiName;
};
TagTechnologyMifareUltralight.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
TagTechnologyMifareUltralight.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
TagTechnologyMifareUltralight.prototype.getTag = function () {
	return this.tag;
};
TagTechnologyMifareUltralight.prototype.setTag = function (property) {
	this.tag = property;
};
module.exports = function (properties) {
	return new TagTechnologyMifareUltralight(properties);
};