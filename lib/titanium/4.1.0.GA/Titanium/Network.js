var crypto = require('crypto');
function Network(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'INADDR_ANY',
			'READ_MODE',
			'READ_WRITE_MODE',
			'SOCKET_CLOSED',
			'SOCKET_CONNECTED',
			'SOCKET_ERROR',
			'SOCKET_INITIALIZED',
			'SOCKET_LISTENING',
			'WRITE_MODE',
			'NETWORK_LAN',
			'NETWORK_MOBILE',
			'NETWORK_NONE',
			'NETWORK_UNKNOWN',
			'NETWORK_WIFI',
			'NOTIFICATION_TYPE_ALERT',
			'NOTIFICATION_TYPE_BADGE',
			'NOTIFICATION_TYPE_SOUND',
			'NOTIFICATION_TYPE_NEWSSTAND',
			'TLS_VERSION_1_0',
			'TLS_VERSION_1_1',
			'TLS_VERSION_1_2',
			'PROGRESS_UNKNOWN',
			'allHTTPCookies',
			'networkType',
			'networkTypeName',
			'online',
			'remoteDeviceUUID',
			'remoteNotificationTypes',
			'remoteNotificationsEnabled',
			'httpURLFormatter',
			'id'
		];
	if (__SLAG__names.length > 0 && process.env.SLAG_STRICT === 'true') {
		for (var __SLAG__name in __SLAG__properties) {
			if (__SLAG__names.indexOf(__SLAG__name) === -1) {
				throw new Error('Use user custom property ' + __SLAG__name);
			}
		}
	} else if (__SLAG__names.length === 0 && __SLAG__properties.length > 0 && process.env.SLAG_STRICT === 'true') {
		throw new Error('Use user custom properties. ' + __SLAG__properties.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.Network.apiName is read only property');
	}
	this.apiName = 'Ti.Network';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	if (__SLAG__properties.INADDR_ANY) {
		throw new Error('Ti.Network.INADDR_ANY was deprecated, since 1.7.0');
	}
	if (__SLAG__properties.READ_MODE) {
		throw new Error('Ti.Network.READ_MODE was deprecated, since 1.7.0');
	}
	if (__SLAG__properties.READ_WRITE_MODE) {
		throw new Error('Ti.Network.READ_WRITE_MODE was deprecated, since 1.7.0');
	}
	if (__SLAG__properties.SOCKET_CLOSED) {
		throw new Error('Ti.Network.SOCKET_CLOSED was deprecated, since 1.7.0');
	}
	if (__SLAG__properties.SOCKET_CONNECTED) {
		throw new Error('Ti.Network.SOCKET_CONNECTED was deprecated, since 1.7.0');
	}
	if (__SLAG__properties.SOCKET_ERROR) {
		throw new Error('Ti.Network.SOCKET_ERROR was deprecated, since 1.7.0');
	}
	if (__SLAG__properties.SOCKET_INITIALIZED) {
		throw new Error('Ti.Network.SOCKET_INITIALIZED was deprecated, since 1.7.0');
	}
	if (__SLAG__properties.SOCKET_LISTENING) {
		throw new Error('Ti.Network.SOCKET_LISTENING was deprecated, since 1.7.0');
	}
	if (__SLAG__properties.WRITE_MODE) {
		throw new Error('Ti.Network.WRITE_MODE was deprecated, since 1.7.0');
	}
	if (__SLAG__properties.NETWORK_LAN) {
		throw new Error('Ti.Network.NETWORK_LAN is read only property');
	}
	this.NETWORK_LAN = 0;
	if (__SLAG__properties.NETWORK_MOBILE) {
		throw new Error('Ti.Network.NETWORK_MOBILE is read only property');
	}
	this.NETWORK_MOBILE = 0;
	if (__SLAG__properties.NETWORK_NONE) {
		throw new Error('Ti.Network.NETWORK_NONE is read only property');
	}
	this.NETWORK_NONE = 0;
	if (__SLAG__properties.NETWORK_UNKNOWN) {
		throw new Error('Ti.Network.NETWORK_UNKNOWN is read only property');
	}
	this.NETWORK_UNKNOWN = 0;
	if (__SLAG__properties.NETWORK_WIFI) {
		throw new Error('Ti.Network.NETWORK_WIFI is read only property');
	}
	this.NETWORK_WIFI = 0;
	if (__SLAG__properties.NOTIFICATION_TYPE_ALERT) {
		throw new Error('Ti.Network.NOTIFICATION_TYPE_ALERT is read only property');
	}
	this.NOTIFICATION_TYPE_ALERT = 0;
	if (__SLAG__properties.NOTIFICATION_TYPE_BADGE) {
		throw new Error('Ti.Network.NOTIFICATION_TYPE_BADGE is read only property');
	}
	this.NOTIFICATION_TYPE_BADGE = 0;
	if (__SLAG__properties.NOTIFICATION_TYPE_SOUND) {
		throw new Error('Ti.Network.NOTIFICATION_TYPE_SOUND is read only property');
	}
	this.NOTIFICATION_TYPE_SOUND = 0;
	if (__SLAG__properties.NOTIFICATION_TYPE_NEWSSTAND) {
		throw new Error('Ti.Network.NOTIFICATION_TYPE_NEWSSTAND is read only property');
	}
	this.NOTIFICATION_TYPE_NEWSSTAND = 0;
	if (__SLAG__properties.TLS_VERSION_1_0) {
		throw new Error('Ti.Network.TLS_VERSION_1_0 is read only property');
	}
	this.TLS_VERSION_1_0 = 0;
	if (__SLAG__properties.TLS_VERSION_1_1) {
		throw new Error('Ti.Network.TLS_VERSION_1_1 is read only property');
	}
	this.TLS_VERSION_1_1 = 0;
	if (__SLAG__properties.TLS_VERSION_1_2) {
		throw new Error('Ti.Network.TLS_VERSION_1_2 is read only property');
	}
	this.TLS_VERSION_1_2 = 0;
	if (__SLAG__properties.PROGRESS_UNKNOWN) {
		throw new Error('Ti.Network.PROGRESS_UNKNOWN is read only property');
	}
	this.PROGRESS_UNKNOWN = 0;
	if (__SLAG__properties.allHTTPCookies) {
		throw new Error('Ti.Network.allHTTPCookies is read only property');
	}
	this.allHTTPCookies = [];
	if (__SLAG__properties.networkType) {
		throw new Error('Ti.Network.networkType is read only property');
	}
	this.networkType = 0;
	if (__SLAG__properties.networkTypeName) {
		throw new Error('Ti.Network.networkTypeName is read only property');
	}
	this.networkTypeName = '';
	if (__SLAG__properties.online) {
		throw new Error('Ti.Network.online is read only property');
	}
	this.online = true;
	if (__SLAG__properties.remoteDeviceUUID) {
		throw new Error('Ti.Network.remoteDeviceUUID is read only property');
	}
	this.remoteDeviceUUID = '';
	if (__SLAG__properties.remoteNotificationTypes) {
		throw new Error('Ti.Network.remoteNotificationTypes is read only property');
	}
	this.remoteNotificationTypes = 0;
	if (__SLAG__properties.remoteNotificationsEnabled) {
		throw new Error('Ti.Network.remoteNotificationsEnabled is read only property');
	}
	this.remoteNotificationsEnabled = true;
	this.httpURLFormatter = __SLAG__properties.httpURLFormatter || '';
	this.id = __SLAG__properties.id || '';
	return this;
}
Network.prototype.addEventListener = function () {
};
Network.prototype.removeEventListener = function () {
};
Network.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Network.prototype.fireEvent = function () {
};
Network.prototype.addConnectivityListener = function () {
	throw new Error('Ti.Network.addConnectivityListener was deprecated, since 1.7.0');
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
Network.prototype.removeConnectivityListener = function () {
	throw new Error('Ti.Network.removeConnectivityListener was deprecated, since 1.7.0');
};
Network.prototype.addHTTPCookie = function () {
};
Network.prototype.addSystemCookie = function () {
};
Network.prototype.createBonjourBrowser = function (params) {
	var BonjourBrowser = require('./Network/BonjourBrowser');
	return BonjourBrowser(params);
};
Network.prototype.createBonjourService = function (params) {
	var BonjourService = require('./Network/BonjourService');
	return BonjourService(params);
};
Network.prototype.getHTTPCookies = function () {
	return [];
};
Network.prototype.getHTTPCookiesForDomain = function () {
	return [];
};
Network.prototype.getSystemCookies = function () {
	return [];
};
Network.prototype.removeAllHTTPCookies = function () {
};
Network.prototype.removeAllSystemCookies = function () {
};
Network.prototype.removeHTTPCookie = function () {
};
Network.prototype.removeHTTPCookiesForDomain = function () {
};
Network.prototype.removeSystemCookie = function () {
};
Network.prototype.registerForPushNotifications = function () {
};
Network.prototype.unregisterForPushNotifications = function () {
};
Network.prototype.createCookie = function (params) {
	var Cookie = require('./Network/Cookie');
	return Cookie(params);
};
Network.prototype.createHTTPClient = function (params) {
	var HTTPClient = require('./Network/HTTPClient');
	return HTTPClient(params);
};
Network.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Network.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Network.prototype.getApiName = function () {
	return this.apiName;
};
Network.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Network.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
Network.prototype.getAllHTTPCookies = function () {
	return this.allHTTPCookies;
};
Network.prototype.getNetworkType = function () {
	return this.networkType;
};
Network.prototype.getNetworkTypeName = function () {
	return this.networkTypeName;
};
Network.prototype.getOnline = function () {
	return this.online;
};
Network.prototype.getRemoteDeviceUUID = function () {
	return this.remoteDeviceUUID;
};
Network.prototype.getRemoteNotificationTypes = function () {
	return this.remoteNotificationTypes;
};
Network.prototype.getRemoteNotificationsEnabled = function () {
	return this.remoteNotificationsEnabled;
};
Network.prototype.getHttpURLFormatter = function () {
	return this.httpURLFormatter;
};
Network.prototype.setHttpURLFormatter = function (property) {
	this.httpURLFormatter = property;
};
module.exports = function (properties) {
	return new Network(properties);
};