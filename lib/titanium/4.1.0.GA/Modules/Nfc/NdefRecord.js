var crypto = require('crypto');
function NdefRecord(__SLAG__properties) {
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
		throw new Error('Modules.Nfc.NdefRecord.apiName is read only property');
	}
	this.apiName = 'Modules.Nfc.NdefRecord';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.payload = __SLAG__properties.payload || {};
	if (__SLAG__properties.recordType) {
		throw new Error('Modules.Nfc.NdefRecord.recordType is read only property');
	}
	this.recordType = '';
	if (__SLAG__properties.id) {
		throw new Error('Modules.Nfc.NdefRecord.id is read only property');
	}
	this.id = '';
	if (__SLAG__properties.tnf) {
		throw new Error('Modules.Nfc.NdefRecord.tnf is read only property');
	}
	this.tnf = 0;
	if (__SLAG__properties.type) {
		throw new Error('Modules.Nfc.NdefRecord.type is read only property');
	}
	this.type = '';
	if (__SLAG__properties.hashCode) {
		throw new Error('Modules.Nfc.NdefRecord.hashCode is read only property');
	}
	this.hashCode = 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
NdefRecord.prototype.getRecordType = function () {
	return this.recordType;
};
NdefRecord.prototype.getId = function () {
	return this.id;
};
NdefRecord.prototype.getTnf = function () {
	return this.tnf;
};
NdefRecord.prototype.getType = function () {
	return this.type;
};
NdefRecord.prototype.getHashCode = function () {
	return this.hashCode;
};
NdefRecord.prototype.getApiName = function () {
	return this.apiName;
};
NdefRecord.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
NdefRecord.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
NdefRecord.prototype.getPayload = function () {
	return this.payload;
};
NdefRecord.prototype.setPayload = function (property) {
	this.payload = property;
};
NdefRecord.prototype.getRecordType = function () {
	return this.recordType;
};
NdefRecord.prototype.getId = function () {
	return this.id;
};
NdefRecord.prototype.getTnf = function () {
	return this.tnf;
};
NdefRecord.prototype.getType = function () {
	return this.type;
};
module.exports = function (properties) {
	return new NdefRecord(properties);
};