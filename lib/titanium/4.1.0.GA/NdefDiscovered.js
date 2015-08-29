var crypto = require('crypto');
function NdefDiscovered(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'action',
			'tag',
			'messsages',
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
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.action = undefined;
	} else {
		this.action = __SLAG_PROPERTIES.action || '';
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.tag = undefined;
	} else {
		this.tag = __SLAG_PROPERTIES.tag || {};
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.messsages = undefined;
	} else {
		this.messsages = __SLAG_PROPERTIES.messsages || [];
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
module.exports = function (properties) {
	return new NdefDiscovered(properties);
};