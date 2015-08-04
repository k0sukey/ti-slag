var crypto = require('crypto');
function Group(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'apiName',
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
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.Contacts.Tizen.Group.apiName is read only property');
	}
	this.apiName = 'Ti.Contacts.Tizen.Group';
	this.id = __SLAG__properties.id || '';
	return this;
}
Group.prototype.addEventListener = function () {
};
Group.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Group.prototype.fireEvent = function () {
};
Group.prototype.getApiName = function () {
	return this.apiName;
};
Group.prototype.members = function () {
};
Group.prototype.removeEventListener = function () {
};
Group.prototype.sortedMembers = function () {
};
module.exports = function (properties) {
	return new Group(properties);
};