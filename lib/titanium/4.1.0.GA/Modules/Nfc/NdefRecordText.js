var crypto = require('crypto');
function NdefRecordText(__SLAG__properties) {
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
			'text',
			'languageCode',
			'encoding',
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
		throw new Error('Modules.Nfc.NdefRecordText.apiName is read only property');
	}
	this.apiName = 'Modules.Nfc.NdefRecordText';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.payload = __SLAG__properties.payload || {};
	if (__SLAG__properties.recordType) {
		throw new Error('Modules.Nfc.NdefRecordText.recordType is read only property');
	}
	this.recordType = '';
	if (__SLAG__properties.id) {
		throw new Error('Modules.Nfc.NdefRecordText.id is read only property');
	}
	this.id = '';
	if (__SLAG__properties.tnf) {
		throw new Error('Modules.Nfc.NdefRecordText.tnf is read only property');
	}
	this.tnf = 0;
	if (__SLAG__properties.type) {
		throw new Error('Modules.Nfc.NdefRecordText.type is read only property');
	}
	this.type = '';
	if (__SLAG__properties.hashCode) {
		throw new Error('Modules.Nfc.NdefRecordText.hashCode is read only property');
	}
	this.hashCode = 0;
	this.text = __SLAG__properties.text || '';
	this.languageCode = __SLAG__properties.languageCode || '';
	this.encoding = __SLAG__properties.encoding || '';
	this.id = __SLAG__properties.id || '';
	return this;
}
NdefRecordText.prototype.getRecordType = function () {
	return this.recordType;
};
NdefRecordText.prototype.getId = function () {
	return this.id;
};
NdefRecordText.prototype.getTnf = function () {
	return this.tnf;
};
NdefRecordText.prototype.getType = function () {
	return this.type;
};
NdefRecordText.prototype.getHashCode = function () {
	return this.hashCode;
};
NdefRecordText.prototype.getApiName = function () {
	return this.apiName;
};
NdefRecordText.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
NdefRecordText.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
NdefRecordText.prototype.getPayload = function () {
	return this.payload;
};
NdefRecordText.prototype.setPayload = function (property) {
	this.payload = property;
};
NdefRecordText.prototype.getRecordType = function () {
	return this.recordType;
};
NdefRecordText.prototype.getId = function () {
	return this.id;
};
NdefRecordText.prototype.getTnf = function () {
	return this.tnf;
};
NdefRecordText.prototype.getType = function () {
	return this.type;
};
NdefRecordText.prototype.getHashCode = function () {
	return this.hashCode;
};
NdefRecordText.prototype.getText = function () {
	return this.text;
};
NdefRecordText.prototype.setText = function (property) {
	this.text = property;
};
NdefRecordText.prototype.getLanguageCode = function () {
	return this.languageCode;
};
NdefRecordText.prototype.setLanguageCode = function (property) {
	this.languageCode = property;
};
NdefRecordText.prototype.getEncoding = function () {
	return this.encoding;
};
NdefRecordText.prototype.setEncoding = function (property) {
	this.encoding = property;
};
module.exports = function (properties) {
	return new NdefRecordText(properties);
};