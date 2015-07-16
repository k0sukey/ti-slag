function NfcForegroundDispatchFilter(properties) {
	properties = properties || {};
	this.apiName = 'Modules.Nfc.NfcForegroundDispatchFilter';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.intent = properties.intent || {};
	this.intentFilters = properties.intentFilters || [];
	this.techLists = properties.techLists || '';
	return this;
}
NfcForegroundDispatchFilter.prototype.getApiName = function () {
	return '';
};
NfcForegroundDispatchFilter.prototype.getLifecycleContainer = function () {
	return {};
};
NfcForegroundDispatchFilter.prototype.setLifecycleContainer = function () {
};
NfcForegroundDispatchFilter.prototype.getIntent = function () {
	return {};
};
NfcForegroundDispatchFilter.prototype.setIntent = function () {
};
NfcForegroundDispatchFilter.prototype.getIntentFilters = function () {
	return [];
};
NfcForegroundDispatchFilter.prototype.setIntentFilters = function () {
};
NfcForegroundDispatchFilter.prototype.getTechLists = function () {
	return '';
};
NfcForegroundDispatchFilter.prototype.setTechLists = function () {
};
module.exports = function (properties) {
	return new NfcForegroundDispatchFilter(properties);
};