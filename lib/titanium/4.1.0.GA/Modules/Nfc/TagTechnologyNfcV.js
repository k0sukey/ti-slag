function TagTechnologyNfcV(properties) {
	properties = properties || {};
	this.apiName = 'Modules.Nfc.TagTechnologyNfcV';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.tag = properties.tag || {};
	return this;
}
TagTechnologyNfcV.prototype.isValid = function () {
	return true;
};
TagTechnologyNfcV.prototype.close = function () {
};
TagTechnologyNfcV.prototype.connect = function () {
};
TagTechnologyNfcV.prototype.isConnected = function () {
	return true;
};
TagTechnologyNfcV.prototype.getDsfId = function () {
	return 0;
};
TagTechnologyNfcV.prototype.getMaxTransceiveLength = function () {
	return 0;
};
TagTechnologyNfcV.prototype.getResponseFlags = function () {
	return 0;
};
TagTechnologyNfcV.prototype.transceive = function () {
	return {};
};
TagTechnologyNfcV.prototype.getApiName = function () {
	return '';
};
TagTechnologyNfcV.prototype.getLifecycleContainer = function () {
	return {};
};
TagTechnologyNfcV.prototype.setLifecycleContainer = function () {
};
TagTechnologyNfcV.prototype.getTag = function () {
	return {};
};
TagTechnologyNfcV.prototype.setTag = function () {
};
module.exports = function (properties) {
	return new TagTechnologyNfcV(properties);
};