var crypto = require('crypto');
function SecurityManagerProtocol(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = ['id'];
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
	this.id = __SLAG__properties.id || '';
	return this;
}
SecurityManagerProtocol.prototype.willHandleURL = function () {
	return true;
};
SecurityManagerProtocol.prototype.connectionDelegateForUrl = function () {
	return {};
};
SecurityManagerProtocol.prototype.getTrustManagers = function () {
	return [];
};
SecurityManagerProtocol.prototype.getKeyManagers = function () {
	return [];
};
module.exports = function (properties) {
	return new SecurityManagerProtocol(properties);
};