function HTTPClient(properties) {
	properties = properties || {};
	this.DONE = properties.DONE || 0;
	this.HEADERS_RECEIVED = properties.HEADERS_RECEIVED || 0;
	this.LOADING = properties.LOADING || 0;
	this.OPENED = properties.OPENED || 0;
	this.UNSENT = properties.UNSENT || 0;
	this.allResponseHeaders = properties.allResponseHeaders || '';
	this.apiName = 'Ti.Network.HTTPClient';
	this.autoEncodeUrl = properties.autoEncodeUrl || true;
	this.autoRedirect = properties.autoRedirect || true;
	this.bubbleParent = properties.bubbleParent || true;
	this.cache = properties.cache || true;
	this.connected = properties.connected || true;
	this.connectionType = properties.connectionType || '';
	this.domain = properties.domain || '';
	this.enableKeepAlive = properties.enableKeepAlive || true;
	this.file = properties.file || '';
	this.location = properties.location || '';
	this.ondatastream = properties.ondatastream || {};
	this.onerror = properties.onerror || {};
	this.onload = properties.onload || {};
	this.onreadystatechange = properties.onreadystatechange || {};
	this.onsendstream = properties.onsendstream || {};
	this.password = properties.password || '';
	this.readyState = properties.readyState || 0;
	this.responseData = properties.responseData || {};
	this.responseText = properties.responseText || '';
	this.responseXML = properties.responseXML || {};
	this.securityManager = properties.securityManager || {};
	this.status = properties.status || 0;
	this.statusText = properties.statusText || '';
	this.timeout = properties.timeout || 0;
	this.tlsVersion = properties.tlsVersion || 0;
	this.username = properties.username || '';
	this.validatesSecureCertificate = properties.validatesSecureCertificate || true;
	this.withCredentials = properties.withCredentials || true;
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
HTTPClient.prototype.getOndatastream = function () {
	return {};
};
HTTPClient.prototype.getOnerror = function () {
	return {};
};
HTTPClient.prototype.getOnload = function () {
	return {};
};
HTTPClient.prototype.getOnreadystatechange = function () {
	return {};
};
HTTPClient.prototype.getOnsendstream = function () {
	return {};
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
HTTPClient.prototype.getSecurityManager = function () {
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