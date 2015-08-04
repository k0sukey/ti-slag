var crypto = require('crypto');
function NdefRecordMedia(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'apiName',
			'lifecycleContainer',
			'payload',
			'recordType',
			'id',
			'tnf',
			'type',
			'hashCode',
			'mimeType',
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
		throw new Error('Modules.Nfc.NdefRecordMedia.apiName is read only property');
	}
	this.apiName = 'Modules.Nfc.NdefRecordMedia';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.payload = __SLAG__properties.payload || {};
	if (__SLAG__properties.recordType) {
		throw new Error('Modules.Nfc.NdefRecordMedia.recordType is read only property');
	}
	this.recordType = '';
	if (__SLAG__properties.id) {
		throw new Error('Modules.Nfc.NdefRecordMedia.id is read only property');
	}
	this.id = '';
	if (__SLAG__properties.tnf) {
		throw new Error('Modules.Nfc.NdefRecordMedia.tnf is read only property');
	}
	this.tnf = 0;
	if (__SLAG__properties.type) {
		throw new Error('Modules.Nfc.NdefRecordMedia.type is read only property');
	}
	this.type = '';
	if (__SLAG__properties.hashCode) {
		throw new Error('Modules.Nfc.NdefRecordMedia.hashCode is read only property');
	}
	this.hashCode = 0;
	this.mimeType = __SLAG__properties.mimeType || '';
	this.id = __SLAG__properties.id || '';
	return this;
}
NdefRecordMedia.prototype.getRecordType = function () {
	return this.recordType;
};
NdefRecordMedia.prototype.getId = function () {
	return this.id;
};
NdefRecordMedia.prototype.getTnf = function () {
	return this.tnf;
};
NdefRecordMedia.prototype.getType = function () {
	return this.type;
};
NdefRecordMedia.prototype.getHashCode = function () {
	return this.hashCode;
};
NdefRecordMedia.prototype.getApiName = function () {
	return this.apiName;
};
NdefRecordMedia.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
NdefRecordMedia.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
NdefRecordMedia.prototype.getPayload = function () {
	return this.payload;
};
NdefRecordMedia.prototype.setPayload = function (property) {
	this.payload = property;
};
NdefRecordMedia.prototype.getRecordType = function () {
	return this.recordType;
};
NdefRecordMedia.prototype.getId = function () {
	return this.id;
};
NdefRecordMedia.prototype.getTnf = function () {
	return this.tnf;
};
NdefRecordMedia.prototype.getType = function () {
	return this.type;
};
NdefRecordMedia.prototype.getHashCode = function () {
	return this.hashCode;
};
NdefRecordMedia.prototype.getMimeType = function () {
	return this.mimeType;
};
NdefRecordMedia.prototype.setMimeType = function (property) {
	this.mimeType = property;
};
module.exports = function (properties) {
	return new NdefRecordMedia(properties);
};