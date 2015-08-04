var crypto = require('crypto');
function Messages(__SLAG__properties) {
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
		throw new Error('Ti.Cloud.Messages.apiName is read only property');
	}
	this.apiName = 'Ti.Cloud.Messages';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.id = __SLAG__properties.id || '';
	return this;
}
Messages.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Messages.prototype.create = function () {
};
Messages.prototype.getApiName = function () {
	return this.apiName;
};
Messages.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Messages.prototype.remove = function () {
};
Messages.prototype.removeThread = function () {
};
Messages.prototype.reply = function () {
};
Messages.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Messages.prototype.show = function () {
};
Messages.prototype.showInbox = function () {
};
Messages.prototype.showSent = function () {
};
Messages.prototype.showThread = function () {
};
Messages.prototype.showThreads = function () {
};
module.exports = function (properties) {
	return new Messages(properties);
};