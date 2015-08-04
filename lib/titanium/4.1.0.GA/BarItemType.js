var crypto = require('crypto');
function BarItemType(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'title',
			'image',
			'width',
			'enabled',
			'accessibilityLabel',
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
	this.title = __SLAG__properties.title || '';
	this.image = __SLAG__properties.image || '';
	this.width = __SLAG__properties.width || 0;
	this.enabled = __SLAG__properties.enabled || true;
	this.accessibilityLabel = __SLAG__properties.accessibilityLabel || '';
	this.id = __SLAG__properties.id || '';
	return this;
}
module.exports = function (properties) {
	return new BarItemType(properties);
};