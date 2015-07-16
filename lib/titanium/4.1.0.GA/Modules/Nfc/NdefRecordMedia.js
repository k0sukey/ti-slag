function NdefRecordMedia(properties) {
	properties = properties || {};
	this.apiName = 'Modules.Nfc.NdefRecordMedia';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.payload = properties.payload || {};
	this.recordType = properties.recordType || '';
	this.id = properties.id || '';
	this.tnf = properties.tnf || 0;
	this.type = properties.type || '';
	this.hashCode = properties.hashCode || 0;
	this.mimeType = properties.mimeType || '';
	return this;
}
NdefRecordMedia.prototype.getRecordType = function () {
	return '';
};
NdefRecordMedia.prototype.getId = function () {
	return '';
};
NdefRecordMedia.prototype.getTnf = function () {
	return 0;
};
NdefRecordMedia.prototype.getType = function () {
	return '';
};
NdefRecordMedia.prototype.getHashCode = function () {
	return 0;
};
NdefRecordMedia.prototype.getApiName = function () {
	return '';
};
NdefRecordMedia.prototype.getLifecycleContainer = function () {
	return {};
};
NdefRecordMedia.prototype.setLifecycleContainer = function () {
};
NdefRecordMedia.prototype.getPayload = function () {
	return {};
};
NdefRecordMedia.prototype.setPayload = function () {
};
NdefRecordMedia.prototype.getRecordType = function () {
	return '';
};
NdefRecordMedia.prototype.getId = function () {
	return '';
};
NdefRecordMedia.prototype.getTnf = function () {
	return 0;
};
NdefRecordMedia.prototype.getType = function () {
	return '';
};
NdefRecordMedia.prototype.getHashCode = function () {
	return 0;
};
NdefRecordMedia.prototype.getMimeType = function () {
	return '';
};
NdefRecordMedia.prototype.setMimeType = function () {
};
module.exports = function (properties) {
	return new NdefRecordMedia(properties);
};