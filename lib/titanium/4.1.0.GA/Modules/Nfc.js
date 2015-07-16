function Nfc(properties) {
	properties = properties || {};
	this.apiName = 'Modules.Nfc';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.ACTION_NDEF_DISCOVERED = properties.ACTION_NDEF_DISCOVERED || '';
	this.ACTION_TAG_DISCOVERED = properties.ACTION_TAG_DISCOVERED || '';
	this.ACTION_TECH_DISCOVERED = properties.ACTION_TECH_DISCOVERED || '';
	this.TNF_ABSOLUTE_URI = properties.TNF_ABSOLUTE_URI || 0;
	this.TNF_EMPTY = properties.TNF_EMPTY || 0;
	this.TNF_EXTERNAL_TYPE = properties.TNF_EXTERNAL_TYPE || 0;
	this.TNF_MIME_MEDIA = properties.TNF_MIME_MEDIA || 0;
	this.TNF_UNCHANGED = properties.TNF_UNCHANGED || 0;
	this.TNF_UNKNOWN = properties.TNF_UNKNOWN || 0;
	this.TNF_WELL_KNOWN = properties.TNF_WELL_KNOWN || 0;
	this.RTD_ALTERNATIVE_CARRIER = properties.RTD_ALTERNATIVE_CARRIER || '';
	this.RTD_HANDOVER_CARRIER = properties.RTD_HANDOVER_CARRIER || '';
	this.RTD_HANDOVER_REQUEST = properties.RTD_HANDOVER_REQUEST || '';
	this.RTD_HANDOVER_SELECT = properties.RTD_HANDOVER_SELECT || '';
	this.RTD_SMART_POSTER = properties.RTD_SMART_POSTER || '';
	this.RTD_TEXT = properties.RTD_TEXT || '';
	this.RTD_URI = properties.RTD_URI || '';
	this.TECH_ISODEP = properties.TECH_ISODEP || 0;
	this.TECH_MIFARE_CLASSIC = properties.TECH_MIFARE_CLASSIC || 0;
	this.TECH_MIFARE_ULTRALIGHT = properties.TECH_MIFARE_ULTRALIGHT || 0;
	this.TECH_NDEF = properties.TECH_NDEF || 0;
	this.TECH_NDEFFORMATABLE = properties.TECH_NDEFFORMATABLE || 0;
	this.TECH_NFCA = properties.TECH_NFCA || 0;
	this.TECH_NFCB = properties.TECH_NFCB || 0;
	this.TECH_NFCF = properties.TECH_NFCF || 0;
	this.TECH_NFCV = properties.TECH_NFCV || 0;
	this.ENCODING_UTF8 = properties.ENCODING_UTF8 || '';
	this.ENCODING_UTF16 = properties.ENCODING_UTF16 || '';
	this.RECOMMENDED_ACTION_UNKNOWN = properties.RECOMMENDED_ACTION_UNKNOWN || 0;
	this.RECOMMENDED_ACTION_DO_ACTION = properties.RECOMMENDED_ACTION_DO_ACTION || 0;
	this.RECOMMENDED_ACTION_SAVE_FOR_LATER = properties.RECOMMENDED_ACTION_SAVE_FOR_LATER || 0;
	this.RECOMMENDED_ACTION_OPEN_FOR_EDITING = properties.RECOMMENDED_ACTION_OPEN_FOR_EDITING || 0;
	this.TAG_TYPE_NFC_FORUM_TYPE_1 = properties.TAG_TYPE_NFC_FORUM_TYPE_1 || '';
	this.TAG_TYPE_NFC_FORUM_TYPE_2 = properties.TAG_TYPE_NFC_FORUM_TYPE_2 || '';
	this.TAG_TYPE_NFC_FORUM_TYPE_3 = properties.TAG_TYPE_NFC_FORUM_TYPE_3 || '';
	this.TAG_TYPE_NFC_FORUM_TYPE_4 = properties.TAG_TYPE_NFC_FORUM_TYPE_4 || '';
	this.TAG_TYPE_MIFARE_CLASSIC = properties.TAG_TYPE_MIFARE_CLASSIC || '';
	this.MIFARE_TAG_TYPE_CLASSIC = properties.MIFARE_TAG_TYPE_CLASSIC || 0;
	this.MIFARE_TAG_TYPE_PLUS = properties.MIFARE_TAG_TYPE_PLUS || 0;
	this.MIFARE_TAG_TYPE_PRO = properties.MIFARE_TAG_TYPE_PRO || 0;
	this.MIFARE_TAG_TYPE_UNKNOWN = properties.MIFARE_TAG_TYPE_UNKNOWN || 0;
	this.MIFARE_BLOCK_SIZE = properties.MIFARE_BLOCK_SIZE || 0;
	this.MIFARE_SIZE_1K = properties.MIFARE_SIZE_1K || 0;
	this.MIFARE_SIZE_2K = properties.MIFARE_SIZE_2K || 0;
	this.MIFARE_SIZE_4K = properties.MIFARE_SIZE_4K || 0;
	this.MIFARE_SIZE_MINI = properties.MIFARE_SIZE_MINI || 0;
	this.MIFARE_ULTRALIGHT_PAGE_SIZE = properties.MIFARE_ULTRALIGHT_PAGE_SIZE || 0;
	this.MIFARE_ULTRALIGHT_TYPE_ULTRALIGHT = properties.MIFARE_ULTRALIGHT_TYPE_ULTRALIGHT || 0;
	this.MIFARE_ULTRALIGHT_TYPE_ULTRALIGHT_C = properties.MIFARE_ULTRALIGHT_TYPE_ULTRALIGHT_C || 0;
	this.MIFARE_ULTRALIGHT_TYPE_UNKNOWN = properties.MIFARE_ULTRALIGHT_TYPE_UNKNOWN || 0;
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
	return '';
};
Nfc.prototype.getLifecycleContainer = function () {
	return {};
};
Nfc.prototype.setLifecycleContainer = function () {
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