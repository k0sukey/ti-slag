var crypto = require('crypto');
function WriteStreamCallbackArgs(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bytesProcessed',
			'code',
			'error',
			'errorDescription',
			'errorState',
			'fromStream',
			'success',
			'toStream',
			'id'
		];
	if (__SLAG__names.length > 0 && process.env.SLAG_STRICT === 'true') {
		for (var __SLAG__name in __SLAG__properties) {
			if (__SLAG__names.indexOf(__SLAG__name) === -1) {
				throw new Error('Use user custom property ' + __SLAG__name);
			}
		}
	} else if (__SLAG__names.length === 0 && __SLAG__properties.length > 0 && process.env.SLAG_STRICT === 'true') {
		throw new Error('Use user custom properties. ' + __SLAG__properties.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	this.bytesProcessed = __SLAG__properties.bytesProcessed || 0;
	this.code = __SLAG__properties.code || 0;
	this.error = __SLAG__properties.error || '';
	if (__SLAG__properties.errorDescription) {
		throw new Error('WriteStreamCallbackArgs.errorDescription was deprecated, since 3.1.0');
	}
	if (__SLAG__properties.errorState) {
		throw new Error('WriteStreamCallbackArgs.errorState was deprecated, since 3.1.0');
	}
	this.fromStream = __SLAG__properties.fromStream || {};
	this.success = __SLAG__properties.success || true;
	this.toStream = __SLAG__properties.toStream || {};
	this.id = __SLAG__properties.id || '';
	return this;
}
module.exports = function (properties) {
	return new WriteStreamCallbackArgs(properties);
};