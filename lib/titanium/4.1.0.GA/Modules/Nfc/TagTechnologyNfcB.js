function TagTechnologyNfcB(properties) {
	properties = properties || {};
	this.apiName = 'Modules.Nfc.TagTechnologyNfcB';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.tag = properties.tag || {};
	return this;
}
TagTechnologyNfcB.prototype.isValid = function () {
	return true;
};
TagTechnologyNfcB.prototype.close = function () {
};
TagTechnologyNfcB.prototype.connect = function () {
};
TagTechnologyNfcB.prototype.isConnected = function () {
	return true;
};
TagTechnologyNfcB.prototype.getApplicationData = function () {
	return {};
};
TagTechnologyNfcB.prototype.getMaxTransceiveLength = function () {
	return 0;
};
TagTechnologyNfcB.prototype.getProtocolInfo = function () {
	return {};
};
TagTechnologyNfcB.prototype.transceive = function () {
	return {};
};
TagTechnologyNfcB.prototype.getApiName = function () {
	return '';
};
TagTechnologyNfcB.prototype.getLifecycleContainer = function () {
	return {};
};
TagTechnologyNfcB.prototype.setLifecycleContainer = function () {
};
TagTechnologyNfcB.prototype.getTag = function () {
	return {};
};
TagTechnologyNfcB.prototype.setTag = function () {
};
module.exports = function (properties) {
	return new TagTechnologyNfcB(properties);
};