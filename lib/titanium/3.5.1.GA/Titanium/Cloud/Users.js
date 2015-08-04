var crypto = require('crypto');
function Users(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'apiName',
			'bubbleParent',
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
		throw new Error('Ti.Cloud.Users.apiName is read only property');
	}
	this.apiName = 'Ti.Cloud.Users';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.id = __SLAG__properties.id || '';
	return this;
}
Users.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Users.prototype.create = function () {
};
Users.prototype.getApiName = function () {
	return this.apiName;
};
Users.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Users.prototype.login = function () {
};
Users.prototype.logout = function () {
};
Users.prototype.query = function () {
};
Users.prototype.remove = function () {
};
Users.prototype.requestResetPassword = function () {
};
Users.prototype.resendConfirmation = function () {
};
Users.prototype.search = function () {
};
Users.prototype.secureCreate = function () {
	throw new Error('Ti.Cloud.Users.secureCreate was deprecated, since 3.2.3');
};
Users.prototype.secureLogin = function () {
	throw new Error('Ti.Cloud.Users.secureLogin was deprecated, since 3.2.3');
};
Users.prototype.secureStatus = function () {
	throw new Error('Ti.Cloud.Users.secureStatus was deprecated, since 3.2.3');
};
Users.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Users.prototype.show = function () {
};
Users.prototype.showMe = function () {
};
Users.prototype.update = function () {
};
module.exports = function (properties) {
	return new Users(properties);
};