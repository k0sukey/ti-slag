function Network(properties) {
	properties = properties || {};
	if (properties.INADDR_ANY) {
		throw new Error('Ti.Network.INADDR_ANY was deprecated, since 1.7.0');
	}
	this.NETWORK_LAN = properties.NETWORK_LAN || undefined;
	this.NETWORK_MOBILE = properties.NETWORK_MOBILE || undefined;
	this.NETWORK_NONE = properties.NETWORK_NONE || undefined;
	this.NETWORK_UNKNOWN = properties.NETWORK_UNKNOWN || undefined;
	this.NETWORK_WIFI = properties.NETWORK_WIFI || undefined;
	this.NOTIFICATION_TYPE_ALERT = properties.NOTIFICATION_TYPE_ALERT || undefined;
	this.NOTIFICATION_TYPE_BADGE = properties.NOTIFICATION_TYPE_BADGE || undefined;
	this.NOTIFICATION_TYPE_NEWSSTAND = properties.NOTIFICATION_TYPE_NEWSSTAND || undefined;
	this.NOTIFICATION_TYPE_SOUND = properties.NOTIFICATION_TYPE_SOUND || undefined;
	this.PROGRESS_UNKNOWN = properties.PROGRESS_UNKNOWN || undefined;
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
	this.TLS_VERSION_1_0 = properties.TLS_VERSION_1_0 || undefined;
	this.TLS_VERSION_1_1 = properties.TLS_VERSION_1_1 || undefined;
	this.TLS_VERSION_1_2 = properties.TLS_VERSION_1_2 || undefined;
	if (properties.WRITE_MODE) {
		throw new Error('Ti.Network.WRITE_MODE was deprecated, since 1.7.0');
	}
	this.allHTTPCookies = properties.allHTTPCookies || undefined;
	this.apiName = 'Ti.Network';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.httpURLFormatter = properties.httpURLFormatter || undefined;
	this.networkType = properties.networkType || undefined;
	this.networkTypeName = properties.networkTypeName || undefined;
	this.online = properties.online || undefined;
	this.remoteDeviceUUID = properties.remoteDeviceUUID || undefined;
	this.remoteNotificationTypes = properties.remoteNotificationTypes || undefined;
	this.remoteNotificationsEnabled = properties.remoteNotificationsEnabled || undefined;
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
Network.prototype.unregisterForPushNotifications = function () {
};
module.exports = function (properties) {
	return new Network(properties);
};