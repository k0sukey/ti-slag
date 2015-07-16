function Cloud(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Modules.Cloud';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.debug = properties.debug || true;
	this.ondatastream = properties.ondatastream || {};
	this.onsendstream = properties.onsendstream || {};
	if (properties.useSecure) {
		throw new Error('Modules.Cloud.useSecure was deprecated, since 2.0');
	}
	this.sessionId = properties.sessionId || '';
	this.accessToken = properties.accessToken || '';
	this.expiresIn = properties.expiresIn || 0;
	return this;
}
Cloud.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
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
	return true;
};
Cloud.prototype.setBubbleParent = function () {
};
Cloud.prototype.getApiName = function () {
	return '';
};
Cloud.prototype.getLifecycleContainer = function () {
	return {};
};
Cloud.prototype.setLifecycleContainer = function () {
};
Cloud.prototype.getDebug = function () {
	return true;
};
Cloud.prototype.setDebug = function () {
};
Cloud.prototype.getOndatastream = function () {
	return {};
};
Cloud.prototype.setOndatastream = function () {
};
Cloud.prototype.getOnsendstream = function () {
	return {};
};
Cloud.prototype.setOnsendstream = function () {
};
Cloud.prototype.getUseSecure = function () {
	throw new Error('Modules.Cloud.getUseSecure was deprecated, since 2.0');
};
Cloud.prototype.setUseSecure = function () {
	throw new Error('Modules.Cloud.setUseSecure was deprecated, since 2.0');
};
Cloud.prototype.getSessionId = function () {
	return '';
};
Cloud.prototype.setSessionId = function () {
};
Cloud.prototype.getAccessToken = function () {
	return '';
};
Cloud.prototype.setAccessToken = function () {
};
Cloud.prototype.getExpiresIn = function () {
	return 0;
};
module.exports = function (properties) {
	return new Cloud(properties);
};