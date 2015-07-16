function TagTechnologyMifareClassic(properties) {
	properties = properties || {};
	this.apiName = 'Modules.Nfc.TagTechnologyMifareClassic';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.tag = properties.tag || {};
	this.KEY_DEFAULT = properties.KEY_DEFAULT || {};
	this.KEY_MIFARE_APPLICATION_DIRECTORY = properties.KEY_MIFARE_APPLICATION_DIRECTORY || {};
	this.KEY_NFC_FORUM = properties.KEY_NFC_FORUM || {};
	return this;
}
TagTechnologyMifareClassic.prototype.isValid = function () {
	return true;
};
TagTechnologyMifareClassic.prototype.close = function () {
};
TagTechnologyMifareClassic.prototype.connect = function () {
};
TagTechnologyMifareClassic.prototype.isConnected = function () {
	return true;
};
TagTechnologyMifareClassic.prototype.authenticateSectorWithKeyA = function () {
	return true;
};
TagTechnologyMifareClassic.prototype.authenticateSectorWithKeyB = function () {
	return true;
};
TagTechnologyMifareClassic.prototype.blockToSector = function () {
	return 0;
};
TagTechnologyMifareClassic.prototype.decrement = function () {
};
TagTechnologyMifareClassic.prototype.getBlockCount = function () {
	return 0;
};
TagTechnologyMifareClassic.prototype.getBlockCountInSector = function () {
	return 0;
};
TagTechnologyMifareClassic.prototype.getMaxTransceiveLength = function () {
	return 0;
};
TagTechnologyMifareClassic.prototype.getSectorCount = function () {
	return 0;
};
TagTechnologyMifareClassic.prototype.getSize = function () {
	return 0;
};
TagTechnologyMifareClassic.prototype.getTimeout = function () {
	return 0;
};
TagTechnologyMifareClassic.prototype.getType = function () {
	return 0;
};
TagTechnologyMifareClassic.prototype.increment = function () {
};
TagTechnologyMifareClassic.prototype.readBlock = function () {
	return {};
};
TagTechnologyMifareClassic.prototype.restore = function () {
};
TagTechnologyMifareClassic.prototype.sectorToBlock = function () {
	return 0;
};
TagTechnologyMifareClassic.prototype.setTimeout = function () {
};
TagTechnologyMifareClassic.prototype.transceive = function () {
	return {};
};
TagTechnologyMifareClassic.prototype.transfer = function () {
};
TagTechnologyMifareClassic.prototype.writeBlock = function () {
};
TagTechnologyMifareClassic.prototype.getApiName = function () {
	return '';
};
TagTechnologyMifareClassic.prototype.getLifecycleContainer = function () {
	return {};
};
TagTechnologyMifareClassic.prototype.setLifecycleContainer = function () {
};
TagTechnologyMifareClassic.prototype.getTag = function () {
	return {};
};
TagTechnologyMifareClassic.prototype.setTag = function () {
};
module.exports = function (properties) {
	return new TagTechnologyMifareClassic(properties);
};