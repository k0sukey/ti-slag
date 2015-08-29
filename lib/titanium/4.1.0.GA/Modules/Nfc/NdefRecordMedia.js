var crypto = require('crypto');
function NdefRecordMedia(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
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
		throw new Error('Modules.Nfc.NdefRecordMedia.apiName is read only property');
	}
	this.apiName = 'Modules.Nfc.NdefRecordMedia';
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.lifecycleContainer = undefined;
	} else {
		this.lifecycleContainer = __SLAG_PROPERTIES.lifecycleContainer || {};
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.payload = undefined;
	} else {
		this.payload = __SLAG_PROPERTIES.payload || {};
	}
	if (__SLAG_PROPERTIES.recordType) {
		throw new Error('Modules.Nfc.NdefRecordMedia.recordType is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.recordType = undefined;
	} else {
		this.recordType = '';
	}
	if (__SLAG_PROPERTIES.id) {
		throw new Error('Modules.Nfc.NdefRecordMedia.id is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.id = undefined;
	} else {
		this.id = '';
	}
	if (__SLAG_PROPERTIES.tnf) {
		throw new Error('Modules.Nfc.NdefRecordMedia.tnf is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.tnf = undefined;
	} else {
		this.tnf = 0;
	}
	if (__SLAG_PROPERTIES.type) {
		throw new Error('Modules.Nfc.NdefRecordMedia.type is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.type = undefined;
	} else {
		this.type = '';
	}
	if (__SLAG_PROPERTIES.hashCode) {
		throw new Error('Modules.Nfc.NdefRecordMedia.hashCode is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.hashCode = undefined;
	} else {
		this.hashCode = 0;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.mimeType = undefined;
	} else {
		this.mimeType = __SLAG_PROPERTIES.mimeType || '';
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
NdefRecordMedia.prototype.getRecordType = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.recordType;
};
NdefRecordMedia.prototype.getId = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.id;
};
NdefRecordMedia.prototype.getTnf = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.tnf;
};
NdefRecordMedia.prototype.getType = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.type;
};
NdefRecordMedia.prototype.getHashCode = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.hashCode;
};
NdefRecordMedia.prototype.getApiName = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
NdefRecordMedia.prototype.getLifecycleContainer = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lifecycleContainer;
};
NdefRecordMedia.prototype.setLifecycleContainer = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.lifecycleContainer = __SLAG__PROPERTY;
};
NdefRecordMedia.prototype.getPayload = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.payload;
};
NdefRecordMedia.prototype.setPayload = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.payload = __SLAG__PROPERTY;
};
NdefRecordMedia.prototype.getRecordType = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.recordType;
};
NdefRecordMedia.prototype.getId = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.id;
};
NdefRecordMedia.prototype.getTnf = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.tnf;
};
NdefRecordMedia.prototype.getType = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.type;
};
NdefRecordMedia.prototype.getHashCode = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.hashCode;
};
NdefRecordMedia.prototype.getMimeType = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.mimeType;
};
NdefRecordMedia.prototype.setMimeType = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.mimeType = __SLAG__PROPERTY;
};
module.exports = function (properties) {
	return new NdefRecordMedia(properties);
};