function Cloud(properties) {
	properties = properties || {};
	this.accessToken = properties.accessToken || undefined;
	this.apiName = 'Ti.Cloud';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.debug = properties.debug || undefined;
	this.expiresIn = properties.expiresIn || undefined;
	this.ondatastream = properties.ondatastream || undefined;
	this.onsendstream = properties.onsendstream || undefined;
	this.sessionId = properties.sessionId || undefined;
	if (properties.useSecure) {
		throw new Error('Ti.Cloud.useSecure was deprecated, since 2.0');
	}
	return this;
}
Cloud.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Cloud.prototype.getAccessToken = function () {
	return '';
};
Cloud.prototype.getApiName = function () {
	return '';
};
Cloud.prototype.getBubbleParent = function () {
	return true;
};
Cloud.prototype.getDebug = function () {
	return true;
};
Cloud.prototype.getExpiresIn = function () {
	return 0;
};
Cloud.prototype.getOndatastream = function () {
	return {};
};
Cloud.prototype.getOnsendstream = function () {
	return {};
};
Cloud.prototype.getSessionId = function () {
	return '';
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
Cloud.prototype.setAccessToken = function () {
};
Cloud.prototype.setBubbleParent = function () {
};
Cloud.prototype.setDebug = function () {
};
Cloud.prototype.setOndatastream = function () {
};
Cloud.prototype.setOnsendstream = function () {
};
Cloud.prototype.setSessionId = function () {
};
Cloud.prototype.setUseSecure = function () {
	throw new Error('Ti.Cloud.setUseSecure was deprecated, since 2');
};
module.exports = function (properties) {
	return new Cloud(properties);
};