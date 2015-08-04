var crypto = require('crypto');
function ACLs(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'apiName',
			'bubbleParent',
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
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.Cloud.ACLs.apiName is read only property');
	}
	this.apiName = 'Ti.Cloud.ACLs';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.id = __SLAG__properties.id || '';
	return this;
}
ACLs.prototype.addUser = function () {
};
ACLs.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
ACLs.prototype.checkUser = function () {
};
ACLs.prototype.create = function () {
};
ACLs.prototype.getApiName = function () {
	return this.apiName;
};
ACLs.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
ACLs.prototype.remove = function () {
};
ACLs.prototype.removeUser = function () {
};
ACLs.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
ACLs.prototype.show = function () {
};
ACLs.prototype.update = function () {
};
module.exports = function (properties) {
	return new ACLs(properties);
};