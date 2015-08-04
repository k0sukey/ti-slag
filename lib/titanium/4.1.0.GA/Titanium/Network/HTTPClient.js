var crypto = require('crypto');
function HTTPClient(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'autoEncodeUrl',
			'autoRedirect',
			'cache',
			'domain',
			'enableKeepAlive',
			'file',
			'ondatastream',
			'onerror',
			'onload',
			'onreadystatechange',
			'onsendstream',
			'password',
			'securityManager',
			'timeout',
			'tlsVersion',
			'username',
			'validatesSecureCertificate',
			'withCredentials',
			'DONE',
			'HEADERS_RECEIVED',
			'LOADING',
			'OPENED',
			'UNSENT',
			'allResponseHeaders',
			'connected',
			'connectionType',
			'location',
			'readyState',
			'responseData',
			'responseText',
			'responseXML',
			'status',
			'statusText',
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
		throw new Error('Ti.Network.HTTPClient.apiName is read only property');
	}
	this.apiName = 'Ti.Network.HTTPClient';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.autoEncodeUrl = __SLAG__properties.autoEncodeUrl || true;
	this.autoRedirect = __SLAG__properties.autoRedirect || true;
	this.cache = __SLAG__properties.cache || true;
	this.domain = __SLAG__properties.domain || '';
	this.enableKeepAlive = __SLAG__properties.enableKeepAlive || true;
	this.file = __SLAG__properties.file || '';
	this.ondatastream = __SLAG__properties.ondatastream || {};
	this.onerror = __SLAG__properties.onerror || {};
	this.onload = __SLAG__properties.onload || {};
	this.onreadystatechange = __SLAG__properties.onreadystatechange || {};
	this.onsendstream = __SLAG__properties.onsendstream || {};
	this.password = __SLAG__properties.password || '';
	this.securityManager = __SLAG__properties.securityManager || {};
	this.timeout = __SLAG__properties.timeout || 0;
	this.tlsVersion = __SLAG__properties.tlsVersion || 0;
	this.username = __SLAG__properties.username || '';
	this.validatesSecureCertificate = __SLAG__properties.validatesSecureCertificate || true;
	this.withCredentials = __SLAG__properties.withCredentials || true;
	if (__SLAG__properties.DONE) {
		throw new Error('Ti.Network.HTTPClient.DONE is read only property');
	}
	this.DONE = 0;
	if (__SLAG__properties.HEADERS_RECEIVED) {
		throw new Error('Ti.Network.HTTPClient.HEADERS_RECEIVED is read only property');
	}
	this.HEADERS_RECEIVED = 0;
	if (__SLAG__properties.LOADING) {
		throw new Error('Ti.Network.HTTPClient.LOADING is read only property');
	}
	this.LOADING = 0;
	if (__SLAG__properties.OPENED) {
		throw new Error('Ti.Network.HTTPClient.OPENED is read only property');
	}
	this.OPENED = 0;
	if (__SLAG__properties.UNSENT) {
		throw new Error('Ti.Network.HTTPClient.UNSENT is read only property');
	}
	this.UNSENT = 0;
	if (__SLAG__properties.allResponseHeaders) {
		throw new Error('Ti.Network.HTTPClient.allResponseHeaders is read only property');
	}
	this.allResponseHeaders = '';
	if (__SLAG__properties.connected) {
		throw new Error('Ti.Network.HTTPClient.connected is read only property');
	}
	this.connected = true;
	if (__SLAG__properties.connectionType) {
		throw new Error('Ti.Network.HTTPClient.connectionType is read only property');
	}
	this.connectionType = '';
	if (__SLAG__properties.location) {
		throw new Error('Ti.Network.HTTPClient.location is read only property');
	}
	this.location = '';
	if (__SLAG__properties.readyState) {
		throw new Error('Ti.Network.HTTPClient.readyState is read only property');
	}
	this.readyState = 0;
	if (__SLAG__properties.responseData) {
		throw new Error('Ti.Network.HTTPClient.responseData is read only property');
	}
	this.responseData = {};
	if (__SLAG__properties.responseText) {
		throw new Error('Ti.Network.HTTPClient.responseText is read only property');
	}
	this.responseText = '';
	if (__SLAG__properties.responseXML) {
		throw new Error('Ti.Network.HTTPClient.responseXML is read only property');
	}
	this.responseXML = {};
	if (__SLAG__properties.status) {
		throw new Error('Ti.Network.HTTPClient.status is read only property');
	}
	this.status = 0;
	if (__SLAG__properties.statusText) {
		throw new Error('Ti.Network.HTTPClient.statusText is read only property');
	}
	this.statusText = '';
	this.id = __SLAG__properties.id || '';
	return this;
}
HTTPClient.prototype.addEventListener = function () {
};
HTTPClient.prototype.removeEventListener = function () {
};
HTTPClient.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
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
HTTPClient.prototype.setTimeout = function (property) {
	this.timeout = property;
};
HTTPClient.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
HTTPClient.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
HTTPClient.prototype.getApiName = function () {
	return this.apiName;
};
HTTPClient.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
HTTPClient.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
HTTPClient.prototype.getAutoEncodeUrl = function () {
	return this.autoEncodeUrl;
};
HTTPClient.prototype.setAutoEncodeUrl = function (property) {
	this.autoEncodeUrl = property;
};
HTTPClient.prototype.getAutoRedirect = function () {
	return this.autoRedirect;
};
HTTPClient.prototype.setAutoRedirect = function (property) {
	this.autoRedirect = property;
};
HTTPClient.prototype.getCache = function () {
	return this.cache;
};
HTTPClient.prototype.setCache = function (property) {
	this.cache = property;
};
HTTPClient.prototype.getDomain = function () {
	return this.domain;
};
HTTPClient.prototype.setDomain = function (property) {
	this.domain = property;
};
HTTPClient.prototype.getEnableKeepAlive = function () {
	return this.enableKeepAlive;
};
HTTPClient.prototype.setEnableKeepAlive = function (property) {
	this.enableKeepAlive = property;
};
HTTPClient.prototype.getFile = function () {
	return this.file;
};
HTTPClient.prototype.setFile = function (property) {
	this.file = property;
};
HTTPClient.prototype.getOndatastream = function () {
	return this.ondatastream;
};
HTTPClient.prototype.setOndatastream = function (property) {
	this.ondatastream = property;
};
HTTPClient.prototype.getOnerror = function () {
	return this.onerror;
};
HTTPClient.prototype.setOnerror = function (property) {
	this.onerror = property;
};
HTTPClient.prototype.getOnload = function () {
	return this.onload;
};
HTTPClient.prototype.setOnload = function (property) {
	this.onload = property;
};
HTTPClient.prototype.getOnreadystatechange = function () {
	return this.onreadystatechange;
};
HTTPClient.prototype.setOnreadystatechange = function (property) {
	this.onreadystatechange = property;
};
HTTPClient.prototype.getOnsendstream = function () {
	return this.onsendstream;
};
HTTPClient.prototype.setOnsendstream = function (property) {
	this.onsendstream = property;
};
HTTPClient.prototype.getPassword = function () {
	return this.password;
};
HTTPClient.prototype.setPassword = function (property) {
	this.password = property;
};
HTTPClient.prototype.getSecurityManager = function () {
	return this.securityManager;
};
HTTPClient.prototype.setSecurityManager = function (property) {
	this.securityManager = property;
};
HTTPClient.prototype.getTimeout = function () {
	return this.timeout;
};
HTTPClient.prototype.setTimeout = function (property) {
	this.timeout = property;
};
HTTPClient.prototype.getTlsVersion = function () {
	return this.tlsVersion;
};
HTTPClient.prototype.setTlsVersion = function (property) {
	this.tlsVersion = property;
};
HTTPClient.prototype.getUsername = function () {
	return this.username;
};
HTTPClient.prototype.setUsername = function (property) {
	this.username = property;
};
HTTPClient.prototype.getValidatesSecureCertificate = function () {
	return this.validatesSecureCertificate;
};
HTTPClient.prototype.setValidatesSecureCertificate = function (property) {
	this.validatesSecureCertificate = property;
};
HTTPClient.prototype.getWithCredentials = function () {
	return this.withCredentials;
};
HTTPClient.prototype.setWithCredentials = function (property) {
	this.withCredentials = property;
};
HTTPClient.prototype.getAllResponseHeaders = function () {
	return this.allResponseHeaders;
};
HTTPClient.prototype.getConnected = function () {
	return this.connected;
};
HTTPClient.prototype.getConnectionType = function () {
	return this.connectionType;
};
HTTPClient.prototype.getLocation = function () {
	return this.location;
};
HTTPClient.prototype.getReadyState = function () {
	return this.readyState;
};
HTTPClient.prototype.getResponseData = function () {
	return this.responseData;
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
module.exports = function (properties) {
	return new HTTPClient(properties);
};