function TagTechnologyIsoDep(properties) {
	properties = properties || {};
	this.apiName = 'Modules.Nfc.TagTechnologyIsoDep';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.tag = properties.tag || {};
	return this;
}
TagTechnologyIsoDep.prototype.isValid = function () {
	return true;
};
TagTechnologyIsoDep.prototype.close = function () {
};
TagTechnologyIsoDep.prototype.connect = function () {
};
TagTechnologyIsoDep.prototype.isConnected = function () {
	return true;
};
TagTechnologyIsoDep.prototype.getHiLayerResponse = function () {
	return {};
};
TagTechnologyIsoDep.prototype.getHistoricalBytes = function () {
	return {};
};
TagTechnologyIsoDep.prototype.getMaxTransceiveLength = function () {
	return 0;
};
TagTechnologyIsoDep.prototype.getTimeout = function () {
	return 0;
};
TagTechnologyIsoDep.prototype.isExtendedLengthApduSupported = function () {
	return true;
};
TagTechnologyIsoDep.prototype.setTimeout = function () {
};
TagTechnologyIsoDep.prototype.transceive = function () {
	return {};
};
TagTechnologyIsoDep.prototype.getApiName = function () {
	return '';
};
TagTechnologyIsoDep.prototype.getLifecycleContainer = function () {
	return {};
};
TagTechnologyIsoDep.prototype.setLifecycleContainer = function () {
};
TagTechnologyIsoDep.prototype.getTag = function () {
	return {};
};
TagTechnologyIsoDep.prototype.setTag = function () {
};
module.exports = function (properties) {
	return new TagTechnologyIsoDep(properties);
};