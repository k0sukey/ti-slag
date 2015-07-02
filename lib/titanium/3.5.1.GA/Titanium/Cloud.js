function Cloud(properties) {
	properties = properties || {};
	this.accessToken = properties.accessToken || undefined;
	this.apiName = 'Titanium.Cloud';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.debug = properties.debug || undefined;
	this.expiresIn = properties.expiresIn || undefined;
	this.ondatastream = properties.ondatastream || undefined;
	this.onsendstream = properties.onsendstream || undefined;
	this.sessionId = properties.sessionId || undefined;
	this.useSecure = properties.useSecure || undefined;
	return this;
}
Cloud.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
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
Cloud.prototype.getSessionId = function () {
	return this.sessionId;
};
Cloud.prototype.getUseSecure = function () {
	return this.useSecure;
};
Cloud.prototype.hasStoredSession = function () {
	return true;
};
Cloud.prototype.retrieveStoredSession = function () {
	return '';
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
Cloud.prototype.setUseSecure = function (property) {
	this.useSecure = property;
};
module.exports = function (properties) {
	return new Cloud(properties);
};