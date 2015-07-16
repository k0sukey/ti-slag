function NdefRecordSmartPoster(properties) {
	properties = properties || {};
	this.apiName = 'Modules.Nfc.NdefRecordSmartPoster';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.payload = properties.payload || {};
	this.recordType = properties.recordType || '';
	this.id = properties.id || '';
	this.tnf = properties.tnf || 0;
	this.type = properties.type || '';
	this.hashCode = properties.hashCode || 0;
	this.title = properties.title || '';
	this.uri = properties.uri || '';
	this.action = properties.action || 0;
	this.mimeType = properties.mimeType || '';
	return this;
}
NdefRecordSmartPoster.prototype.getRecordType = function () {
	return '';
};
NdefRecordSmartPoster.prototype.getId = function () {
	return '';
};
NdefRecordSmartPoster.prototype.getTnf = function () {
	return 0;
};
NdefRecordSmartPoster.prototype.getType = function () {
	return '';
};
NdefRecordSmartPoster.prototype.getHashCode = function () {
	return 0;
};
NdefRecordSmartPoster.prototype.getApiName = function () {
	return '';
};
NdefRecordSmartPoster.prototype.getLifecycleContainer = function () {
	return {};
};
NdefRecordSmartPoster.prototype.setLifecycleContainer = function () {
};
NdefRecordSmartPoster.prototype.getPayload = function () {
	return {};
};
NdefRecordSmartPoster.prototype.setPayload = function () {
};
NdefRecordSmartPoster.prototype.getRecordType = function () {
	return '';
};
NdefRecordSmartPoster.prototype.getId = function () {
	return '';
};
NdefRecordSmartPoster.prototype.getTnf = function () {
	return 0;
};
NdefRecordSmartPoster.prototype.getType = function () {
	return '';
};
NdefRecordSmartPoster.prototype.getHashCode = function () {
	return 0;
};
NdefRecordSmartPoster.prototype.getTitle = function () {
	return '';
};
NdefRecordSmartPoster.prototype.setTitle = function () {
};
NdefRecordSmartPoster.prototype.getUri = function () {
	return '';
};
NdefRecordSmartPoster.prototype.setUri = function () {
};
NdefRecordSmartPoster.prototype.getAction = function () {
	return 0;
};
NdefRecordSmartPoster.prototype.setAction = function () {
};
NdefRecordSmartPoster.prototype.getMimeType = function () {
	return '';
};
NdefRecordSmartPoster.prototype.setMimeType = function () {
};
module.exports = function (properties) {
	return new NdefRecordSmartPoster(properties);
};