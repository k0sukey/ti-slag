function NdefRecordUri(properties) {
	properties = properties || {};
	this.apiName = 'Modules.Nfc.NdefRecordUri';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.payload = properties.payload || {};
	this.recordType = properties.recordType || '';
	this.id = properties.id || '';
	this.tnf = properties.tnf || 0;
	this.type = properties.type || '';
	this.hashCode = properties.hashCode || 0;
	this.uri = properties.uri || '';
	return this;
}
NdefRecordUri.prototype.getRecordType = function () {
	return '';
};
NdefRecordUri.prototype.getId = function () {
	return '';
};
NdefRecordUri.prototype.getTnf = function () {
	return 0;
};
NdefRecordUri.prototype.getType = function () {
	return '';
};
NdefRecordUri.prototype.getHashCode = function () {
	return 0;
};
NdefRecordUri.prototype.getApiName = function () {
	return '';
};
NdefRecordUri.prototype.getLifecycleContainer = function () {
	return {};
};
NdefRecordUri.prototype.setLifecycleContainer = function () {
};
NdefRecordUri.prototype.getPayload = function () {
	return {};
};
NdefRecordUri.prototype.setPayload = function () {
};
NdefRecordUri.prototype.getRecordType = function () {
	return '';
};
NdefRecordUri.prototype.getId = function () {
	return '';
};
NdefRecordUri.prototype.getTnf = function () {
	return 0;
};
NdefRecordUri.prototype.getType = function () {
	return '';
};
NdefRecordUri.prototype.getHashCode = function () {
	return 0;
};
NdefRecordUri.prototype.getUri = function () {
	return '';
};
NdefRecordUri.prototype.setUri = function () {
};
module.exports = function (properties) {
	return new NdefRecordUri(properties);
};