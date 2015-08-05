var crypto = require('crypto');
function Nfc(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'apiName',
			'lifecycleContainer',
			'ACTION_NDEF_DISCOVERED',
			'ACTION_TAG_DISCOVERED',
			'ACTION_TECH_DISCOVERED',
			'TNF_ABSOLUTE_URI',
			'TNF_EMPTY',
			'TNF_EXTERNAL_TYPE',
			'TNF_MIME_MEDIA',
			'TNF_UNCHANGED',
			'TNF_UNKNOWN',
			'TNF_WELL_KNOWN',
			'RTD_ALTERNATIVE_CARRIER',
			'RTD_HANDOVER_CARRIER',
			'RTD_HANDOVER_REQUEST',
			'RTD_HANDOVER_SELECT',
			'RTD_SMART_POSTER',
			'RTD_TEXT',
			'RTD_URI',
			'TECH_ISODEP',
			'TECH_MIFARE_CLASSIC',
			'TECH_MIFARE_ULTRALIGHT',
			'TECH_NDEF',
			'TECH_NDEFFORMATABLE',
			'TECH_NFCA',
			'TECH_NFCB',
			'TECH_NFCF',
			'TECH_NFCV',
			'ENCODING_UTF8',
			'ENCODING_UTF16',
			'RECOMMENDED_ACTION_UNKNOWN',
			'RECOMMENDED_ACTION_DO_ACTION',
			'RECOMMENDED_ACTION_SAVE_FOR_LATER',
			'RECOMMENDED_ACTION_OPEN_FOR_EDITING',
			'TAG_TYPE_NFC_FORUM_TYPE_1',
			'TAG_TYPE_NFC_FORUM_TYPE_2',
			'TAG_TYPE_NFC_FORUM_TYPE_3',
			'TAG_TYPE_NFC_FORUM_TYPE_4',
			'TAG_TYPE_MIFARE_CLASSIC',
			'MIFARE_TAG_TYPE_CLASSIC',
			'MIFARE_TAG_TYPE_PLUS',
			'MIFARE_TAG_TYPE_PRO',
			'MIFARE_TAG_TYPE_UNKNOWN',
			'MIFARE_BLOCK_SIZE',
			'MIFARE_SIZE_1K',
			'MIFARE_SIZE_2K',
			'MIFARE_SIZE_4K',
			'MIFARE_SIZE_MINI',
			'MIFARE_ULTRALIGHT_PAGE_SIZE',
			'MIFARE_ULTRALIGHT_TYPE_ULTRALIGHT',
			'MIFARE_ULTRALIGHT_TYPE_ULTRALIGHT_C',
			'MIFARE_ULTRALIGHT_TYPE_UNKNOWN',
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
		throw new Error('Modules.Nfc.apiName is read only property');
	}
	this.apiName = 'Modules.Nfc';
	this.lifecycleContainer = __SLAG_PROPERTIES.lifecycleContainer || {};
	if (__SLAG_PROPERTIES.ACTION_NDEF_DISCOVERED) {
		throw new Error('Modules.Nfc.ACTION_NDEF_DISCOVERED is read only property');
	}
	this.ACTION_NDEF_DISCOVERED = '';
	if (__SLAG_PROPERTIES.ACTION_TAG_DISCOVERED) {
		throw new Error('Modules.Nfc.ACTION_TAG_DISCOVERED is read only property');
	}
	this.ACTION_TAG_DISCOVERED = '';
	if (__SLAG_PROPERTIES.ACTION_TECH_DISCOVERED) {
		throw new Error('Modules.Nfc.ACTION_TECH_DISCOVERED is read only property');
	}
	this.ACTION_TECH_DISCOVERED = '';
	if (__SLAG_PROPERTIES.TNF_ABSOLUTE_URI) {
		throw new Error('Modules.Nfc.TNF_ABSOLUTE_URI is read only property');
	}
	this.TNF_ABSOLUTE_URI = 0;
	if (__SLAG_PROPERTIES.TNF_EMPTY) {
		throw new Error('Modules.Nfc.TNF_EMPTY is read only property');
	}
	this.TNF_EMPTY = 0;
	if (__SLAG_PROPERTIES.TNF_EXTERNAL_TYPE) {
		throw new Error('Modules.Nfc.TNF_EXTERNAL_TYPE is read only property');
	}
	this.TNF_EXTERNAL_TYPE = 0;
	if (__SLAG_PROPERTIES.TNF_MIME_MEDIA) {
		throw new Error('Modules.Nfc.TNF_MIME_MEDIA is read only property');
	}
	this.TNF_MIME_MEDIA = 0;
	if (__SLAG_PROPERTIES.TNF_UNCHANGED) {
		throw new Error('Modules.Nfc.TNF_UNCHANGED is read only property');
	}
	this.TNF_UNCHANGED = 0;
	if (__SLAG_PROPERTIES.TNF_UNKNOWN) {
		throw new Error('Modules.Nfc.TNF_UNKNOWN is read only property');
	}
	this.TNF_UNKNOWN = 0;
	if (__SLAG_PROPERTIES.TNF_WELL_KNOWN) {
		throw new Error('Modules.Nfc.TNF_WELL_KNOWN is read only property');
	}
	this.TNF_WELL_KNOWN = 0;
	if (__SLAG_PROPERTIES.RTD_ALTERNATIVE_CARRIER) {
		throw new Error('Modules.Nfc.RTD_ALTERNATIVE_CARRIER is read only property');
	}
	this.RTD_ALTERNATIVE_CARRIER = '';
	if (__SLAG_PROPERTIES.RTD_HANDOVER_CARRIER) {
		throw new Error('Modules.Nfc.RTD_HANDOVER_CARRIER is read only property');
	}
	this.RTD_HANDOVER_CARRIER = '';
	if (__SLAG_PROPERTIES.RTD_HANDOVER_REQUEST) {
		throw new Error('Modules.Nfc.RTD_HANDOVER_REQUEST is read only property');
	}
	this.RTD_HANDOVER_REQUEST = '';
	if (__SLAG_PROPERTIES.RTD_HANDOVER_SELECT) {
		throw new Error('Modules.Nfc.RTD_HANDOVER_SELECT is read only property');
	}
	this.RTD_HANDOVER_SELECT = '';
	if (__SLAG_PROPERTIES.RTD_SMART_POSTER) {
		throw new Error('Modules.Nfc.RTD_SMART_POSTER is read only property');
	}
	this.RTD_SMART_POSTER = '';
	if (__SLAG_PROPERTIES.RTD_TEXT) {
		throw new Error('Modules.Nfc.RTD_TEXT is read only property');
	}
	this.RTD_TEXT = '';
	if (__SLAG_PROPERTIES.RTD_URI) {
		throw new Error('Modules.Nfc.RTD_URI is read only property');
	}
	this.RTD_URI = '';
	if (__SLAG_PROPERTIES.TECH_ISODEP) {
		throw new Error('Modules.Nfc.TECH_ISODEP is read only property');
	}
	this.TECH_ISODEP = 0;
	if (__SLAG_PROPERTIES.TECH_MIFARE_CLASSIC) {
		throw new Error('Modules.Nfc.TECH_MIFARE_CLASSIC is read only property');
	}
	this.TECH_MIFARE_CLASSIC = 0;
	if (__SLAG_PROPERTIES.TECH_MIFARE_ULTRALIGHT) {
		throw new Error('Modules.Nfc.TECH_MIFARE_ULTRALIGHT is read only property');
	}
	this.TECH_MIFARE_ULTRALIGHT = 0;
	if (__SLAG_PROPERTIES.TECH_NDEF) {
		throw new Error('Modules.Nfc.TECH_NDEF is read only property');
	}
	this.TECH_NDEF = 0;
	if (__SLAG_PROPERTIES.TECH_NDEFFORMATABLE) {
		throw new Error('Modules.Nfc.TECH_NDEFFORMATABLE is read only property');
	}
	this.TECH_NDEFFORMATABLE = 0;
	if (__SLAG_PROPERTIES.TECH_NFCA) {
		throw new Error('Modules.Nfc.TECH_NFCA is read only property');
	}
	this.TECH_NFCA = 0;
	if (__SLAG_PROPERTIES.TECH_NFCB) {
		throw new Error('Modules.Nfc.TECH_NFCB is read only property');
	}
	this.TECH_NFCB = 0;
	if (__SLAG_PROPERTIES.TECH_NFCF) {
		throw new Error('Modules.Nfc.TECH_NFCF is read only property');
	}
	this.TECH_NFCF = 0;
	if (__SLAG_PROPERTIES.TECH_NFCV) {
		throw new Error('Modules.Nfc.TECH_NFCV is read only property');
	}
	this.TECH_NFCV = 0;
	if (__SLAG_PROPERTIES.ENCODING_UTF8) {
		throw new Error('Modules.Nfc.ENCODING_UTF8 is read only property');
	}
	this.ENCODING_UTF8 = '';
	if (__SLAG_PROPERTIES.ENCODING_UTF16) {
		throw new Error('Modules.Nfc.ENCODING_UTF16 is read only property');
	}
	this.ENCODING_UTF16 = '';
	if (__SLAG_PROPERTIES.RECOMMENDED_ACTION_UNKNOWN) {
		throw new Error('Modules.Nfc.RECOMMENDED_ACTION_UNKNOWN is read only property');
	}
	this.RECOMMENDED_ACTION_UNKNOWN = 0;
	if (__SLAG_PROPERTIES.RECOMMENDED_ACTION_DO_ACTION) {
		throw new Error('Modules.Nfc.RECOMMENDED_ACTION_DO_ACTION is read only property');
	}
	this.RECOMMENDED_ACTION_DO_ACTION = 0;
	if (__SLAG_PROPERTIES.RECOMMENDED_ACTION_SAVE_FOR_LATER) {
		throw new Error('Modules.Nfc.RECOMMENDED_ACTION_SAVE_FOR_LATER is read only property');
	}
	this.RECOMMENDED_ACTION_SAVE_FOR_LATER = 0;
	if (__SLAG_PROPERTIES.RECOMMENDED_ACTION_OPEN_FOR_EDITING) {
		throw new Error('Modules.Nfc.RECOMMENDED_ACTION_OPEN_FOR_EDITING is read only property');
	}
	this.RECOMMENDED_ACTION_OPEN_FOR_EDITING = 0;
	if (__SLAG_PROPERTIES.TAG_TYPE_NFC_FORUM_TYPE_1) {
		throw new Error('Modules.Nfc.TAG_TYPE_NFC_FORUM_TYPE_1 is read only property');
	}
	this.TAG_TYPE_NFC_FORUM_TYPE_1 = '';
	if (__SLAG_PROPERTIES.TAG_TYPE_NFC_FORUM_TYPE_2) {
		throw new Error('Modules.Nfc.TAG_TYPE_NFC_FORUM_TYPE_2 is read only property');
	}
	this.TAG_TYPE_NFC_FORUM_TYPE_2 = '';
	if (__SLAG_PROPERTIES.TAG_TYPE_NFC_FORUM_TYPE_3) {
		throw new Error('Modules.Nfc.TAG_TYPE_NFC_FORUM_TYPE_3 is read only property');
	}
	this.TAG_TYPE_NFC_FORUM_TYPE_3 = '';
	if (__SLAG_PROPERTIES.TAG_TYPE_NFC_FORUM_TYPE_4) {
		throw new Error('Modules.Nfc.TAG_TYPE_NFC_FORUM_TYPE_4 is read only property');
	}
	this.TAG_TYPE_NFC_FORUM_TYPE_4 = '';
	if (__SLAG_PROPERTIES.TAG_TYPE_MIFARE_CLASSIC) {
		throw new Error('Modules.Nfc.TAG_TYPE_MIFARE_CLASSIC is read only property');
	}
	this.TAG_TYPE_MIFARE_CLASSIC = '';
	if (__SLAG_PROPERTIES.MIFARE_TAG_TYPE_CLASSIC) {
		throw new Error('Modules.Nfc.MIFARE_TAG_TYPE_CLASSIC is read only property');
	}
	this.MIFARE_TAG_TYPE_CLASSIC = 0;
	if (__SLAG_PROPERTIES.MIFARE_TAG_TYPE_PLUS) {
		throw new Error('Modules.Nfc.MIFARE_TAG_TYPE_PLUS is read only property');
	}
	this.MIFARE_TAG_TYPE_PLUS = 0;
	if (__SLAG_PROPERTIES.MIFARE_TAG_TYPE_PRO) {
		throw new Error('Modules.Nfc.MIFARE_TAG_TYPE_PRO is read only property');
	}
	this.MIFARE_TAG_TYPE_PRO = 0;
	if (__SLAG_PROPERTIES.MIFARE_TAG_TYPE_UNKNOWN) {
		throw new Error('Modules.Nfc.MIFARE_TAG_TYPE_UNKNOWN is read only property');
	}
	this.MIFARE_TAG_TYPE_UNKNOWN = 0;
	if (__SLAG_PROPERTIES.MIFARE_BLOCK_SIZE) {
		throw new Error('Modules.Nfc.MIFARE_BLOCK_SIZE is read only property');
	}
	this.MIFARE_BLOCK_SIZE = 0;
	if (__SLAG_PROPERTIES.MIFARE_SIZE_1K) {
		throw new Error('Modules.Nfc.MIFARE_SIZE_1K is read only property');
	}
	this.MIFARE_SIZE_1K = 0;
	if (__SLAG_PROPERTIES.MIFARE_SIZE_2K) {
		throw new Error('Modules.Nfc.MIFARE_SIZE_2K is read only property');
	}
	this.MIFARE_SIZE_2K = 0;
	if (__SLAG_PROPERTIES.MIFARE_SIZE_4K) {
		throw new Error('Modules.Nfc.MIFARE_SIZE_4K is read only property');
	}
	this.MIFARE_SIZE_4K = 0;
	if (__SLAG_PROPERTIES.MIFARE_SIZE_MINI) {
		throw new Error('Modules.Nfc.MIFARE_SIZE_MINI is read only property');
	}
	this.MIFARE_SIZE_MINI = 0;
	if (__SLAG_PROPERTIES.MIFARE_ULTRALIGHT_PAGE_SIZE) {
		throw new Error('Modules.Nfc.MIFARE_ULTRALIGHT_PAGE_SIZE is read only property');
	}
	this.MIFARE_ULTRALIGHT_PAGE_SIZE = 0;
	if (__SLAG_PROPERTIES.MIFARE_ULTRALIGHT_TYPE_ULTRALIGHT) {
		throw new Error('Modules.Nfc.MIFARE_ULTRALIGHT_TYPE_ULTRALIGHT is read only property');
	}
	this.MIFARE_ULTRALIGHT_TYPE_ULTRALIGHT = 0;
	if (__SLAG_PROPERTIES.MIFARE_ULTRALIGHT_TYPE_ULTRALIGHT_C) {
		throw new Error('Modules.Nfc.MIFARE_ULTRALIGHT_TYPE_ULTRALIGHT_C is read only property');
	}
	this.MIFARE_ULTRALIGHT_TYPE_ULTRALIGHT_C = 0;
	if (__SLAG_PROPERTIES.MIFARE_ULTRALIGHT_TYPE_UNKNOWN) {
		throw new Error('Modules.Nfc.MIFARE_ULTRALIGHT_TYPE_UNKNOWN is read only property');
	}
	this.MIFARE_ULTRALIGHT_TYPE_UNKNOWN = 0;
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
Nfc.prototype.createNdefMessage = function (__SLAG_PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var NdefMessage = require('./Nfc/NdefMessage');
	return NdefMessage(__SLAG_PROPERTY);
};
Nfc.prototype.createNdefRecordApplication = function (__SLAG_PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var NdefRecordApplication = require('./Nfc/NdefRecordApplication');
	return NdefRecordApplication(__SLAG_PROPERTY);
};
Nfc.prototype.createNdefRecordEmpty = function (__SLAG_PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var NdefRecordEmpty = require('./Nfc/NdefRecordEmpty');
	return NdefRecordEmpty(__SLAG_PROPERTY);
};
Nfc.prototype.createNdefRecordExternal = function (__SLAG_PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var NdefRecordExternal = require('./Nfc/NdefRecordExternal');
	return NdefRecordExternal(__SLAG_PROPERTY);
};
Nfc.prototype.createNdefRecordMedia = function (__SLAG_PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var NdefRecordMedia = require('./Nfc/NdefRecordMedia');
	return NdefRecordMedia(__SLAG_PROPERTY);
};
Nfc.prototype.createNdefRecordSmartPoster = function (__SLAG_PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var NdefRecordSmartPoster = require('./Nfc/NdefRecordSmartPoster');
	return NdefRecordSmartPoster(__SLAG_PROPERTY);
};
Nfc.prototype.createNdefRecordText = function (__SLAG_PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var NdefRecordText = require('./Nfc/NdefRecordText');
	return NdefRecordText(__SLAG_PROPERTY);
};
Nfc.prototype.createNdefRecordUnknown = function (__SLAG_PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var NdefRecordUnknown = require('./Nfc/NdefRecordUnknown');
	return NdefRecordUnknown(__SLAG_PROPERTY);
};
Nfc.prototype.createNdefRecordUri = function (__SLAG_PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var NdefRecordUri = require('./Nfc/NdefRecordUri');
	return NdefRecordUri(__SLAG_PROPERTY);
};
Nfc.prototype.getApiName = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
Nfc.prototype.getLifecycleContainer = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lifecycleContainer;
};
Nfc.prototype.setLifecycleContainer = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.lifecycleContainer = __SLAG__PROPERTY;
};
Nfc.prototype.createNfcAdapter = function (__SLAG_PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var NfcAdapter = require('./Nfc/NfcAdapter');
	return NfcAdapter(__SLAG_PROPERTY);
};
Nfc.prototype.createNfcForegroundDispatchFilter = function (__SLAG_PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var NfcForegroundDispatchFilter = require('./Nfc/NfcForegroundDispatchFilter');
	return NfcForegroundDispatchFilter(__SLAG_PROPERTY);
};
Nfc.prototype.createTagTechnologyIsoDep = function (__SLAG_PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var TagTechnologyIsoDep = require('./Nfc/TagTechnologyIsoDep');
	return TagTechnologyIsoDep(__SLAG_PROPERTY);
};
Nfc.prototype.createTagTechnologyMifareClassic = function (__SLAG_PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var TagTechnologyMifareClassic = require('./Nfc/TagTechnologyMifareClassic');
	return TagTechnologyMifareClassic(__SLAG_PROPERTY);
};
Nfc.prototype.createTagTechnologyMifareUltralight = function (__SLAG_PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var TagTechnologyMifareUltralight = require('./Nfc/TagTechnologyMifareUltralight');
	return TagTechnologyMifareUltralight(__SLAG_PROPERTY);
};
Nfc.prototype.createTagTechnologyNdefFormatable = function (__SLAG_PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var TagTechnologyNdefFormatable = require('./Nfc/TagTechnologyNdefFormatable');
	return TagTechnologyNdefFormatable(__SLAG_PROPERTY);
};
Nfc.prototype.createTagTechnologyNdef = function (__SLAG_PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var TagTechnologyNdef = require('./Nfc/TagTechnologyNdef');
	return TagTechnologyNdef(__SLAG_PROPERTY);
};
Nfc.prototype.createTagTechnologyNfcA = function (__SLAG_PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var TagTechnologyNfcA = require('./Nfc/TagTechnologyNfcA');
	return TagTechnologyNfcA(__SLAG_PROPERTY);
};
Nfc.prototype.createTagTechnologyNfcB = function (__SLAG_PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var TagTechnologyNfcB = require('./Nfc/TagTechnologyNfcB');
	return TagTechnologyNfcB(__SLAG_PROPERTY);
};
Nfc.prototype.createTagTechnologyNfcF = function (__SLAG_PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var TagTechnologyNfcF = require('./Nfc/TagTechnologyNfcF');
	return TagTechnologyNfcF(__SLAG_PROPERTY);
};
Nfc.prototype.createTagTechnologyNfcV = function (__SLAG_PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var TagTechnologyNfcV = require('./Nfc/TagTechnologyNfcV');
	return TagTechnologyNfcV(__SLAG_PROPERTY);
};
module.exports = function (properties) {
	return new Nfc(properties);
};