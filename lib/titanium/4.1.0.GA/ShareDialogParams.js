var crypto = require('crypto');
function ShareDialogParams(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'caption',
			'description',
			'link',
			'name',
			'picture',
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
	this.caption = __SLAG__properties.caption || '';
	this.description = __SLAG__properties.description || '';
	this.link = __SLAG__properties.link || '';
	this.name = __SLAG__properties.name || '';
	this.picture = __SLAG__properties.picture || '';
	this.id = __SLAG__properties.id || '';
	return this;
}
module.exports = function (properties) {
	return new ShareDialogParams(properties);
};