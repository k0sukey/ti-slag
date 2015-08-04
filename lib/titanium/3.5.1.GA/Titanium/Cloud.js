var crypto = require('crypto');
function Cloud(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'accessToken',
			'apiName',
			'bubbleParent',
			'debug',
			'expiresIn',
			'ondatastream',
			'onsendstream',
			'sessionId',
			'useSecure',
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
	this.accessToken = __SLAG__properties.accessToken || '';
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.Cloud.apiName is read only property');
	}
	this.apiName = 'Ti.Cloud';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.debug = __SLAG__properties.debug || true;
	if (__SLAG__properties.expiresIn) {
		throw new Error('Ti.Cloud.expiresIn is read only property');
	}
	this.expiresIn = 0;
	this.ondatastream = __SLAG__properties.ondatastream || {};
	this.onsendstream = __SLAG__properties.onsendstream || {};
	this.sessionId = __SLAG__properties.sessionId || '';
	if (__SLAG__properties.useSecure) {
		throw new Error('Ti.Cloud.useSecure was deprecated, since 2.0');
	}
	this.id = __SLAG__properties.id || '';
	return this;
}
Cloud.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Cloud.prototype.getAccessToken = function () {
	return this.accessToken;
};
Cloud.prototype.getApiName = function () {
	return this.apiName;
};
Cloud.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Cloud.prototype.getDebug = function () {
	return this.debug;
};
Cloud.prototype.getExpiresIn = function () {
	return this.expiresIn;
};
Cloud.prototype.getOndatastream = function () {
	return this.ondatastream;
};
Cloud.prototype.getOnsendstream = function () {
	return this.onsendstream;
};
Cloud.prototype.getSessionId = function () {
	return this.sessionId;
};
Cloud.prototype.getUseSecure = function () {
	throw new Error('Ti.Cloud.getUseSecure was deprecated, since 2');
};
Cloud.prototype.hasStoredSession = function () {
	throw new Error('Ti.Cloud.hasStoredSession was deprecated, since 2.1.2');
};
Cloud.prototype.retrieveStoredSession = function () {
	throw new Error('Ti.Cloud.retrieveStoredSession was deprecated, since 2.1.2');
};
Cloud.prototype.sendRequest = function () {
};
Cloud.prototype.setAccessToken = function (property) {
	this.accessToken = property;
};
Cloud.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Cloud.prototype.setDebug = function (property) {
	this.debug = property;
};
Cloud.prototype.setOndatastream = function (property) {
	this.ondatastream = property;
};
Cloud.prototype.setOnsendstream = function (property) {
	this.onsendstream = property;
};
Cloud.prototype.setSessionId = function (property) {
	this.sessionId = property;
};
Cloud.prototype.setUseSecure = function () {
	throw new Error('Ti.Cloud.setUseSecure was deprecated, since 2');
};
module.exports = function (properties) {
	return new Cloud(properties);
};