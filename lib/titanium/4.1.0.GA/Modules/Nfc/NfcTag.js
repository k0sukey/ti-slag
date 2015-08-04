var crypto = require('crypto');
function NfcTag(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'id',
			'techList',
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
		throw new Error('Modules.Nfc.NfcTag.apiName is read only property');
	}
	this.apiName = 'Modules.Nfc.NfcTag';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	if (__SLAG__properties.id) {
		throw new Error('Modules.Nfc.NfcTag.id is read only property');
	}
	this.id = '';
	if (__SLAG__properties.techList) {
		throw new Error('Modules.Nfc.NfcTag.techList is read only property');
	}
	this.techList = '';
	this.id = __SLAG__properties.id || '';
	return this;
}
NfcTag.prototype.addEventListener = function () {
};
NfcTag.prototype.removeEventListener = function () {
};
NfcTag.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
NfcTag.prototype.fireEvent = function () {
};
NfcTag.prototype.getId = function () {
	return this.id;
};
NfcTag.prototype.getTechList = function () {
	return this.techList;
};
NfcTag.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
NfcTag.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
NfcTag.prototype.getApiName = function () {
	return this.apiName;
};
NfcTag.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
NfcTag.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
NfcTag.prototype.getId = function () {
	return this.id;
};
module.exports = function (properties) {
	return new NfcTag(properties);
};