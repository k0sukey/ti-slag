function NdefRecordUnknown(properties) {
	properties = properties || {};
	this.apiName = 'Modules.Nfc.NdefRecordUnknown';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.payload = properties.payload || {};
	this.recordType = properties.recordType || '';
	this.id = properties.id || '';
	this.tnf = properties.tnf || 0;
	this.type = properties.type || '';
	this.hashCode = properties.hashCode || 0;
	return this;
}
NdefRecordUnknown.prototype.getRecordType = function () {
	return '';
};
NdefRecordUnknown.prototype.getId = function () {
	return '';
};
NdefRecordUnknown.prototype.getTnf = function () {
	return 0;
};
NdefRecordUnknown.prototype.getType = function () {
	return '';
};
NdefRecordUnknown.prototype.getHashCode = function () {
	return 0;
};
NdefRecordUnknown.prototype.getApiName = function () {
	return '';
};
NdefRecordUnknown.prototype.getLifecycleContainer = function () {
	return {};
};
NdefRecordUnknown.prototype.setLifecycleContainer = function () {
};
NdefRecordUnknown.prototype.getPayload = function () {
	return {};
};
NdefRecordUnknown.prototype.setPayload = function () {
};
NdefRecordUnknown.prototype.getRecordType = function () {
	return '';
};
NdefRecordUnknown.prototype.getId = function () {
	return '';
};
NdefRecordUnknown.prototype.getTnf = function () {
	return 0;
};
NdefRecordUnknown.prototype.getType = function () {
	return '';
};
module.exports = function (properties) {
	return new NdefRecordUnknown(properties);
};