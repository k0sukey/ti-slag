function NfcTag(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Modules.Nfc.NfcTag';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.id = properties.id || '';
	this.techList = properties.techList || '';
	return this;
}
NfcTag.prototype.addEventListener = function () {
};
NfcTag.prototype.removeEventListener = function () {
};
NfcTag.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
NfcTag.prototype.fireEvent = function () {
};
NfcTag.prototype.getId = function () {
	return '';
};
NfcTag.prototype.getTechList = function () {
	return '';
};
NfcTag.prototype.getBubbleParent = function () {
	return true;
};
NfcTag.prototype.setBubbleParent = function () {
};
NfcTag.prototype.getApiName = function () {
	return '';
};
NfcTag.prototype.getLifecycleContainer = function () {
	return {};
};
NfcTag.prototype.setLifecycleContainer = function () {
};
NfcTag.prototype.getId = function () {
	return '';
};
module.exports = function (properties) {
	return new NfcTag(properties);
};