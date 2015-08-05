var crypto = require('crypto');
function EncodeStringDict(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'charset',
			'dest',
			'destPosition',
			'source',
			'sourceLength',
			'sourcePosition',
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
	this.charset = __SLAG_PROPERTIES.charset || '';
	this.dest = __SLAG_PROPERTIES.dest || {};
	this.destPosition = __SLAG_PROPERTIES.destPosition || 0;
	this.source = __SLAG_PROPERTIES.source || '';
	this.sourceLength = __SLAG_PROPERTIES.sourceLength || 0;
	this.sourcePosition = __SLAG_PROPERTIES.sourcePosition || 0;
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
module.exports = function (properties) {
	return new EncodeStringDict(properties);
};