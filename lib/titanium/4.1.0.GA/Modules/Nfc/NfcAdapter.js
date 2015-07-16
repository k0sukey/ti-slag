function NfcAdapter(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Modules.Nfc.NfcAdapter';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.onPushComplete = properties.onPushComplete || {};
	this.onPushMessage = properties.onPushMessage || {};
	this.onBeamPushUris = properties.onBeamPushUris || {};
	this.onNdefDiscovered = properties.onNdefDiscovered || {};
	this.onTagDiscovered = properties.onTagDiscovered || {};
	this.onTechDiscovered = properties.onTechDiscovered || {};
	return this;
}
NfcAdapter.prototype.addEventListener = function () {
};
NfcAdapter.prototype.removeEventListener = function () {
};
NfcAdapter.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
NfcAdapter.prototype.fireEvent = function () {
};
NfcAdapter.prototype.isEnabled = function () {
	return true;
};
NfcAdapter.prototype.isNdefPushEnabled = function () {
	return true;
};
NfcAdapter.prototype.onNewIntent = function () {
};
NfcAdapter.prototype.disableForegroundDispatch = function () {
};
NfcAdapter.prototype.disableForegroundNdefPush = function () {
};
NfcAdapter.prototype.enableForegroundDispatch = function () {
};
NfcAdapter.prototype.enableForegroundNdefPush = function () {
};
NfcAdapter.prototype.setNdefPushMessage = function () {
};
NfcAdapter.prototype.setBeamPushUris = function () {
};
NfcAdapter.prototype.getBubbleParent = function () {
	return true;
};
NfcAdapter.prototype.setBubbleParent = function () {
};
NfcAdapter.prototype.getApiName = function () {
	return '';
};
NfcAdapter.prototype.getLifecycleContainer = function () {
	return {};
};
NfcAdapter.prototype.setLifecycleContainer = function () {
};
NfcAdapter.prototype.getOnPushComplete = function () {
	return {};
};
NfcAdapter.prototype.setOnPushComplete = function () {
};
NfcAdapter.prototype.getOnPushMessage = function () {
	return {};
};
NfcAdapter.prototype.setOnPushMessage = function () {
};
NfcAdapter.prototype.getOnBeamPushUris = function () {
	return {};
};
NfcAdapter.prototype.setOnBeamPushUris = function () {
};
NfcAdapter.prototype.getOnNdefDiscovered = function () {
	return {};
};
NfcAdapter.prototype.setOnNdefDiscovered = function () {
};
NfcAdapter.prototype.getOnTagDiscovered = function () {
	return {};
};
NfcAdapter.prototype.setOnTagDiscovered = function () {
};
NfcAdapter.prototype.getOnTechDiscovered = function () {
	return {};
};
NfcAdapter.prototype.setOnTechDiscovered = function () {
};
module.exports = function (properties) {
	return new NfcAdapter(properties);
};