var crypto = require('crypto');
function CloudClientsResponse(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'code',
			'error',
			'ip_address',
			'location',
			'message',
			'meta',
			'success',
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
	this.code = __SLAG__properties.code || 0;
	this.error = __SLAG__properties.error || true;
	this.ip_address = __SLAG__properties.ip_address || '';
	this.location = __SLAG__properties.location || {};
	this.message = __SLAG__properties.message || '';
	this.meta = __SLAG__properties.meta || {};
	this.success = __SLAG__properties.success || true;
	this.id = __SLAG__properties.id || '';
	return this;
}
module.exports = function (properties) {
	return new CloudClientsResponse(properties);
};