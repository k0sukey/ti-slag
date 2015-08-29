var crypto = require('crypto');
function WebAPIError(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'code',
			'message',
			'name',
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
	if (__SLAG_PROPERTIES.code) {
		throw new Error('WebAPIError.code is read only property');
	}
	if (['tizen'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.code = undefined;
	} else {
		this.code = 0;
	}
	if (__SLAG_PROPERTIES.message) {
		throw new Error('WebAPIError.message is read only property');
	}
	if (['tizen'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.message = undefined;
	} else {
		this.message = '';
	}
	if (__SLAG_PROPERTIES.name) {
		throw new Error('WebAPIError.name is read only property');
	}
	if (['tizen'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.name = undefined;
	} else {
		this.name = '';
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
module.exports = function (properties) {
	return new WebAPIError(properties);
};