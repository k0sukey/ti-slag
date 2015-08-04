var crypto = require('crypto');
function TagTechnologyMifareClassic(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'apiName',
			'lifecycleContainer',
			'tag',
			'KEY_DEFAULT',
			'KEY_MIFARE_APPLICATION_DIRECTORY',
			'KEY_NFC_FORUM',
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
		throw new Error('Modules.Nfc.TagTechnologyMifareClassic.apiName is read only property');
	}
	this.apiName = 'Modules.Nfc.TagTechnologyMifareClassic';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.tag = __SLAG__properties.tag || {};
	if (__SLAG__properties.KEY_DEFAULT) {
		throw new Error('Modules.Nfc.TagTechnologyMifareClassic.KEY_DEFAULT is read only property');
	}
	this.KEY_DEFAULT = {};
	if (__SLAG__properties.KEY_MIFARE_APPLICATION_DIRECTORY) {
		throw new Error('Modules.Nfc.TagTechnologyMifareClassic.KEY_MIFARE_APPLICATION_DIRECTORY is read only property');
	}
	this.KEY_MIFARE_APPLICATION_DIRECTORY = {};
	if (__SLAG__properties.KEY_NFC_FORUM) {
		throw new Error('Modules.Nfc.TagTechnologyMifareClassic.KEY_NFC_FORUM is read only property');
	}
	this.KEY_NFC_FORUM = {};
	this.id = __SLAG__properties.id || '';
	return this;
}
TagTechnologyMifareClassic.prototype.isValid = function () {
	return true;
};
TagTechnologyMifareClassic.prototype.close = function () {
};
TagTechnologyMifareClassic.prototype.connect = function () {
};
TagTechnologyMifareClassic.prototype.isConnected = function () {
	return true;
};
TagTechnologyMifareClassic.prototype.authenticateSectorWithKeyA = function () {
	return true;
};
TagTechnologyMifareClassic.prototype.authenticateSectorWithKeyB = function () {
	return true;
};
TagTechnologyMifareClassic.prototype.blockToSector = function () {
	return 0;
};
TagTechnologyMifareClassic.prototype.decrement = function () {
};
TagTechnologyMifareClassic.prototype.getBlockCount = function () {
	return 0;
};
TagTechnologyMifareClassic.prototype.getBlockCountInSector = function () {
	return 0;
};
TagTechnologyMifareClassic.prototype.getMaxTransceiveLength = function () {
	return 0;
};
TagTechnologyMifareClassic.prototype.getSectorCount = function () {
	return 0;
};
TagTechnologyMifareClassic.prototype.getSize = function () {
	return 0;
};
TagTechnologyMifareClassic.prototype.getTimeout = function () {
	return 0;
};
TagTechnologyMifareClassic.prototype.getType = function () {
	return 0;
};
TagTechnologyMifareClassic.prototype.increment = function () {
};
TagTechnologyMifareClassic.prototype.readBlock = function () {
	return {};
};
TagTechnologyMifareClassic.prototype.restore = function () {
};
TagTechnologyMifareClassic.prototype.sectorToBlock = function () {
	return 0;
};
TagTechnologyMifareClassic.prototype.setTimeout = function () {
};
TagTechnologyMifareClassic.prototype.transceive = function () {
	return {};
};
TagTechnologyMifareClassic.prototype.transfer = function () {
};
TagTechnologyMifareClassic.prototype.writeBlock = function () {
};
TagTechnologyMifareClassic.prototype.getApiName = function () {
	return this.apiName;
};
TagTechnologyMifareClassic.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
TagTechnologyMifareClassic.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
TagTechnologyMifareClassic.prototype.getTag = function () {
	return this.tag;
};
TagTechnologyMifareClassic.prototype.setTag = function (property) {
	this.tag = property;
};
module.exports = function (properties) {
	return new TagTechnologyMifareClassic(properties);
};