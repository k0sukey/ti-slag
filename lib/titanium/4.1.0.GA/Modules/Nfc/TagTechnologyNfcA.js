function TagTechnologyNfcA(properties) {
	properties = properties || {};
	this.apiName = 'Modules.Nfc.TagTechnologyNfcA';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.tag = properties.tag || {};
	return this;
}
TagTechnologyNfcA.prototype.isValid = function () {
	return true;
};
TagTechnologyNfcA.prototype.close = function () {
};
TagTechnologyNfcA.prototype.connect = function () {
};
TagTechnologyNfcA.prototype.isConnected = function () {
	return true;
};
TagTechnologyNfcA.prototype.getAtqa = function () {
	return {};
};
TagTechnologyNfcA.prototype.getMaxTransceiveLength = function () {
	return 0;
};
TagTechnologyNfcA.prototype.getSak = function () {
	return 0;
};
TagTechnologyNfcA.prototype.getTimeout = function () {
	return 0;
};
TagTechnologyNfcA.prototype.setTimeout = function () {
};
TagTechnologyNfcA.prototype.transceive = function () {
	return {};
};
TagTechnologyNfcA.prototype.getApiName = function () {
	return '';
};
TagTechnologyNfcA.prototype.getLifecycleContainer = function () {
	return {};
};
TagTechnologyNfcA.prototype.setLifecycleContainer = function () {
};
TagTechnologyNfcA.prototype.getTag = function () {
	return {};
};
TagTechnologyNfcA.prototype.setTag = function () {
};
module.exports = function (properties) {
	return new TagTechnologyNfcA(properties);
};