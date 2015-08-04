var crypto = require('crypto');
function PopoverParams(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'animated',
			'rect',
			'view',
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
	this.animated = __SLAG__properties.animated || true;
	this.rect = __SLAG__properties.rect || {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.view = __SLAG__properties.view || {};
	this.id = __SLAG__properties.id || '';
	return this;
}
module.exports = function (properties) {
	return new PopoverParams(properties);
};