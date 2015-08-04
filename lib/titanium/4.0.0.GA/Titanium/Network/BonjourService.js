var crypto = require('crypto');
function BonjourService(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'apiName',
			'bubbleParent',
			'domain',
			'isLocal',
			'name',
			'socket',
			'type',
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
		throw new Error('Ti.Network.BonjourService.apiName is read only property');
	}
	this.apiName = 'Ti.Network.BonjourService';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.domain = __SLAG__properties.domain || '';
	this.isLocal = __SLAG__properties.isLocal || true;
	this.name = __SLAG__properties.name || '';
	this.socket = __SLAG__properties.socket || {};
	this.type = __SLAG__properties.type || '';
	this.id = __SLAG__properties.id || '';
	return this;
}
BonjourService.prototype.addEventListener = function () {
};
BonjourService.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
BonjourService.prototype.fireEvent = function () {
};
BonjourService.prototype.getApiName = function () {
	return this.apiName;
};
BonjourService.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
BonjourService.prototype.getDomain = function () {
	return this.domain;
};
BonjourService.prototype.getIsLocal = function () {
	return this.isLocal;
};
BonjourService.prototype.getName = function () {
	return this.name;
};
BonjourService.prototype.getSocket = function () {
	return this.socket;
};
BonjourService.prototype.getType = function () {
	return this.type;
};
BonjourService.prototype.publish = function () {
};
BonjourService.prototype.removeEventListener = function () {
};
BonjourService.prototype.resolve = function () {
};
BonjourService.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
BonjourService.prototype.setDomain = function (property) {
	this.domain = property;
};
BonjourService.prototype.setIsLocal = function (property) {
	this.isLocal = property;
};
BonjourService.prototype.setName = function (property) {
	this.name = property;
};
BonjourService.prototype.setSocket = function (property) {
	this.socket = property;
};
BonjourService.prototype.setType = function (property) {
	this.type = property;
};
BonjourService.prototype.stop = function () {
};
module.exports = function (properties) {
	return new BonjourService(properties);
};