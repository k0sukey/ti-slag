var crypto = require('crypto');
function Gradient(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'backfillEnd',
			'backfillStart',
			'colors',
			'endPoint',
			'endRadius',
			'startPoint',
			'startRadius',
			'type',
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
	this.backfillEnd = __SLAG__properties.backfillEnd || true;
	this.backfillStart = __SLAG__properties.backfillStart || true;
	this.colors = __SLAG__properties.colors || '';
	this.endPoint = __SLAG__properties.endPoint || {
		x: 0,
		y: 0
	};
	this.endRadius = __SLAG__properties.endRadius || 0;
	this.startPoint = __SLAG__properties.startPoint || {
		x: 0,
		y: 0
	};
	this.startRadius = __SLAG__properties.startRadius || 0;
	this.type = __SLAG__properties.type || '';
	this.id = __SLAG__properties.id || '';
	return this;
}
module.exports = function (properties) {
	return new Gradient(properties);
};