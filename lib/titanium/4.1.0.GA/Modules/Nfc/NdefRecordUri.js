var crypto = require('crypto');
function NdefRecordUri(__SLAG__properties) {
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
			'uri',
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
		throw new Error('Modules.Nfc.NdefRecordUri.apiName is read only property');
	}
	this.apiName = 'Modules.Nfc.NdefRecordUri';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.payload = __SLAG__properties.payload || {};
	if (__SLAG__properties.recordType) {
		throw new Error('Modules.Nfc.NdefRecordUri.recordType is read only property');
	}
	this.recordType = '';
	if (__SLAG__properties.id) {
		throw new Error('Modules.Nfc.NdefRecordUri.id is read only property');
	}
	this.id = '';
	if (__SLAG__properties.tnf) {
		throw new Error('Modules.Nfc.NdefRecordUri.tnf is read only property');
	}
	this.tnf = 0;
	if (__SLAG__properties.type) {
		throw new Error('Modules.Nfc.NdefRecordUri.type is read only property');
	}
	this.type = '';
	if (__SLAG__properties.hashCode) {
		throw new Error('Modules.Nfc.NdefRecordUri.hashCode is read only property');
	}
	this.hashCode = 0;
	this.uri = __SLAG__properties.uri || '';
	this.id = __SLAG__properties.id || '';
	return this;
}
NdefRecordUri.prototype.getRecordType = function () {
	return this.recordType;
};
NdefRecordUri.prototype.getId = function () {
	return this.id;
};
NdefRecordUri.prototype.getTnf = function () {
	return this.tnf;
};
NdefRecordUri.prototype.getType = function () {
	return this.type;
};
NdefRecordUri.prototype.getHashCode = function () {
	return this.hashCode;
};
NdefRecordUri.prototype.getApiName = function () {
	return this.apiName;
};
NdefRecordUri.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
NdefRecordUri.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
NdefRecordUri.prototype.getPayload = function () {
	return this.payload;
};
NdefRecordUri.prototype.setPayload = function (property) {
	this.payload = property;
};
NdefRecordUri.prototype.getRecordType = function () {
	return this.recordType;
};
NdefRecordUri.prototype.getId = function () {
	return this.id;
};
NdefRecordUri.prototype.getTnf = function () {
	return this.tnf;
};
NdefRecordUri.prototype.getType = function () {
	return this.type;
};
NdefRecordUri.prototype.getHashCode = function () {
	return this.hashCode;
};
NdefRecordUri.prototype.getUri = function () {
	return this.uri;
};
NdefRecordUri.prototype.setUri = function (property) {
	this.uri = property;
};
module.exports = function (properties) {
	return new NdefRecordUri(properties);
};