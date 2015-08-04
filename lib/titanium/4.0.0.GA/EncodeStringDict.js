var crypto = require('crypto');
function EncodeStringDict(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'charset',
			'dest',
			'destPosition',
			'source',
			'sourceLength',
			'sourcePosition',
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
	this.charset = __SLAG__properties.charset || '';
	this.dest = __SLAG__properties.dest || {};
	this.destPosition = __SLAG__properties.destPosition || 0;
	this.source = __SLAG__properties.source || '';
	this.sourceLength = __SLAG__properties.sourceLength || 0;
	this.sourcePosition = __SLAG__properties.sourcePosition || 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
module.exports = function (properties) {
	return new EncodeStringDict(properties);
};