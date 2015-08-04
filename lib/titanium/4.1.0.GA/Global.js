var crypto = require('crypto');
function Global(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = ['id'];
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
	this.id = __SLAG__properties.id || '';
	return this;
}
Global.prototype.alert = function () {
};
Global.prototype.decodeURIComponent = function () {
	return '';
};
Global.prototype.encodeURIComponent = function () {
	return '';
};
Global.prototype.L = function () {
	return '';
};
Global.prototype.require = function () {
	return {};
};
Global.prototype.setTimeout = function () {
	return 0;
};
Global.prototype.clearTimeout = function () {
};
Global.prototype.setInterval = function () {
	return 0;
};
Global.prototype.clearInterval = function () {
};
module.exports = function (properties) {
	return new Global(properties);
};