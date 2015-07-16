function NdefRecord(properties) {
	properties = properties || {};
	this.apiName = 'Modules.Nfc.NdefRecord';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.payload = properties.payload || {};
	this.recordType = properties.recordType || '';
	this.id = properties.id || '';
	this.tnf = properties.tnf || 0;
	this.type = properties.type || '';
	this.hashCode = properties.hashCode || 0;
	return this;
}
NdefRecord.prototype.getRecordType = function () {
	return '';
};
NdefRecord.prototype.getId = function () {
	return '';
};
NdefRecord.prototype.getTnf = function () {
	return 0;
};
NdefRecord.prototype.getType = function () {
	return '';
};
NdefRecord.prototype.getHashCode = function () {
	return 0;
};
NdefRecord.prototype.getApiName = function () {
	return '';
};
NdefRecord.prototype.getLifecycleContainer = function () {
	return {};
};
NdefRecord.prototype.setLifecycleContainer = function () {
};
NdefRecord.prototype.getPayload = function () {
	return {};
};
NdefRecord.prototype.setPayload = function () {
};
NdefRecord.prototype.getRecordType = function () {
	return '';
};
NdefRecord.prototype.getId = function () {
	return '';
};
NdefRecord.prototype.getTnf = function () {
	return 0;
};
NdefRecord.prototype.getType = function () {
	return '';
};
module.exports = function (properties) {
	return new NdefRecord(properties);
};