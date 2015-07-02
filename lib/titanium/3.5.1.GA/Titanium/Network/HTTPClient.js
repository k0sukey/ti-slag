function HTTPClient(properties) {
	properties = properties || {};
	this.DONE = properties.DONE || undefined;
	this.HEADERS_RECEIVED = properties.HEADERS_RECEIVED || undefined;
	this.LOADING = properties.LOADING || undefined;
	this.OPENED = properties.OPENED || undefined;
	this.UNSENT = properties.UNSENT || undefined;
	this.allResponseHeaders = properties.allResponseHeaders || undefined;
	this.apiName = 'Titanium.Network.HTTPClient';
	this.autoEncodeUrl = properties.autoEncodeUrl || undefined;
	this.autoRedirect = properties.autoRedirect || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.cache = properties.cache || undefined;
	this.connected = properties.connected || undefined;
	this.connectionType = properties.connectionType || undefined;
	this.domain = properties.domain || undefined;
	this.enableKeepAlive = properties.enableKeepAlive || undefined;
	this.file = properties.file || undefined;
	this.location = properties.location || undefined;
	this.ondatastream = properties.ondatastream || undefined;
	this.onerror = properties.onerror || undefined;
	this.onload = properties.onload || undefined;
	this.onreadystatechange = properties.onreadystatechange || undefined;
	this.onsendstream = properties.onsendstream || undefined;
	this.password = properties.password || undefined;
	this.readyState = properties.readyState || undefined;
	this.responseData = properties.responseData || undefined;
	this.responseText = properties.responseText || undefined;
	this.responseXML = properties.responseXML || undefined;
	this.securityManager = properties.securityManager || undefined;
	this.status = properties.status || undefined;
	this.statusText = properties.statusText || undefined;
	this.timeout = properties.timeout || undefined;
	this.tlsVersion = properties.tlsVersion || undefined;
	this.username = properties.username || undefined;
	this.validatesSecureCertificate = properties.validatesSecureCertificate || undefined;
	this.withCredentials = properties.withCredentials || undefined;
	return this;
}
HTTPClient.prototype.abort = function () {
};
HTTPClient.prototype.addAuthFactory = function () {
};
HTTPClient.prototype.addEventListener = function () {
};
HTTPClient.prototype.addKeyManager = function () {
};
HTTPClient.prototype.addTrustManager = function () {
};
HTTPClient.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
HTTPClient.prototype.clearCookies = function () {
};
HTTPClient.prototype.fireEvent = function () {
};
HTTPClient.prototype.getAllResponseHeaders = function () {
	return this.allResponseHeaders;
};
HTTPClient.prototype.getApiName = function () {
	return this.apiName;
};
HTTPClient.prototype.getAutoEncodeUrl = function () {
	return this.autoEncodeUrl;
};
HTTPClient.prototype.getAutoRedirect = function () {
	return this.autoRedirect;
};
HTTPClient.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
HTTPClient.prototype.getCache = function () {
	return this.cache;
};
HTTPClient.prototype.getConnected = function () {
	return this.connected;
};
HTTPClient.prototype.getConnectionType = function () {
	return this.connectionType;
};
HTTPClient.prototype.getDomain = function () {
	return this.domain;
};
HTTPClient.prototype.getEnableKeepAlive = function () {
	return this.enableKeepAlive;
};
HTTPClient.prototype.getFile = function () {
	return this.file;
};
HTTPClient.prototype.getLocation = function () {
	return this.location;
};
HTTPClient.prototype.getPassword = function () {
	return this.password;
};
HTTPClient.prototype.getReadyState = function () {
	return this.readyState;
};
HTTPClient.prototype.getResponseData = function () {
	return this.responseData;
};
HTTPClient.prototype.getResponseHeader = function () {
	return '';
};
HTTPClient.prototype.getResponseText = function () {
	return this.responseText;
};
HTTPClient.prototype.getResponseXML = function () {
	return this.responseXML;
};
HTTPClient.prototype.getStatus = function () {
	return this.status;
};
HTTPClient.prototype.getStatusText = function () {
	return this.statusText;
};
HTTPClient.prototype.getTimeout = function () {
	return this.timeout;
};
HTTPClient.prototype.getTlsVersion = function () {
	return this.tlsVersion;
};
HTTPClient.prototype.getUsername = function () {
	return this.username;
};
HTTPClient.prototype.getValidatesSecureCertificate = function () {
	return this.validatesSecureCertificate;
};
HTTPClient.prototype.getWithCredentials = function () {
	return this.withCredentials;
};
HTTPClient.prototype.open = function () {
};
HTTPClient.prototype.removeEventListener = function () {
};
HTTPClient.prototype.send = function () {
};
HTTPClient.prototype.setAutoEncodeUrl = function (property) {
	this.autoEncodeUrl = property;
};
HTTPClient.prototype.setAutoRedirect = function (property) {
	this.autoRedirect = property;
};
HTTPClient.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
HTTPClient.prototype.setCache = function (property) {
	this.cache = property;
};
HTTPClient.prototype.setDomain = function (property) {
	this.domain = property;
};
HTTPClient.prototype.setEnableKeepAlive = function (property) {
	this.enableKeepAlive = property;
};
HTTPClient.prototype.setFile = function (property) {
	this.file = property;
};
HTTPClient.prototype.setOndatastream = function (property) {
	this.ondatastream = property;
};
HTTPClient.prototype.setOnerror = function (property) {
	this.onerror = property;
};
HTTPClient.prototype.setOnload = function (property) {
	this.onload = property;
};
HTTPClient.prototype.setOnreadystatechange = function (property) {
	this.onreadystatechange = property;
};
HTTPClient.prototype.setOnsendstream = function (property) {
	this.onsendstream = property;
};
HTTPClient.prototype.setPassword = function (property) {
	this.password = property;
};
HTTPClient.prototype.setRequestHeader = function () {
};
HTTPClient.prototype.setTimeout = function (property) {
	this.timeout = property;
};
HTTPClient.prototype.setTlsVersion = function (property) {
	this.tlsVersion = property;
};
HTTPClient.prototype.setUsername = function (property) {
	this.username = property;
};
HTTPClient.prototype.setValidatesSecureCertificate = function (property) {
	this.validatesSecureCertificate = property;
};
HTTPClient.prototype.setWithCredentials = function (property) {
	this.withCredentials = property;
};
module.exports = function (properties) {
	return new HTTPClient(properties);
};