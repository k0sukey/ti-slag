function TagTechnologyNfcF(properties) {
	properties = properties || {};
	this.apiName = 'Modules.Nfc.TagTechnologyNfcF';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.tag = properties.tag || {};
	return this;
}
TagTechnologyNfcF.prototype.isValid = function () {
	return true;
};
TagTechnologyNfcF.prototype.close = function () {
};
TagTechnologyNfcF.prototype.connect = function () {
};
TagTechnologyNfcF.prototype.isConnected = function () {
	return true;
};
TagTechnologyNfcF.prototype.getManufacturer = function () {
	return {};
};
TagTechnologyNfcF.prototype.getMaxTransceiveLength = function () {
	return 0;
};
TagTechnologyNfcF.prototype.getSystemCode = function () {
	return {};
};
TagTechnologyNfcF.prototype.getTimeout = function () {
	return 0;
};
TagTechnologyNfcF.prototype.setTimeout = function () {
};
TagTechnologyNfcF.prototype.transceive = function () {
	return {};
};
TagTechnologyNfcF.prototype.getApiName = function () {
	return '';
};
TagTechnologyNfcF.prototype.getLifecycleContainer = function () {
	return {};
};
TagTechnologyNfcF.prototype.setLifecycleContainer = function () {
};
TagTechnologyNfcF.prototype.getTag = function () {
	return {};
};
TagTechnologyNfcF.prototype.setTag = function () {
};
module.exports = function (properties) {
	return new TagTechnologyNfcF(properties);
};