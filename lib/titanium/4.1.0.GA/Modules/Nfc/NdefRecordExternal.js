var crypto = require('crypto');
function NdefRecordExternal(__SLAG_PROPERTIES) {
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
			'domain',
			'domainType',
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
		throw new Error('Modules.Nfc.NdefRecordExternal.apiName is read only property');
	}
	this.apiName = 'Modules.Nfc.NdefRecordExternal';
	this.lifecycleContainer = __SLAG_PROPERTIES.lifecycleContainer || {};
	this.payload = __SLAG_PROPERTIES.payload || {};
	if (__SLAG_PROPERTIES.recordType) {
		throw new Error('Modules.Nfc.NdefRecordExternal.recordType is read only property');
	}
	this.recordType = '';
	if (__SLAG_PROPERTIES.id) {
		throw new Error('Modules.Nfc.NdefRecordExternal.id is read only property');
	}
	this.id = '';
	if (__SLAG_PROPERTIES.tnf) {
		throw new Error('Modules.Nfc.NdefRecordExternal.tnf is read only property');
	}
	this.tnf = 0;
	if (__SLAG_PROPERTIES.type) {
		throw new Error('Modules.Nfc.NdefRecordExternal.type is read only property');
	}
	this.type = '';
	if (__SLAG_PROPERTIES.hashCode) {
		throw new Error('Modules.Nfc.NdefRecordExternal.hashCode is read only property');
	}
	this.hashCode = 0;
	this.domain = __SLAG_PROPERTIES.domain || '';
	this.domainType = __SLAG_PROPERTIES.domainType || '';
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
NdefRecordExternal.prototype.getRecordType = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.recordType;
};
NdefRecordExternal.prototype.getId = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.id;
};
NdefRecordExternal.prototype.getTnf = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.tnf;
};
NdefRecordExternal.prototype.getType = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.type;
};
NdefRecordExternal.prototype.getHashCode = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.hashCode;
};
NdefRecordExternal.prototype.getApiName = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
NdefRecordExternal.prototype.getLifecycleContainer = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lifecycleContainer;
};
NdefRecordExternal.prototype.setLifecycleContainer = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.lifecycleContainer = __SLAG__PROPERTY;
};
NdefRecordExternal.prototype.getPayload = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.payload;
};
NdefRecordExternal.prototype.setPayload = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.payload = __SLAG__PROPERTY;
};
NdefRecordExternal.prototype.getRecordType = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.recordType;
};
NdefRecordExternal.prototype.getId = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.id;
};
NdefRecordExternal.prototype.getTnf = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.tnf;
};
NdefRecordExternal.prototype.getType = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.type;
};
NdefRecordExternal.prototype.getHashCode = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.hashCode;
};
NdefRecordExternal.prototype.getDomain = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.domain;
};
NdefRecordExternal.prototype.setDomain = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.domain = __SLAG__PROPERTY;
};
NdefRecordExternal.prototype.getDomainType = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.domainType;
};
NdefRecordExternal.prototype.setDomainType = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.domainType = __SLAG__PROPERTY;
};
module.exports = function (properties) {
	return new NdefRecordExternal(properties);
};