var crypto = require('crypto');
function Nfc(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
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
		throw new Error('Modules.Nfc.apiName is read only property');
	}
	this.apiName = 'Modules.Nfc';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	if (__SLAG__properties.ACTION_NDEF_DISCOVERED) {
		throw new Error('Modules.Nfc.ACTION_NDEF_DISCOVERED is read only property');
	}
	this.ACTION_NDEF_DISCOVERED = '';
	if (__SLAG__properties.ACTION_TAG_DISCOVERED) {
		throw new Error('Modules.Nfc.ACTION_TAG_DISCOVERED is read only property');
	}
	this.ACTION_TAG_DISCOVERED = '';
	if (__SLAG__properties.ACTION_TECH_DISCOVERED) {
		throw new Error('Modules.Nfc.ACTION_TECH_DISCOVERED is read only property');
	}
	this.ACTION_TECH_DISCOVERED = '';
	if (__SLAG__properties.TNF_ABSOLUTE_URI) {
		throw new Error('Modules.Nfc.TNF_ABSOLUTE_URI is read only property');
	}
	this.TNF_ABSOLUTE_URI = 0;
	if (__SLAG__properties.TNF_EMPTY) {
		throw new Error('Modules.Nfc.TNF_EMPTY is read only property');
	}
	this.TNF_EMPTY = 0;
	if (__SLAG__properties.TNF_EXTERNAL_TYPE) {
		throw new Error('Modules.Nfc.TNF_EXTERNAL_TYPE is read only property');
	}
	this.TNF_EXTERNAL_TYPE = 0;
	if (__SLAG__properties.TNF_MIME_MEDIA) {
		throw new Error('Modules.Nfc.TNF_MIME_MEDIA is read only property');
	}
	this.TNF_MIME_MEDIA = 0;
	if (__SLAG__properties.TNF_UNCHANGED) {
		throw new Error('Modules.Nfc.TNF_UNCHANGED is read only property');
	}
	this.TNF_UNCHANGED = 0;
	if (__SLAG__properties.TNF_UNKNOWN) {
		throw new Error('Modules.Nfc.TNF_UNKNOWN is read only property');
	}
	this.TNF_UNKNOWN = 0;
	if (__SLAG__properties.TNF_WELL_KNOWN) {
		throw new Error('Modules.Nfc.TNF_WELL_KNOWN is read only property');
	}
	this.TNF_WELL_KNOWN = 0;
	if (__SLAG__properties.RTD_ALTERNATIVE_CARRIER) {
		throw new Error('Modules.Nfc.RTD_ALTERNATIVE_CARRIER is read only property');
	}
	this.RTD_ALTERNATIVE_CARRIER = '';
	if (__SLAG__properties.RTD_HANDOVER_CARRIER) {
		throw new Error('Modules.Nfc.RTD_HANDOVER_CARRIER is read only property');
	}
	this.RTD_HANDOVER_CARRIER = '';
	if (__SLAG__properties.RTD_HANDOVER_REQUEST) {
		throw new Error('Modules.Nfc.RTD_HANDOVER_REQUEST is read only property');
	}
	this.RTD_HANDOVER_REQUEST = '';
	if (__SLAG__properties.RTD_HANDOVER_SELECT) {
		throw new Error('Modules.Nfc.RTD_HANDOVER_SELECT is read only property');
	}
	this.RTD_HANDOVER_SELECT = '';
	if (__SLAG__properties.RTD_SMART_POSTER) {
		throw new Error('Modules.Nfc.RTD_SMART_POSTER is read only property');
	}
	this.RTD_SMART_POSTER = '';
	if (__SLAG__properties.RTD_TEXT) {
		throw new Error('Modules.Nfc.RTD_TEXT is read only property');
	}
	this.RTD_TEXT = '';
	if (__SLAG__properties.RTD_URI) {
		throw new Error('Modules.Nfc.RTD_URI is read only property');
	}
	this.RTD_URI = '';
	if (__SLAG__properties.TECH_ISODEP) {
		throw new Error('Modules.Nfc.TECH_ISODEP is read only property');
	}
	this.TECH_ISODEP = 0;
	if (__SLAG__properties.TECH_MIFARE_CLASSIC) {
		throw new Error('Modules.Nfc.TECH_MIFARE_CLASSIC is read only property');
	}
	this.TECH_MIFARE_CLASSIC = 0;
	if (__SLAG__properties.TECH_MIFARE_ULTRALIGHT) {
		throw new Error('Modules.Nfc.TECH_MIFARE_ULTRALIGHT is read only property');
	}
	this.TECH_MIFARE_ULTRALIGHT = 0;
	if (__SLAG__properties.TECH_NDEF) {
		throw new Error('Modules.Nfc.TECH_NDEF is read only property');
	}
	this.TECH_NDEF = 0;
	if (__SLAG__properties.TECH_NDEFFORMATABLE) {
		throw new Error('Modules.Nfc.TECH_NDEFFORMATABLE is read only property');
	}
	this.TECH_NDEFFORMATABLE = 0;
	if (__SLAG__properties.TECH_NFCA) {
		throw new Error('Modules.Nfc.TECH_NFCA is read only property');
	}
	this.TECH_NFCA = 0;
	if (__SLAG__properties.TECH_NFCB) {
		throw new Error('Modules.Nfc.TECH_NFCB is read only property');
	}
	this.TECH_NFCB = 0;
	if (__SLAG__properties.TECH_NFCF) {
		throw new Error('Modules.Nfc.TECH_NFCF is read only property');
	}
	this.TECH_NFCF = 0;
	if (__SLAG__properties.TECH_NFCV) {
		throw new Error('Modules.Nfc.TECH_NFCV is read only property');
	}
	this.TECH_NFCV = 0;
	if (__SLAG__properties.ENCODING_UTF8) {
		throw new Error('Modules.Nfc.ENCODING_UTF8 is read only property');
	}
	this.ENCODING_UTF8 = '';
	if (__SLAG__properties.ENCODING_UTF16) {
		throw new Error('Modules.Nfc.ENCODING_UTF16 is read only property');
	}
	this.ENCODING_UTF16 = '';
	if (__SLAG__properties.RECOMMENDED_ACTION_UNKNOWN) {
		throw new Error('Modules.Nfc.RECOMMENDED_ACTION_UNKNOWN is read only property');
	}
	this.RECOMMENDED_ACTION_UNKNOWN = 0;
	if (__SLAG__properties.RECOMMENDED_ACTION_DO_ACTION) {
		throw new Error('Modules.Nfc.RECOMMENDED_ACTION_DO_ACTION is read only property');
	}
	this.RECOMMENDED_ACTION_DO_ACTION = 0;
	if (__SLAG__properties.RECOMMENDED_ACTION_SAVE_FOR_LATER) {
		throw new Error('Modules.Nfc.RECOMMENDED_ACTION_SAVE_FOR_LATER is read only property');
	}
	this.RECOMMENDED_ACTION_SAVE_FOR_LATER = 0;
	if (__SLAG__properties.RECOMMENDED_ACTION_OPEN_FOR_EDITING) {
		throw new Error('Modules.Nfc.RECOMMENDED_ACTION_OPEN_FOR_EDITING is read only property');
	}
	this.RECOMMENDED_ACTION_OPEN_FOR_EDITING = 0;
	if (__SLAG__properties.TAG_TYPE_NFC_FORUM_TYPE_1) {
		throw new Error('Modules.Nfc.TAG_TYPE_NFC_FORUM_TYPE_1 is read only property');
	}
	this.TAG_TYPE_NFC_FORUM_TYPE_1 = '';
	if (__SLAG__properties.TAG_TYPE_NFC_FORUM_TYPE_2) {
		throw new Error('Modules.Nfc.TAG_TYPE_NFC_FORUM_TYPE_2 is read only property');
	}
	this.TAG_TYPE_NFC_FORUM_TYPE_2 = '';
	if (__SLAG__properties.TAG_TYPE_NFC_FORUM_TYPE_3) {
		throw new Error('Modules.Nfc.TAG_TYPE_NFC_FORUM_TYPE_3 is read only property');
	}
	this.TAG_TYPE_NFC_FORUM_TYPE_3 = '';
	if (__SLAG__properties.TAG_TYPE_NFC_FORUM_TYPE_4) {
		throw new Error('Modules.Nfc.TAG_TYPE_NFC_FORUM_TYPE_4 is read only property');
	}
	this.TAG_TYPE_NFC_FORUM_TYPE_4 = '';
	if (__SLAG__properties.TAG_TYPE_MIFARE_CLASSIC) {
		throw new Error('Modules.Nfc.TAG_TYPE_MIFARE_CLASSIC is read only property');
	}
	this.TAG_TYPE_MIFARE_CLASSIC = '';
	if (__SLAG__properties.MIFARE_TAG_TYPE_CLASSIC) {
		throw new Error('Modules.Nfc.MIFARE_TAG_TYPE_CLASSIC is read only property');
	}
	this.MIFARE_TAG_TYPE_CLASSIC = 0;
	if (__SLAG__properties.MIFARE_TAG_TYPE_PLUS) {
		throw new Error('Modules.Nfc.MIFARE_TAG_TYPE_PLUS is read only property');
	}
	this.MIFARE_TAG_TYPE_PLUS = 0;
	if (__SLAG__properties.MIFARE_TAG_TYPE_PRO) {
		throw new Error('Modules.Nfc.MIFARE_TAG_TYPE_PRO is read only property');
	}
	this.MIFARE_TAG_TYPE_PRO = 0;
	if (__SLAG__properties.MIFARE_TAG_TYPE_UNKNOWN) {
		throw new Error('Modules.Nfc.MIFARE_TAG_TYPE_UNKNOWN is read only property');
	}
	this.MIFARE_TAG_TYPE_UNKNOWN = 0;
	if (__SLAG__properties.MIFARE_BLOCK_SIZE) {
		throw new Error('Modules.Nfc.MIFARE_BLOCK_SIZE is read only property');
	}
	this.MIFARE_BLOCK_SIZE = 0;
	if (__SLAG__properties.MIFARE_SIZE_1K) {
		throw new Error('Modules.Nfc.MIFARE_SIZE_1K is read only property');
	}
	this.MIFARE_SIZE_1K = 0;
	if (__SLAG__properties.MIFARE_SIZE_2K) {
		throw new Error('Modules.Nfc.MIFARE_SIZE_2K is read only property');
	}
	this.MIFARE_SIZE_2K = 0;
	if (__SLAG__properties.MIFARE_SIZE_4K) {
		throw new Error('Modules.Nfc.MIFARE_SIZE_4K is read only property');
	}
	this.MIFARE_SIZE_4K = 0;
	if (__SLAG__properties.MIFARE_SIZE_MINI) {
		throw new Error('Modules.Nfc.MIFARE_SIZE_MINI is read only property');
	}
	this.MIFARE_SIZE_MINI = 0;
	if (__SLAG__properties.MIFARE_ULTRALIGHT_PAGE_SIZE) {
		throw new Error('Modules.Nfc.MIFARE_ULTRALIGHT_PAGE_SIZE is read only property');
	}
	this.MIFARE_ULTRALIGHT_PAGE_SIZE = 0;
	if (__SLAG__properties.MIFARE_ULTRALIGHT_TYPE_ULTRALIGHT) {
		throw new Error('Modules.Nfc.MIFARE_ULTRALIGHT_TYPE_ULTRALIGHT is read only property');
	}
	this.MIFARE_ULTRALIGHT_TYPE_ULTRALIGHT = 0;
	if (__SLAG__properties.MIFARE_ULTRALIGHT_TYPE_ULTRALIGHT_C) {
		throw new Error('Modules.Nfc.MIFARE_ULTRALIGHT_TYPE_ULTRALIGHT_C is read only property');
	}
	this.MIFARE_ULTRALIGHT_TYPE_ULTRALIGHT_C = 0;
	if (__SLAG__properties.MIFARE_ULTRALIGHT_TYPE_UNKNOWN) {
		throw new Error('Modules.Nfc.MIFARE_ULTRALIGHT_TYPE_UNKNOWN is read only property');
	}
	this.MIFARE_ULTRALIGHT_TYPE_UNKNOWN = 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
