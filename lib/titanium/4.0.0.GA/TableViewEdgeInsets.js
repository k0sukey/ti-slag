var crypto = require('crypto');
function TableViewEdgeInsets(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bottom',
			'left',
			'right',
			'top',
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
	this.bottom = __SLAG__properties.bottom || 0;
	this.left = __SLAG__properties.left || 0;
	this.right = __SLAG__properties.right || 0;
	this.top = __SLAG__properties.top || 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
module.exports = function (properties) {
	return new TableViewEdgeInsets(properties);
};