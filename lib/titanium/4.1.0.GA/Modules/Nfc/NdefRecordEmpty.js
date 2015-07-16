function NdefRecordEmpty(properties) {
	properties = properties || {};
	this.apiName = 'Modules.Nfc.NdefRecordEmpty';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.payload = properties.payload || {};
	this.recordType = properties.recordType || '';
	this.id = properties.id || '';
	this.tnf = properties.tnf || 0;
	this.type = properties.type || '';
	this.hashCode = properties.hashCode || 0;
	return this;
}
NdefRecordEmpty.prototype.getRecordType = function () {
	return '';
};
NdefRecordEmpty.prototype.getId = function () {
	return '';
};
NdefRecordEmpty.prototype.getTnf = function () {
	return 0;
};
NdefRecordEmpty.prototype.getType = function () {
	return '';
};
NdefRecordEmpty.prototype.getHashCode = function () {
	return 0;
};
NdefRecordEmpty.prototype.getApiName = function () {
	return '';
};
NdefRecordEmpty.prototype.getLifecycleContainer = function () {
	return {};
};
NdefRecordEmpty.prototype.setLifecycleContainer = function () {
};
NdefRecordEmpty.prototype.getPayload = function () {
	return {};
};
NdefRecordEmpty.prototype.setPayload = function () {
};
NdefRecordEmpty.prototype.getRecordType = function () {
	return '';
};
NdefRecordEmpty.prototype.getId = function () {
	return '';
};
NdefRecordEmpty.prototype.getTnf = function () {
	return 0;
};
NdefRecordEmpty.prototype.getType = function () {
	return '';
};
module.exports = function (properties) {
	return new NdefRecordEmpty(properties);
};