var crypto = require('crypto');
function Cookie(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'comment',
			'domain',
			'expiryDate',
			'httponly',
			'name',
			'originalUrl',
			'path',
			'secure',
			'value',
			'version',
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
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.Network.Cookie.apiName is read only property');
	}
	this.apiName = 'Ti.Network.Cookie';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.comment = __SLAG__properties.comment || '';
	this.domain = __SLAG__properties.domain || '';
	this.expiryDate = __SLAG__properties.expiryDate || '';
	this.httponly = __SLAG__properties.httponly || true;
	if (__SLAG__properties.name) {
		throw new Error('Ti.Network.Cookie.name is read only property');
	}
	this.name = '';
	this.originalUrl = __SLAG__properties.originalUrl || '';
	this.path = __SLAG__properties.path || '';
	this.secure = __SLAG__properties.secure || true;
	this.value = __SLAG__properties.value || '';
	this.version = __SLAG__properties.version || 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
Cookie.prototype.addEventListener = function () {
};
Cookie.prototype.removeEventListener = function () {
};
Cookie.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Cookie.prototype.fireEvent = function () {
};
Cookie.prototype.isValid = function () {
	return true;
};
Cookie.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Cookie.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Cookie.prototype.getApiName = function () {
	return this.apiName;
};
Cookie.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Cookie.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
Cookie.prototype.getComment = function () {
	return this.comment;
};
Cookie.prototype.setComment = function (property) {
	this.comment = property;
};
Cookie.prototype.getDomain = function () {
	return this.domain;
};
Cookie.prototype.setDomain = function (property) {
	this.domain = property;
};
Cookie.prototype.getExpiryDate = function () {
	return this.expiryDate;
};
Cookie.prototype.setExpiryDate = function (property) {
	this.expiryDate = property;
};
Cookie.prototype.getHttponly = function () {
	return this.httponly;
};
Cookie.prototype.setHttponly = function (property) {
	this.httponly = property;
};
Cookie.prototype.getName = function () {
	return this.name;
};
Cookie.prototype.getOriginalUrl = function () {
	return this.originalUrl;
};
Cookie.prototype.setOriginalUrl = function (property) {
	this.originalUrl = property;
};
Cookie.prototype.getPath = function () {
	return this.path;
};
Cookie.prototype.setPath = function (property) {
	this.path = property;
};
Cookie.prototype.getSecure = function () {
	return this.secure;
};
Cookie.prototype.setSecure = function (property) {
	this.secure = property;
};
Cookie.prototype.getValue = function () {
	return this.value;
};
Cookie.prototype.setValue = function (property) {
	this.value = property;
};
Cookie.prototype.getVersion = function () {
	return this.version;
};
Cookie.prototype.setVersion = function (property) {
	this.version = property;
};
module.exports = function (properties) {
	return new Cookie(properties);
};