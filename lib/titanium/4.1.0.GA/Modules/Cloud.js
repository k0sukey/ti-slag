var crypto = require('crypto');
function Cloud(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'debug',
			'ondatastream',
			'onsendstream',
			'useSecure',
			'sessionId',
			'accessToken',
			'expiresIn',
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
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.apiName) {
		throw new Error('Modules.Cloud.apiName is read only property');
	}
	this.apiName = 'Modules.Cloud';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.debug = __SLAG__properties.debug || true;
	this.ondatastream = __SLAG__properties.ondatastream || {};
	this.onsendstream = __SLAG__properties.onsendstream || {};
	if (__SLAG__properties.useSecure) {
		throw new Error('Modules.Cloud.useSecure was deprecated, since 2.0');
	}
	this.sessionId = __SLAG__properties.sessionId || '';
	this.accessToken = __SLAG__properties.accessToken || '';
	if (__SLAG__properties.expiresIn) {
		throw new Error('Modules.Cloud.expiresIn is read only property');
	}
	this.expiresIn = 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
Cloud.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Cloud.prototype.hasStoredSession = function () {
	throw new Error('Modules.Cloud.hasStoredSession was deprecated, since 2.1.2');
};
Cloud.prototype.retrieveStoredSession = function () {
	throw new Error('Modules.Cloud.retrieveStoredSession was deprecated, since 2.1.2');
};
Cloud.prototype.sendRequest = function () {
};
Cloud.prototype.createX509CertificatePinningSecurityManager = function (params) {
	var X509CertificatePinningSecurityManager = require('./Cloud/X509CertificatePinningSecurityManager');
	return X509CertificatePinningSecurityManager(params);
};
Cloud.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Cloud.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Cloud.prototype.getApiName = function () {
	return this.apiName;
};
Cloud.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Cloud.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
Cloud.prototype.getDebug = function () {
	return this.debug;
};
Cloud.prototype.setDebug = function (property) {
	this.debug = property;
};
Cloud.prototype.getOndatastream = function () {
	return this.ondatastream;
};
Cloud.prototype.setOndatastream = function (property) {
	this.ondatastream = property;
};
Cloud.prototype.getOnsendstream = function () {
	return this.onsendstream;
};
Cloud.prototype.setOnsendstream = function (property) {
	this.onsendstream = property;
};
Cloud.prototype.getUseSecure = function () {
	throw new Error('Modules.Cloud.getUseSecure was deprecated, since 2.0');
};
Cloud.prototype.setUseSecure = function () {
	throw new Error('Modules.Cloud.setUseSecure was deprecated, since 2.0');
};
Cloud.prototype.getSessionId = function () {
	return this.sessionId;
};
Cloud.prototype.setSessionId = function (property) {
	this.sessionId = property;
};
Cloud.prototype.getAccessToken = function () {
	return this.accessToken;
};
Cloud.prototype.setAccessToken = function (property) {
	this.accessToken = property;
};
Cloud.prototype.getExpiresIn = function () {
	return this.expiresIn;
};
module.exports = function (properties) {
	return new Cloud(properties);
};