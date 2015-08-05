var crypto = require('crypto');
function NdefRecordText(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
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
	if (__SLAG_NAMES.length > 0 && process.env.SLAG_STRICT === 'true') {
		for (var __SLAG_NAME in __SLAG_PROPERTIES) {
			if (__SLAG_NAMES.indexOf(__SLAG_NAME) === -1) {
				throw new Error('Use user custom property ' + __SLAG_NAME);
			}
		}
	} else if (__SLAG_NAMES.length === 0 && __SLAG_PROPERTIES.length > 0 && process.env.SLAG_STRICT === 'true') {
		throw new Error('Use user custom properties. ' + __SLAG_PROPERTIES.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Modules.Nfc.NdefRecordText.apiName is read only property');
	}
	this.apiName = 'Modules.Nfc.NdefRecordText';
	this.lifecycleContainer = __SLAG_PROPERTIES.lifecycleContainer || {};
	this.payload = __SLAG_PROPERTIES.payload || {};
	if (__SLAG_PROPERTIES.recordType) {
		throw new Error('Modules.Nfc.NdefRecordText.recordType is read only property');
	}
	this.recordType = '';
	if (__SLAG_PROPERTIES.id) {
		throw new Error('Modules.Nfc.NdefRecordText.id is read only property');
	}
	this.id = '';
	if (__SLAG_PROPERTIES.tnf) {
		throw new Error('Modules.Nfc.NdefRecordText.tnf is read only property');
	}
	this.tnf = 0;
	if (__SLAG_PROPERTIES.type) {
		throw new Error('Modules.Nfc.NdefRecordText.type is read only property');
	}
	this.type = '';
	if (__SLAG_PROPERTIES.hashCode) {
		throw new Error('Modules.Nfc.NdefRecordText.hashCode is read only property');
	}
	this.hashCode = 0;
	this.text = __SLAG_PROPERTIES.text || '';
	this.languageCode = __SLAG_PROPERTIES.languageCode || '';
	this.encoding = __SLAG_PROPERTIES.encoding || '';
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
NdefRecordText.prototype.getRecordType = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.recordType;
};
NdefRecordText.prototype.getId = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.id;
};
NdefRecordText.prototype.getTnf = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.tnf;
};
NdefRecordText.prototype.getType = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.type;
};
NdefRecordText.prototype.getHashCode = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.hashCode;
};
NdefRecordText.prototype.getApiName = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
NdefRecordText.prototype.getLifecycleContainer = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lifecycleContainer;
};
NdefRecordText.prototype.setLifecycleContainer = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.lifecycleContainer = __SLAG__PROPERTY;
};
NdefRecordText.prototype.getPayload = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.payload;
};
NdefRecordText.prototype.setPayload = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.payload = __SLAG__PROPERTY;
};
NdefRecordText.prototype.getRecordType = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.recordType;
};
NdefRecordText.prototype.getId = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.id;
};
NdefRecordText.prototype.getTnf = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.tnf;
};
NdefRecordText.prototype.getType = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.type;
};
NdefRecordText.prototype.getHashCode = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.hashCode;
};
NdefRecordText.prototype.getText = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.text;
};
NdefRecordText.prototype.setText = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.text = __SLAG__PROPERTY;
};
NdefRecordText.prototype.getLanguageCode = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.languageCode;
};
NdefRecordText.prototype.setLanguageCode = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.languageCode = __SLAG__PROPERTY;
};
NdefRecordText.prototype.getEncoding = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.encoding;
};
NdefRecordText.prototype.setEncoding = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.encoding = __SLAG__PROPERTY;
};
module.exports = function (properties) {
	return new NdefRecordText(properties);
};