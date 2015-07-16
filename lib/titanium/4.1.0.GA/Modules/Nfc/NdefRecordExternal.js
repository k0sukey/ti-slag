function NdefRecordExternal(properties) {
	properties = properties || {};
	this.apiName = 'Modules.Nfc.NdefRecordExternal';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.payload = properties.payload || {};
	this.recordType = properties.recordType || '';
	this.id = properties.id || '';
	this.tnf = properties.tnf || 0;
	this.type = properties.type || '';
	this.hashCode = properties.hashCode || 0;
	this.domain = properties.domain || '';
	this.domainType = properties.domainType || '';
	return this;
}
NdefRecordExternal.prototype.getRecordType = function () {
	return '';
};
NdefRecordExternal.prototype.getId = function () {
	return '';
};
NdefRecordExternal.prototype.getTnf = function () {
	return 0;
};
NdefRecordExternal.prototype.getType = function () {
	return '';
};
NdefRecordExternal.prototype.getHashCode = function () {
	return 0;
};
NdefRecordExternal.prototype.getApiName = function () {
	return '';
};
NdefRecordExternal.prototype.getLifecycleContainer = function () {
	return {};
};
NdefRecordExternal.prototype.setLifecycleContainer = function () {
};
NdefRecordExternal.prototype.getPayload = function () {
	return {};
};
NdefRecordExternal.prototype.setPayload = function () {
};
NdefRecordExternal.prototype.getRecordType = function () {
	return '';
};
NdefRecordExternal.prototype.getId = function () {
	return '';
};
NdefRecordExternal.prototype.getTnf = function () {
	return 0;
};
NdefRecordExternal.prototype.getType = function () {
	return '';
};
NdefRecordExternal.prototype.getHashCode = function () {
	return 0;
};
NdefRecordExternal.prototype.getDomain = function () {
	return '';
};
NdefRecordExternal.prototype.setDomain = function () {
};
NdefRecordExternal.prototype.getDomainType = function () {
	return '';
};
NdefRecordExternal.prototype.setDomainType = function () {
};
module.exports = function (properties) {
	return new NdefRecordExternal(properties);
};