var crypto = require('crypto');
function TagTechnologyIsoDep(__SLAG__properties) {
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
		throw new Error('Modules.Nfc.TagTechnologyIsoDep.apiName is read only property');
	}
	this.apiName = 'Modules.Nfc.TagTechnologyIsoDep';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.tag = __SLAG__properties.tag || {};
	this.id = __SLAG__properties.id || '';
	return this;
}
TagTechnologyIsoDep.prototype.isValid = function () {
	return true;
};
TagTechnologyIsoDep.prototype.close = function () {
};
TagTechnologyIsoDep.prototype.connect = function () {
};
TagTechnologyIsoDep.prototype.isConnected = function () {
	return true;
};
TagTechnologyIsoDep.prototype.getHiLayerResponse = function () {
	return {};
};
TagTechnologyIsoDep.prototype.getHistoricalBytes = function () {
	return {};
};
TagTechnologyIsoDep.prototype.getMaxTransceiveLength = function () {
	return 0;
};
TagTechnologyIsoDep.prototype.getTimeout = function () {
	return 0;
};
TagTechnologyIsoDep.prototype.isExtendedLengthApduSupported = function () {
	return true;
};
TagTechnologyIsoDep.prototype.setTimeout = function () {
};
TagTechnologyIsoDep.prototype.transceive = function () {
	return {};
};
TagTechnologyIsoDep.prototype.getApiName = function () {
	return this.apiName;
};
TagTechnologyIsoDep.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
TagTechnologyIsoDep.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
TagTechnologyIsoDep.prototype.getTag = function () {
	return this.tag;
};
TagTechnologyIsoDep.prototype.setTag = function (property) {
	this.tag = property;
};
module.exports = function (properties) {
	return new TagTechnologyIsoDep(properties);
};