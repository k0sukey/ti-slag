var crypto = require('crypto');
function CommandBar(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'items',
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
	this.items = __SLAG__properties.items || [];
	this.id = __SLAG__properties.id || '';
	return this;
}
CommandBar.prototype.addEventListener = function () {
};
CommandBar.prototype.removeEventListener = function () {
};
CommandBar.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
CommandBar.prototype.fireEvent = function () {
};
CommandBar.prototype.getItems = function () {
	return this.items;
};
CommandBar.prototype.setItems = function (property) {
	this.items = property;
};
module.exports = function (properties) {
	return new CommandBar(properties);
};