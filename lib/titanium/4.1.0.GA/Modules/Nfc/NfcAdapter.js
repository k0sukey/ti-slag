var crypto = require('crypto');
function NfcAdapter(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
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
	if (__SLAG_NAMES.length > 0 && process.env.SLAG_STRICT === 'true') {
		for (var __SLAG_NAME in __SLAG_PROPERTIES) {
			if (__SLAG_NAMES.indexOf(__SLAG_NAME) === -1) {
				throw new Error('Use user custom property ' + __SLAG_NAME);
			}
		}
	} else if (__SLAG_NAMES.length === 0 && __SLAG_PROPERTIES.length > 0 && process.env.SLAG_STRICT === 'true') {
		throw new Error('Use user custom properties. ' + __SLAG_PROPERTIES.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Modules.Nfc.NfcAdapter.apiName is read only property');
	}
	this.apiName = 'Modules.Nfc.NfcAdapter';
	this.lifecycleContainer = __SLAG_PROPERTIES.lifecycleContainer || {};
	this.onPushComplete = __SLAG_PROPERTIES.onPushComplete || {};
	this.onPushMessage = __SLAG_PROPERTIES.onPushMessage || {};
	this.onBeamPushUris = __SLAG_PROPERTIES.onBeamPushUris || {};
	this.onNdefDiscovered = __SLAG_PROPERTIES.onNdefDiscovered || {};
	this.onTagDiscovered = __SLAG_PROPERTIES.onTagDiscovered || {};
	this.onTechDiscovered = __SLAG_PROPERTIES.onTechDiscovered || {};
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
NfcAdapter.prototype.addEventListener = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
NfcAdapter.prototype.removeEventListener = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
NfcAdapter.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
NfcAdapter.prototype.fireEvent = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
NfcAdapter.prototype.isEnabled = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
NfcAdapter.prototype.isNdefPushEnabled = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
NfcAdapter.prototype.onNewIntent = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
NfcAdapter.prototype.disableForegroundDispatch = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
NfcAdapter.prototype.disableForegroundNdefPush = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
NfcAdapter.prototype.enableForegroundDispatch = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
NfcAdapter.prototype.enableForegroundNdefPush = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
NfcAdapter.prototype.setNdefPushMessage = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
NfcAdapter.prototype.setBeamPushUris = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
NfcAdapter.prototype.getBubbleParent = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
NfcAdapter.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
NfcAdapter.prototype.getApiName = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
NfcAdapter.prototype.getLifecycleContainer = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lifecycleContainer;
};
NfcAdapter.prototype.setLifecycleContainer = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.lifecycleContainer = __SLAG__PROPERTY;
};
NfcAdapter.prototype.getOnPushComplete = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.onPushComplete;
};
NfcAdapter.prototype.setOnPushComplete = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.onPushComplete = __SLAG__PROPERTY;
};
NfcAdapter.prototype.getOnPushMessage = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.onPushMessage;
};
NfcAdapter.prototype.setOnPushMessage = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.onPushMessage = __SLAG__PROPERTY;
};
NfcAdapter.prototype.getOnBeamPushUris = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.onBeamPushUris;
};
NfcAdapter.prototype.setOnBeamPushUris = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.onBeamPushUris = __SLAG__PROPERTY;
};
NfcAdapter.prototype.getOnNdefDiscovered = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.onNdefDiscovered;
};
NfcAdapter.prototype.setOnNdefDiscovered = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.onNdefDiscovered = __SLAG__PROPERTY;
};
NfcAdapter.prototype.getOnTagDiscovered = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.onTagDiscovered;
};
NfcAdapter.prototype.setOnTagDiscovered = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.onTagDiscovered = __SLAG__PROPERTY;
};
NfcAdapter.prototype.getOnTechDiscovered = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.onTechDiscovered;
};
NfcAdapter.prototype.setOnTechDiscovered = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.onTechDiscovered = __SLAG__PROPERTY;
};
module.exports = function (properties) {
	return new NfcAdapter(properties);
};