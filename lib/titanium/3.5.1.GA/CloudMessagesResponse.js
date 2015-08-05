var crypto = require('crypto');
function CloudMessagesResponse(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'code',
			'error',
			'message',
			'messages',
			'meta',
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
	this.code = __SLAG_PROPERTIES.code || 0;
	this.error = __SLAG_PROPERTIES.error || true;
	this.message = __SLAG_PROPERTIES.message || '';
	this.messages = __SLAG_PROPERTIES.messages || [];
	this.meta = __SLAG_PROPERTIES.meta || {};
	this.success = __SLAG_PROPERTIES.success || true;
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
module.exports = function (properties) {
	return new CloudMessagesResponse(properties);
};