Nfc.prototype.createNdefMessage = function (params) {
	var NdefMessage = require('./Nfc/NdefMessage');
	return NdefMessage(params);
};
Nfc.prototype.createNdefRecordApplication = function (params) {
	var NdefRecordApplication = require('./Nfc/NdefRecordApplication');
	return NdefRecordApplication(params);
};
Nfc.prototype.createNdefRecordEmpty = function (params) {
	var NdefRecordEmpty = require('./Nfc/NdefRecordEmpty');
	return NdefRecordEmpty(params);
};
Nfc.prototype.createNdefRecordExternal = function (params) {
	var NdefRecordExternal = require('./Nfc/NdefRecordExternal');
	return NdefRecordExternal(params);
};
Nfc.prototype.createNdefRecordMedia = function (params) {
	var NdefRecordMedia = require('./Nfc/NdefRecordMedia');
	return NdefRecordMedia(params);
};
Nfc.prototype.createNdefRecordSmartPoster = function (params) {
	var NdefRecordSmartPoster = require('./Nfc/NdefRecordSmartPoster');
	return NdefRecordSmartPoster(params);
};
Nfc.prototype.createNdefRecordText = function (params) {
	var NdefRecordText = require('./Nfc/NdefRecordText');
	return NdefRecordText(params);
};
Nfc.prototype.createNdefRecordUnknown = function (params) {
	var NdefRecordUnknown = require('./Nfc/NdefRecordUnknown');
	return NdefRecordUnknown(params);
};
Nfc.prototype.createNdefRecordUri = function (params) {
	var NdefRecordUri = require('./Nfc/NdefRecordUri');
	return NdefRecordUri(params);
};
Nfc.prototype.getApiName = function () {
	return this.apiName;
};
Nfc.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Nfc.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
Nfc.prototype.createNfcAdapter = function (params) {
	var NfcAdapter = require('./Nfc/NfcAdapter');
	return NfcAdapter(params);
};
Nfc.prototype.createNfcForegroundDispatchFilter = function (params) {
	var NfcForegroundDispatchFilter = require('./Nfc/NfcForegroundDispatchFilter');
	return NfcForegroundDispatchFilter(params);
};
Nfc.prototype.createTagTechnologyIsoDep = function (params) {
	var TagTechnologyIsoDep = require('./Nfc/TagTechnologyIsoDep');
	return TagTechnologyIsoDep(params);
};
Nfc.prototype.createTagTechnologyMifareClassic = function (params) {
	var TagTechnologyMifareClassic = require('./Nfc/TagTechnologyMifareClassic');
	return TagTechnologyMifareClassic(params);
};
Nfc.prototype.createTagTechnologyMifareUltralight = function (params) {
	var TagTechnologyMifareUltralight = require('./Nfc/TagTechnologyMifareUltralight');
	return TagTechnologyMifareUltralight(params);
};
Nfc.prototype.createTagTechnologyNdefFormatable = function (params) {
	var TagTechnologyNdefFormatable = require('./Nfc/TagTechnologyNdefFormatable');
	return TagTechnologyNdefFormatable(params);
};
Nfc.prototype.createTagTechnologyNdef = function (params) {
	var TagTechnologyNdef = require('./Nfc/TagTechnologyNdef');
	return TagTechnologyNdef(params);
};
Nfc.prototype.createTagTechnologyNfcA = function (params) {
	var TagTechnologyNfcA = require('./Nfc/TagTechnologyNfcA');
	return TagTechnologyNfcA(params);
};
Nfc.prototype.createTagTechnologyNfcB = function (params) {
	var TagTechnologyNfcB = require('./Nfc/TagTechnologyNfcB');
	return TagTechnologyNfcB(params);
};
Nfc.prototype.createTagTechnologyNfcF = function (params) {
	var TagTechnologyNfcF = require('./Nfc/TagTechnologyNfcF');
	return TagTechnologyNfcF(params);
};
Nfc.prototype.createTagTechnologyNfcV = function (params) {
	var TagTechnologyNfcV = require('./Nfc/TagTechnologyNfcV');
	return TagTechnologyNfcV(params);
};
module.exports = function (properties) {
	return new Nfc(properties);
};