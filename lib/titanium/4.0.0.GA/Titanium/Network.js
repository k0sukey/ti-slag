function Network(properties) {
	properties = properties || {};
	if (properties.INADDR_ANY) {
		throw new Error('Ti.Network.INADDR_ANY was deprecated, since 1.7.0');
	}
	this.NETWORK_LAN = properties.NETWORK_LAN || 0;
	this.NETWORK_MOBILE = properties.NETWORK_MOBILE || 0;
	this.NETWORK_NONE = properties.NETWORK_NONE || 0;
	this.NETWORK_UNKNOWN = properties.NETWORK_UNKNOWN || 0;
	this.NETWORK_WIFI = properties.NETWORK_WIFI || 0;
	this.NOTIFICATION_TYPE_ALERT = properties.NOTIFICATION_TYPE_ALERT || 0;
	this.NOTIFICATION_TYPE_BADGE = properties.NOTIFICATION_TYPE_BADGE || 0;
	this.NOTIFICATION_TYPE_NEWSSTAND = properties.NOTIFICATION_TYPE_NEWSSTAND || 0;
	this.NOTIFICATION_TYPE_SOUND = properties.NOTIFICATION_TYPE_SOUND || 0;
	this.PROGRESS_UNKNOWN = properties.PROGRESS_UNKNOWN || 0;
	if (properties.READ_MODE) {
		throw new Error('Ti.Network.READ_MODE was deprecated, since 1.7.0');
	}
	if (properties.READ_WRITE_MODE) {
		throw new Error('Ti.Network.READ_WRITE_MODE was deprecated, since 1.7.0');
	}
	if (properties.SOCKET_CLOSED) {
		throw new Error('Ti.Network.SOCKET_CLOSED was deprecated, since 1.7.0');
	}
	if (properties.SOCKET_CONNECTED) {
		throw new Error('Ti.Network.SOCKET_CONNECTED was deprecated, since 1.7.0');
	}
	if (properties.SOCKET_ERROR) {
		throw new Error('Ti.Network.SOCKET_ERROR was deprecated, since 1.7.0');
	}
	if (properties.SOCKET_INITIALIZED) {
		throw new Error('Ti.Network.SOCKET_INITIALIZED was deprecated, since 1.7.0');
	}
	if (properties.SOCKET_LISTENING) {
		throw new Error('Ti.Network.SOCKET_LISTENING was deprecated, since 1.7.0');
	}
	this.TLS_VERSION_1_0 = properties.TLS_VERSION_1_0 || 0;
	this.TLS_VERSION_1_1 = properties.TLS_VERSION_1_1 || 0;
	this.TLS_VERSION_1_2 = properties.TLS_VERSION_1_2 || 0;
	if (properties.WRITE_MODE) {
		throw new Error('Ti.Network.WRITE_MODE was deprecated, since 1.7.0');
	}
	this.allHTTPCookies = properties.allHTTPCookies || [];
	this.apiName = 'Ti.Network';
	this.bubbleParent = properties.bubbleParent || true;
	this.httpURLFormatter = properties.httpURLFormatter || '';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.networkType = properties.networkType || 0;
	this.networkTypeName = properties.networkTypeName || '';
	this.online = properties.online || true;
	this.remoteDeviceUUID = properties.remoteDeviceUUID || '';
	this.remoteNotificationTypes = properties.remoteNotificationTypes || 0;
	this.remoteNotificationsEnabled = properties.remoteNotificationsEnabled || true;
	return this;
}
Network.prototype.addConnectivityListener = function () {
	throw new Error('Ti.Network.addConnectivityListener was deprecated, since 1.7.0');
};
Network.prototype.addEventListener = function () {
};
Network.prototype.addHTTPCookie = function () {
};
Network.prototype.addSystemCookie = function () {
};
Network.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Network.prototype.createBonjourBrowser = function (params) {
	var BonjourBrowser = require('./Network/BonjourBrowser');
	return BonjourBrowser(params);
};
Network.prototype.createBonjourService = function (params) {
	var BonjourService = require('./Network/BonjourService');
	return BonjourService(params);
};
Network.prototype.createCookie = function (params) {
	var Cookie = require('./Network/Cookie');
	return Cookie(params);
};
Network.prototype.createHTTPClient = function (params) {
	var HTTPClient = require('./Network/HTTPClient');
	return HTTPClient(params);
};
Network.prototype.createTCPSocket = function () {
	throw new Error('Ti.Network.createTCPSocket was deprecated, since 1.7.0');
};
Network.prototype.decodeURIComponent = function () {
	return '';
};
Network.prototype.encodeURIComponent = function () {
	return '';
};
Network.prototype.fireEvent = function () {
};
Network.prototype.getAllHTTPCookies = function () {
	return [];
};
Network.prototype.getApiName = function () {
	return '';
};
Network.prototype.getBubbleParent = function () {
	return true;
};
Network.prototype.getHTTPCookies = function () {
	return [];
};
Network.prototype.getHTTPCookiesForDomain = function () {
	return [];
};
Network.prototype.getHttpURLFormatter = function () {
	return '';
};
Network.prototype.getLifecycleContainer = function () {
	return {};
};
Network.prototype.getNetworkType = function () {
	return 0;
};
Network.prototype.getNetworkTypeName = function () {
	return '';
};
Network.prototype.getOnline = function () {
	return true;
};
Network.prototype.getRemoteDeviceUUID = function () {
	return '';
};
Network.prototype.getRemoteNotificationTypes = function () {
	return 0;
};
Network.prototype.getRemoteNotificationsEnabled = function () {
	return true;
};
Network.prototype.getSystemCookies = function () {
	return [];
};
Network.prototype.registerForPushNotifications = function () {
};
Network.prototype.removeAllHTTPCookies = function () {
};
Network.prototype.removeAllSystemCookies = function () {
};
Network.prototype.removeConnectivityListener = function () {
	throw new Error('Ti.Network.removeConnectivityListener was deprecated, since 1.7.0');
};
Network.prototype.removeEventListener = function () {
};
Network.prototype.removeHTTPCookie = function () {
};
Network.prototype.removeHTTPCookiesForDomain = function () {
};
Network.prototype.removeSystemCookie = function () {
};
Network.prototype.setBubbleParent = function () {
};
Network.prototype.setHttpURLFormatter = function () {
};
Network.prototype.setLifecycleContainer = function () {
};
Network.prototype.unregisterForPushNotifications = function () {
};
module.exports = function (properties) {
	return new Network(properties);
};