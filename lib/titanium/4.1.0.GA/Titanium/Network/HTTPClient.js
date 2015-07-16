function HTTPClient(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.Network.HTTPClient';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.autoEncodeUrl = properties.autoEncodeUrl || true;
	this.autoRedirect = properties.autoRedirect || true;
	this.cache = properties.cache || true;
	this.domain = properties.domain || '';
	this.enableKeepAlive = properties.enableKeepAlive || true;
	this.file = properties.file || '';
	this.ondatastream = properties.ondatastream || {};
	this.onerror = properties.onerror || {};
	this.onload = properties.onload || {};
	this.onreadystatechange = properties.onreadystatechange || {};
	this.onsendstream = properties.onsendstream || {};
	this.password = properties.password || '';
	this.securityManager = properties.securityManager || {};
	this.timeout = properties.timeout || 0;
	this.tlsVersion = properties.tlsVersion || 0;
	this.username = properties.username || '';
	this.validatesSecureCertificate = properties.validatesSecureCertificate || true;
	this.withCredentials = properties.withCredentials || true;
	this.DONE = properties.DONE || 0;
	this.HEADERS_RECEIVED = properties.HEADERS_RECEIVED || 0;
	this.LOADING = properties.LOADING || 0;
	this.OPENED = properties.OPENED || 0;
	this.UNSENT = properties.UNSENT || 0;
	this.allResponseHeaders = properties.allResponseHeaders || '';
	this.connected = properties.connected || true;
	this.connectionType = properties.connectionType || '';
	this.location = properties.location || '';
	this.readyState = properties.readyState || 0;
	this.responseData = properties.responseData || {};
	this.responseText = properties.responseText || '';
	this.responseXML = properties.responseXML || {};
	this.status = properties.status || 0;
	this.statusText = properties.statusText || '';
	return this;
}
HTTPClient.prototype.addEventListener = function () {
};
HTTPClient.prototype.removeEventListener = function () {
};
HTTPClient.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
HTTPClient.prototype.fireEvent = function () {
};
HTTPClient.prototype.abort = function () {
};
HTTPClient.prototype.addAuthFactory = function () {
};
HTTPClient.prototype.addKeyManager = function () {
	throw new Error('Ti.Network.HTTPClient.addKeyManager was deprecated, since 3.3.0');
};
HTTPClient.prototype.addTrustManager = function () {
	throw new Error('Ti.Network.HTTPClient.addTrustManager was deprecated, since 3.3.0');
};
HTTPClient.prototype.clearCookies = function () {
};
HTTPClient.prototype.getResponseHeader = function () {
	return '';
};
HTTPClient.prototype.open = function () {
};
HTTPClient.prototype.send = function () {
};
HTTPClient.prototype.setRequestHeader = function () {
};
HTTPClient.prototype.setTimeout = function () {
};
HTTPClient.prototype.getBubbleParent = function () {
	return true;
};
HTTPClient.prototype.setBubbleParent = function () {
};
HTTPClient.prototype.getApiName = function () {
	return '';
};
HTTPClient.prototype.getLifecycleContainer = function () {
	return {};
};
HTTPClient.prototype.setLifecycleContainer = function () {
};
HTTPClient.prototype.getAutoEncodeUrl = function () {
	return true;
};
HTTPClient.prototype.setAutoEncodeUrl = function () {
};
HTTPClient.prototype.getAutoRedirect = function () {
	return true;
};
HTTPClient.prototype.setAutoRedirect = function () {
};
HTTPClient.prototype.getCache = function () {
	return true;
};
HTTPClient.prototype.setCache = function () {
};
HTTPClient.prototype.getDomain = function () {
	return '';
};
HTTPClient.prototype.setDomain = function () {
};
HTTPClient.prototype.getEnableKeepAlive = function () {
	return true;
};
HTTPClient.prototype.setEnableKeepAlive = function () {
};
HTTPClient.prototype.getFile = function () {
	return '';
};
HTTPClient.prototype.setFile = function () {
};
HTTPClient.prototype.getOndatastream = function () {
	return {};
};
HTTPClient.prototype.setOndatastream = function () {
};
HTTPClient.prototype.getOnerror = function () {
	return {};
};
HTTPClient.prototype.setOnerror = function () {
};
HTTPClient.prototype.getOnload = function () {
	return {};
};
HTTPClient.prototype.setOnload = function () {
};
HTTPClient.prototype.getOnreadystatechange = function () {
	return {};
};
HTTPClient.prototype.setOnreadystatechange = function () {
};
HTTPClient.prototype.getOnsendstream = function () {
	return {};
};
HTTPClient.prototype.setOnsendstream = function () {
};
HTTPClient.prototype.getPassword = function () {
	return '';
};
HTTPClient.prototype.setPassword = function () {
};
HTTPClient.prototype.getSecurityManager = function () {
	return {};
};
HTTPClient.prototype.setSecurityManager = function () {
};
HTTPClient.prototype.getTimeout = function () {
	return 0;
};
HTTPClient.prototype.setTimeout = function () {
};
HTTPClient.prototype.getTlsVersion = function () {
	return 0;
};
HTTPClient.prototype.setTlsVersion = function () {
};
HTTPClient.prototype.getUsername = function () {
	return '';
};
HTTPClient.prototype.setUsername = function () {
};
HTTPClient.prototype.getValidatesSecureCertificate = function () {
	return true;
};
HTTPClient.prototype.setValidatesSecureCertificate = function () {
};
HTTPClient.prototype.getWithCredentials = function () {
	return true;
};
HTTPClient.prototype.setWithCredentials = function () {
};
HTTPClient.prototype.getAllResponseHeaders = function () {
	return '';
};
HTTPClient.prototype.getConnected = function () {
	return true;
};
HTTPClient.prototype.getConnectionType = function () {
	return '';
};
HTTPClient.prototype.getLocation = function () {
	return '';
};
HTTPClient.prototype.getReadyState = function () {
	return 0;
};
HTTPClient.prototype.getResponseData = function () {
	return {};
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
module.exports = function (properties) {
	return new HTTPClient(properties);
};