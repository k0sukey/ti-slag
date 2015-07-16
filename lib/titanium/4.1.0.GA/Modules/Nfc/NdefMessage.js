function NdefMessage(properties) {
	properties = properties || {};
	this.apiName = 'Modules.Nfc.NdefMessage';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.records = properties.records || [];
	return this;
}
NdefMessage.prototype.toByte = function () {
	return {};
};
NdefMessage.prototype.getApiName = function () {
	return '';
};
NdefMessage.prototype.getLifecycleContainer = function () {
	return {};
};
NdefMessage.prototype.setLifecycleContainer = function () {
};
NdefMessage.prototype.getRecords = function () {
	return [];
};
NdefMessage.prototype.setRecords = function () {
};
module.exports = function (properties) {
	return new NdefMessage(properties);
};