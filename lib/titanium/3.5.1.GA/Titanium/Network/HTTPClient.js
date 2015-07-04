function HTTPClient(properties) {
	properties = properties || {};
	this.DONE = properties.DONE || undefined;
	this.HEADERS_RECEIVED = properties.HEADERS_RECEIVED || undefined;
	this.LOADING = properties.LOADING || undefined;
	this.OPENED = properties.OPENED || undefined;
	this.UNSENT = properties.UNSENT || undefined;
	this.allResponseHeaders = properties.allResponseHeaders || undefined;
	this.apiName = 'Ti.Network.HTTPClient';
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
	throw new Error('Ti.Network.HTTPClient.addKeyManager was deprecated, since 3.3.0');
};
HTTPClient.prototype.addTrustManager = function () {
	throw new Error('Ti.Network.HTTPClient.addTrustManager was deprecated, since 3.3.0');
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
	return '';
};
HTTPClient.prototype.getApiName = function () {
	return '';
};
HTTPClient.prototype.getAutoEncodeUrl = function () {
	return true;
};
HTTPClient.prototype.getAutoRedirect = function () {
	return true;
};
HTTPClient.prototype.getBubbleParent = function () {
	return true;
};
HTTPClient.prototype.getCache = function () {
	return true;
};
HTTPClient.prototype.getConnected = function () {
	return true;
};
HTTPClient.prototype.getConnectionType = function () {
	return '';
};
HTTPClient.prototype.getDomain = function () {
	return '';
};
HTTPClient.prototype.getEnableKeepAlive = function () {
	return true;
};
HTTPClient.prototype.getFile = function () {
	return '';
};
HTTPClient.prototype.getLocation = function () {
	return '';
};
HTTPClient.prototype.getPassword = function () {
	return '';
};
HTTPClient.prototype.getReadyState = function () {
	return 0;
};
HTTPClient.prototype.getResponseData = function () {
	return {};
};
HTTPClient.prototype.getResponseHeader = function () {
	return '';
};
HTTPClient.prototype.getResponseText = function () {
	return '';
};
HTTPClient.prototype.getResponseXML = function () {
	return {};
};
HTTPClient.prototype.getStatus = function () {
	return 0;
};
HTTPClient.prototype.getStatusText = function () {
	return '';
};
HTTPClient.prototype.getTimeout = function () {
	return 0;
};
HTTPClient.prototype.getTlsVersion = function () {
	return 0;
};
HTTPClient.prototype.getUsername = function () {
	return '';
};
HTTPClient.prototype.getValidatesSecureCertificate = function () {
	return true;
};
HTTPClient.prototype.getWithCredentials = function () {
	return true;
};
HTTPClient.prototype.open = function () {
};
HTTPClient.prototype.removeEventListener = function () {
};
HTTPClient.prototype.send = function () {
};
HTTPClient.prototype.setAutoEncodeUrl = function () {
};
HTTPClient.prototype.setAutoRedirect = function () {
};
HTTPClient.prototype.setBubbleParent = function () {
};
HTTPClient.prototype.setCache = function () {
};
HTTPClient.prototype.setDomain = function () {
};
HTTPClient.prototype.setEnableKeepAlive = function () {
};
HTTPClient.prototype.setFile = function () {
};
HTTPClient.prototype.setOndatastream = function () {
};
HTTPClient.prototype.setOnerror = function () {
};
HTTPClient.prototype.setOnload = function () {
};
HTTPClient.prototype.setOnreadystatechange = function () {
};
HTTPClient.prototype.setOnsendstream = function () {
};
HTTPClient.prototype.setPassword = function () {
};
HTTPClient.prototype.setRequestHeader = function () {
};
HTTPClient.prototype.setTimeout = function () {
};
HTTPClient.prototype.setTlsVersion = function () {
};
HTTPClient.prototype.setUsername = function () {
};
HTTPClient.prototype.setValidatesSecureCertificate = function () {
};
HTTPClient.prototype.setWithCredentials = function () {
};
module.exports = function (properties) {
	return new HTTPClient(properties);
};