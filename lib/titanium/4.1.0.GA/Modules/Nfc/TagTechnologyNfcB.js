var crypto = require('crypto');
function TagTechnologyNfcB(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'apiName',
			'lifecycleContainer',
			'tag',
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
		throw new Error('Modules.Nfc.TagTechnologyNfcB.apiName is read only property');
	}
	this.apiName = 'Modules.Nfc.TagTechnologyNfcB';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.tag = __SLAG__properties.tag || {};
	this.id = __SLAG__properties.id || '';
	return this;
}
TagTechnologyNfcB.prototype.isValid = function () {
	return true;
};
TagTechnologyNfcB.prototype.close = function () {
};
TagTechnologyNfcB.prototype.connect = function () {
};
TagTechnologyNfcB.prototype.isConnected = function () {
	return true;
};
TagTechnologyNfcB.prototype.getApplicationData = function () {
	return {};
};
TagTechnologyNfcB.prototype.getMaxTransceiveLength = function () {
	return 0;
};
TagTechnologyNfcB.prototype.getProtocolInfo = function () {
	return {};
};
TagTechnologyNfcB.prototype.transceive = function () {
	return {};
};
TagTechnologyNfcB.prototype.getApiName = function () {
	return this.apiName;
};
TagTechnologyNfcB.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
TagTechnologyNfcB.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
TagTechnologyNfcB.prototype.getTag = function () {
	return this.tag;
};
TagTechnologyNfcB.prototype.setTag = function (property) {
	this.tag = property;
};
module.exports = function (properties) {
	return new TagTechnologyNfcB(properties);
};