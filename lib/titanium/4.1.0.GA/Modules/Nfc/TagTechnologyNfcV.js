var crypto = require('crypto');
function TagTechnologyNfcV(__SLAG__properties) {
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
		throw new Error('Modules.Nfc.TagTechnologyNfcV.apiName is read only property');
	}
	this.apiName = 'Modules.Nfc.TagTechnologyNfcV';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.tag = __SLAG__properties.tag || {};
	this.id = __SLAG__properties.id || '';
	return this;
}
TagTechnologyNfcV.prototype.isValid = function () {
	return true;
};
TagTechnologyNfcV.prototype.close = function () {
};
TagTechnologyNfcV.prototype.connect = function () {
};
TagTechnologyNfcV.prototype.isConnected = function () {
	return true;
};
TagTechnologyNfcV.prototype.getDsfId = function () {
	return 0;
};
TagTechnologyNfcV.prototype.getMaxTransceiveLength = function () {
	return 0;
};
TagTechnologyNfcV.prototype.getResponseFlags = function () {
	return 0;
};
TagTechnologyNfcV.prototype.transceive = function () {
	return {};
};
TagTechnologyNfcV.prototype.getApiName = function () {
	return this.apiName;
};
TagTechnologyNfcV.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
TagTechnologyNfcV.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
TagTechnologyNfcV.prototype.getTag = function () {
	return this.tag;
};
TagTechnologyNfcV.prototype.setTag = function (property) {
	this.tag = property;
};
module.exports = function (properties) {
	return new TagTechnologyNfcV(properties);
};