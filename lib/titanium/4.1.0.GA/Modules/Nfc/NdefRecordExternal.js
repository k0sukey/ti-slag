var crypto = require('crypto');
function NdefRecordExternal(__SLAG__properties) {
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
			'domain',
			'domainType',
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
		throw new Error('Modules.Nfc.NdefRecordExternal.apiName is read only property');
	}
	this.apiName = 'Modules.Nfc.NdefRecordExternal';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.payload = __SLAG__properties.payload || {};
	if (__SLAG__properties.recordType) {
		throw new Error('Modules.Nfc.NdefRecordExternal.recordType is read only property');
	}
	this.recordType = '';
	if (__SLAG__properties.id) {
		throw new Error('Modules.Nfc.NdefRecordExternal.id is read only property');
	}
	this.id = '';
	if (__SLAG__properties.tnf) {
		throw new Error('Modules.Nfc.NdefRecordExternal.tnf is read only property');
	}
	this.tnf = 0;
	if (__SLAG__properties.type) {
		throw new Error('Modules.Nfc.NdefRecordExternal.type is read only property');
	}
	this.type = '';
	if (__SLAG__properties.hashCode) {
		throw new Error('Modules.Nfc.NdefRecordExternal.hashCode is read only property');
	}
	this.hashCode = 0;
	this.domain = __SLAG__properties.domain || '';
	this.domainType = __SLAG__properties.domainType || '';
	this.id = __SLAG__properties.id || '';
	return this;
}
NdefRecordExternal.prototype.getRecordType = function () {
	return this.recordType;
};
NdefRecordExternal.prototype.getId = function () {
	return this.id;
};
NdefRecordExternal.prototype.getTnf = function () {
	return this.tnf;
};
NdefRecordExternal.prototype.getType = function () {
	return this.type;
};
NdefRecordExternal.prototype.getHashCode = function () {
	return this.hashCode;
};
NdefRecordExternal.prototype.getApiName = function () {
	return this.apiName;
};
NdefRecordExternal.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
NdefRecordExternal.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
NdefRecordExternal.prototype.getPayload = function () {
	return this.payload;
};
NdefRecordExternal.prototype.setPayload = function (property) {
	this.payload = property;
};
NdefRecordExternal.prototype.getRecordType = function () {
	return this.recordType;
};
NdefRecordExternal.prototype.getId = function () {
	return this.id;
};
NdefRecordExternal.prototype.getTnf = function () {
	return this.tnf;
};
NdefRecordExternal.prototype.getType = function () {
	return this.type;
};
NdefRecordExternal.prototype.getHashCode = function () {
	return this.hashCode;
};
NdefRecordExternal.prototype.getDomain = function () {
	return this.domain;
};
NdefRecordExternal.prototype.setDomain = function (property) {
	this.domain = property;
};
NdefRecordExternal.prototype.getDomainType = function () {
	return this.domainType;
};
NdefRecordExternal.prototype.setDomainType = function (property) {
	this.domainType = property;
};
module.exports = function (properties) {
	return new NdefRecordExternal(properties);
};