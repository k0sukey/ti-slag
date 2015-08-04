var crypto = require('crypto');
function NfcAdapter(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'onPushComplete',
			'onPushMessage',
			'onBeamPushUris',
			'onNdefDiscovered',
			'onTagDiscovered',
			'onTechDiscovered',
			'id'
		];
	if (__SLAG__names.length > 0 && process.env.SLAG_STRICT) {
		for (var __SLAG__name in __SLAG__properties) {
			if (__SLAG__names.indexOf(__SLAG__name) === -1) {
				throw new Error('Use user custom property ' + __SLAG__name);
			}
		}
	} else if (__SLAG__names.length === 0 && __SLAG__properties.length > 0 && process.env.SLAG_STRICT) {
		throw new Error('Use user custom properties. ' + __SLAG__properties.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.apiName) {
		throw new Error('Modules.Nfc.NfcAdapter.apiName is read only property');
	}
	this.apiName = 'Modules.Nfc.NfcAdapter';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.onPushComplete = __SLAG__properties.onPushComplete || {};
	this.onPushMessage = __SLAG__properties.onPushMessage || {};
	this.onBeamPushUris = __SLAG__properties.onBeamPushUris || {};
	this.onNdefDiscovered = __SLAG__properties.onNdefDiscovered || {};
	this.onTagDiscovered = __SLAG__properties.onTagDiscovered || {};
	this.onTechDiscovered = __SLAG__properties.onTechDiscovered || {};
	this.id = __SLAG__properties.id || '';
	return this;
}
NfcAdapter.prototype.addEventListener = function () {
};
NfcAdapter.prototype.removeEventListener = function () {
};
NfcAdapter.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
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
	return this.bubbleParent;
};
NfcAdapter.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
NfcAdapter.prototype.getApiName = function () {
	return this.apiName;
};
NfcAdapter.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
NfcAdapter.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
NfcAdapter.prototype.getOnPushComplete = function () {
	return this.onPushComplete;
};
NfcAdapter.prototype.setOnPushComplete = function (property) {
	this.onPushComplete = property;
};
NfcAdapter.prototype.getOnPushMessage = function () {
	return this.onPushMessage;
};
NfcAdapter.prototype.setOnPushMessage = function (property) {
	this.onPushMessage = property;
};
NfcAdapter.prototype.getOnBeamPushUris = function () {
	return this.onBeamPushUris;
};
NfcAdapter.prototype.setOnBeamPushUris = function (property) {
	this.onBeamPushUris = property;
};
NfcAdapter.prototype.getOnNdefDiscovered = function () {
	return this.onNdefDiscovered;
};
NfcAdapter.prototype.setOnNdefDiscovered = function (property) {
	this.onNdefDiscovered = property;
};
NfcAdapter.prototype.getOnTagDiscovered = function () {
	return this.onTagDiscovered;
};
NfcAdapter.prototype.setOnTagDiscovered = function (property) {
	this.onTagDiscovered = property;
};
NfcAdapter.prototype.getOnTechDiscovered = function () {
	return this.onTechDiscovered;
};
NfcAdapter.prototype.setOnTechDiscovered = function (property) {
	this.onTechDiscovered = property;
};
module.exports = function (properties) {
	return new NfcAdapter(properties);
};