var crypto = require('crypto');
function showContactsParams(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'animated',
			'cancel',
			'fields',
			'selectedPerson',
			'selectedProperty',
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
	if ([
			'android',
			'ios',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.animated = undefined;
	} else {
		this.animated = __SLAG_PROPERTIES.animated || true;
	}
	if ([
			'android',
			'ios',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.cancel = undefined;
	} else {
		this.cancel = __SLAG_PROPERTIES.cancel || {};
	}
	if ([
			'android',
			'ios',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.fields = undefined;
	} else {
		this.fields = __SLAG_PROPERTIES.fields || '';
	}
	if ([
			'android',
			'ios',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.selectedPerson = undefined;
	} else {
		this.selectedPerson = __SLAG_PROPERTIES.selectedPerson || {};
	}
	if ([
			'android',
			'ios',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.selectedProperty = undefined;
	} else {
		this.selectedProperty = __SLAG_PROPERTIES.selectedProperty || {};
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
module.exports = function (properties) {
	return new showContactsParams(properties);
};