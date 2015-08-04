var crypto = require('crypto');
function BoundaryIdentifier(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'identifier',
			'point1',
			'point2',
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
	this.identifier = __SLAG__properties.identifier || '';
	this.point1 = __SLAG__properties.point1 || {
		x: 0,
		y: 0
	};
	this.point2 = __SLAG__properties.point2 || {
		x: 0,
		y: 0
	};
	this.id = __SLAG__properties.id || '';
	return this;
}
module.exports = function (properties) {
	return new BoundaryIdentifier(properties);
};