var crypto = require('crypto');
function NfcForegroundDispatchFilter(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'apiName',
			'lifecycleContainer',
			'intent',
			'intentFilters',
			'techLists',
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
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Modules.Nfc.NfcForegroundDispatchFilter.apiName is read only property');
	}
	this.apiName = 'Modules.Nfc.NfcForegroundDispatchFilter';
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.lifecycleContainer = undefined;
	} else {
		this.lifecycleContainer = __SLAG_PROPERTIES.lifecycleContainer || {};
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.intent = undefined;
	} else {
		this.intent = __SLAG_PROPERTIES.intent || {};
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.intentFilters = undefined;
	} else {
		this.intentFilters = __SLAG_PROPERTIES.intentFilters || [];
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.techLists = undefined;
	} else {
		this.techLists = __SLAG_PROPERTIES.techLists || '';
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
NfcForegroundDispatchFilter.prototype.getApiName = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
NfcForegroundDispatchFilter.prototype.getLifecycleContainer = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lifecycleContainer;
};
NfcForegroundDispatchFilter.prototype.setLifecycleContainer = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.lifecycleContainer = __SLAG__PROPERTY;
};
NfcForegroundDispatchFilter.prototype.getIntent = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.intent;
};
NfcForegroundDispatchFilter.prototype.setIntent = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.intent = __SLAG__PROPERTY;
};
NfcForegroundDispatchFilter.prototype.getIntentFilters = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.intentFilters;
};
NfcForegroundDispatchFilter.prototype.setIntentFilters = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.intentFilters = __SLAG__PROPERTY;
};
NfcForegroundDispatchFilter.prototype.getTechLists = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.techLists;
};
NfcForegroundDispatchFilter.prototype.setTechLists = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.techLists = __SLAG__PROPERTY;
};
module.exports = function (properties) {
	return new NfcForegroundDispatchFilter(properties);
};