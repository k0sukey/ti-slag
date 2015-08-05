var crypto = require('crypto');
function WriteCallbackArgs(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'bytesProcessed',
			'code',
			'error',
			'errorDescription',
			'errorState',
			'source',
			'success',
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
	this.bytesProcessed = __SLAG_PROPERTIES.bytesProcessed || 0;
	this.code = __SLAG_PROPERTIES.code || 0;
	this.error = __SLAG_PROPERTIES.error || '';
	if (__SLAG_PROPERTIES.errorDescription) {
		throw new Error('WriteCallbackArgs.errorDescription was deprecated, since 3.1.0');
	}
	if (__SLAG_PROPERTIES.errorState) {
		throw new Error('WriteCallbackArgs.errorState was deprecated, since 3.1.0');
	}
	this.source = __SLAG_PROPERTIES.source || {};
	this.success = __SLAG_PROPERTIES.success || true;
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
module.exports = function (properties) {
	return new WriteCallbackArgs(properties);
};