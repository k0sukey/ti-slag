function NdefRecordApplication(properties) {
	properties = properties || {};
	this.apiName = 'Modules.Nfc.NdefRecordApplication';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.payload = properties.payload || {};
	this.recordType = properties.recordType || '';
	this.id = properties.id || '';
	this.tnf = properties.tnf || 0;
	this.type = properties.type || '';
	this.hashCode = properties.hashCode || 0;
	this.packageName = properties.packageName || '';
	return this;
}
NdefRecordApplication.prototype.getRecordType = function () {
	return '';
};
NdefRecordApplication.prototype.getId = function () {
	return '';
};
NdefRecordApplication.prototype.getTnf = function () {
	return 0;
};
NdefRecordApplication.prototype.getType = function () {
	return '';
};
NdefRecordApplication.prototype.getHashCode = function () {
	return 0;
};
NdefRecordApplication.prototype.getApiName = function () {
	return '';
};
NdefRecordApplication.prototype.getLifecycleContainer = function () {
	return {};
};
NdefRecordApplication.prototype.setLifecycleContainer = function () {
};
NdefRecordApplication.prototype.getPayload = function () {
	return {};
};
NdefRecordApplication.prototype.setPayload = function () {
};
NdefRecordApplication.prototype.getRecordType = function () {
	return '';
};
NdefRecordApplication.prototype.getId = function () {
	return '';
};
NdefRecordApplication.prototype.getTnf = function () {
	return 0;
};
NdefRecordApplication.prototype.getType = function () {
	return '';
};
NdefRecordApplication.prototype.getHashCode = function () {
	return 0;
};
NdefRecordApplication.prototype.getPackageName = function () {
	return '';
};
NdefRecordApplication.prototype.setPackageName = function () {
};
module.exports = function (properties) {
	return new NdefRecordApplication(properties);
};