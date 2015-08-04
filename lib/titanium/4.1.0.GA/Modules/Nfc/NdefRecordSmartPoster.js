var crypto = require('crypto');
function NdefRecordSmartPoster(__SLAG__properties) {
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
			'title',
			'uri',
			'action',
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
		throw new Error('Modules.Nfc.NdefRecordSmartPoster.apiName is read only property');
	}
	this.apiName = 'Modules.Nfc.NdefRecordSmartPoster';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.payload = __SLAG__properties.payload || {};
	if (__SLAG__properties.recordType) {
		throw new Error('Modules.Nfc.NdefRecordSmartPoster.recordType is read only property');
	}
	this.recordType = '';
	if (__SLAG__properties.id) {
		throw new Error('Modules.Nfc.NdefRecordSmartPoster.id is read only property');
	}
	this.id = '';
	if (__SLAG__properties.tnf) {
		throw new Error('Modules.Nfc.NdefRecordSmartPoster.tnf is read only property');
	}
	this.tnf = 0;
	if (__SLAG__properties.type) {
		throw new Error('Modules.Nfc.NdefRecordSmartPoster.type is read only property');
	}
	this.type = '';
	if (__SLAG__properties.hashCode) {
		throw new Error('Modules.Nfc.NdefRecordSmartPoster.hashCode is read only property');
	}
	this.hashCode = 0;
	this.title = __SLAG__properties.title || '';
	this.uri = __SLAG__properties.uri || '';
	this.action = __SLAG__properties.action || 0;
	this.mimeType = __SLAG__properties.mimeType || '';
	this.id = __SLAG__properties.id || '';
	return this;
}
NdefRecordSmartPoster.prototype.getRecordType = function () {
	return this.recordType;
};
NdefRecordSmartPoster.prototype.getId = function () {
	return this.id;
};
NdefRecordSmartPoster.prototype.getTnf = function () {
	return this.tnf;
};
NdefRecordSmartPoster.prototype.getType = function () {
	return this.type;
};
NdefRecordSmartPoster.prototype.getHashCode = function () {
	return this.hashCode;
};
NdefRecordSmartPoster.prototype.getApiName = function () {
	return this.apiName;
};
NdefRecordSmartPoster.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
NdefRecordSmartPoster.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
NdefRecordSmartPoster.prototype.getPayload = function () {
	return this.payload;
};
NdefRecordSmartPoster.prototype.setPayload = function (property) {
	this.payload = property;
};
NdefRecordSmartPoster.prototype.getRecordType = function () {
	return this.recordType;
};
NdefRecordSmartPoster.prototype.getId = function () {
	return this.id;
};
NdefRecordSmartPoster.prototype.getTnf = function () {
	return this.tnf;
};
NdefRecordSmartPoster.prototype.getType = function () {
	return this.type;
};
NdefRecordSmartPoster.prototype.getHashCode = function () {
	return this.hashCode;
};
NdefRecordSmartPoster.prototype.getTitle = function () {
	return this.title;
};
NdefRecordSmartPoster.prototype.setTitle = function (property) {
	this.title = property;
};
NdefRecordSmartPoster.prototype.getUri = function () {
	return this.uri;
};
NdefRecordSmartPoster.prototype.setUri = function (property) {
	this.uri = property;
};
NdefRecordSmartPoster.prototype.getAction = function () {
	return this.action;
};
NdefRecordSmartPoster.prototype.setAction = function (property) {
	this.action = property;
};
NdefRecordSmartPoster.prototype.getMimeType = function () {
	return this.mimeType;
};
NdefRecordSmartPoster.prototype.setMimeType = function (property) {
	this.mimeType = property;
};
module.exports = function (properties) {
	return new NdefRecordSmartPoster(properties);
};