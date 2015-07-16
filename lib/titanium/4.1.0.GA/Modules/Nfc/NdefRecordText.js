function NdefRecordText(properties) {
	properties = properties || {};
	this.apiName = 'Modules.Nfc.NdefRecordText';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.payload = properties.payload || {};
	this.recordType = properties.recordType || '';
	this.id = properties.id || '';
	this.tnf = properties.tnf || 0;
	this.type = properties.type || '';
	this.hashCode = properties.hashCode || 0;
	this.text = properties.text || '';
	this.languageCode = properties.languageCode || '';
	this.encoding = properties.encoding || '';
	return this;
}
NdefRecordText.prototype.getRecordType = function () {
	return '';
};
NdefRecordText.prototype.getId = function () {
	return '';
};
NdefRecordText.prototype.getTnf = function () {
	return 0;
};
NdefRecordText.prototype.getType = function () {
	return '';
};
NdefRecordText.prototype.getHashCode = function () {
	return 0;
};
NdefRecordText.prototype.getApiName = function () {
	return '';
};
NdefRecordText.prototype.getLifecycleContainer = function () {
	return {};
};
NdefRecordText.prototype.setLifecycleContainer = function () {
};
NdefRecordText.prototype.getPayload = function () {
	return {};
};
NdefRecordText.prototype.setPayload = function () {
};
NdefRecordText.prototype.getRecordType = function () {
	return '';
};
NdefRecordText.prototype.getId = function () {
	return '';
};
NdefRecordText.prototype.getTnf = function () {
	return 0;
};
NdefRecordText.prototype.getType = function () {
	return '';
};
NdefRecordText.prototype.getHashCode = function () {
	return 0;
};
NdefRecordText.prototype.getText = function () {
	return '';
};
NdefRecordText.prototype.setText = function () {
};
NdefRecordText.prototype.getLanguageCode = function () {
	return '';
};
NdefRecordText.prototype.setLanguageCode = function () {
};
NdefRecordText.prototype.getEncoding = function () {
	return '';
};
NdefRecordText.prototype.setEncoding = function () {
};
module.exports = function (properties) {
	return new NdefRecordText(properties);
};