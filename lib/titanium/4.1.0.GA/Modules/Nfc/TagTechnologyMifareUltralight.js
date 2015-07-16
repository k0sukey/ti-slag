function TagTechnologyMifareUltralight(properties) {
	properties = properties || {};
	this.apiName = 'Modules.Nfc.TagTechnologyMifareUltralight';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.tag = properties.tag || {};
	return this;
}
TagTechnologyMifareUltralight.prototype.isValid = function () {
	return true;
};
TagTechnologyMifareUltralight.prototype.close = function () {
};
TagTechnologyMifareUltralight.prototype.connect = function () {
};
TagTechnologyMifareUltralight.prototype.isConnected = function () {
	return true;
};
TagTechnologyMifareUltralight.prototype.getMaxTransceiveLength = function () {
	return 0;
};
TagTechnologyMifareUltralight.prototype.getTimeout = function () {
	return 0;
};
TagTechnologyMifareUltralight.prototype.getType = function () {
	return 0;
};
TagTechnologyMifareUltralight.prototype.readPages = function () {
	return {};
};
TagTechnologyMifareUltralight.prototype.setTimeout = function () {
};
TagTechnologyMifareUltralight.prototype.transceive = function () {
	return {};
};
TagTechnologyMifareUltralight.prototype.writePage = function () {
};
TagTechnologyMifareUltralight.prototype.getApiName = function () {
	return '';
};
TagTechnologyMifareUltralight.prototype.getLifecycleContainer = function () {
	return {};
};
TagTechnologyMifareUltralight.prototype.setLifecycleContainer = function () {
};
TagTechnologyMifareUltralight.prototype.getTag = function () {
	return {};
};
TagTechnologyMifareUltralight.prototype.setTag = function () {
};
module.exports = function (properties) {
	return new TagTechnologyMifareUltralight(properties);
};