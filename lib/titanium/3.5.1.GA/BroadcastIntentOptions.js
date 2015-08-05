var crypto = require('crypto');
function BroadcastIntentOptions(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'action',
			'className',
			'data',
			'flags',
			'packageName',
			'url',
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
	this.action = __SLAG_PROPERTIES.action || '';
	this.className = __SLAG_PROPERTIES.className || '';
	this.data = __SLAG_PROPERTIES.data || '';
	this.flags = __SLAG_PROPERTIES.flags || 0;
	this.packageName = __SLAG_PROPERTIES.packageName || '';
	this.url = __SLAG_PROPERTIES.url || '';
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
module.exports = function (properties) {
	return new BroadcastIntentOptions(properties);
};