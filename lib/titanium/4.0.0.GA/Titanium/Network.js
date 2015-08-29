var crypto = require('crypto');
function Network(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'INADDR_ANY',
			'NETWORK_LAN',
			'NETWORK_MOBILE',
			'NETWORK_NONE',
			'NETWORK_UNKNOWN',
			'NETWORK_WIFI',
			'NOTIFICATION_TYPE_ALERT',
			'NOTIFICATION_TYPE_BADGE',
			'NOTIFICATION_TYPE_NEWSSTAND',
			'NOTIFICATION_TYPE_SOUND',
			'PROGRESS_UNKNOWN',
			'READ_MODE',
			'READ_WRITE_MODE',
			'SOCKET_CLOSED',
			'SOCKET_CONNECTED',
			'SOCKET_ERROR',
			'SOCKET_INITIALIZED',
			'SOCKET_LISTENING',
			'TLS_VERSION_1_0',
			'TLS_VERSION_1_1',
			'TLS_VERSION_1_2',
			'WRITE_MODE',
			'allHTTPCookies',
			'apiName',
			'bubbleParent',
			'httpURLFormatter',
			'lifecycleContainer',
			'networkType',
			'networkTypeName',
			'online',
			'remoteDeviceUUID',
			'remoteNotificationTypes',
			'remoteNotificationsEnabled',
			'id'
		];
	if (__SLAG_NAMES.length > 0 && process.env.SLAG_STRICT === 'true') {
		for (var __SLAG_NAME in __SLAG_PROPERTIES) {
			if (__SLAG_NAMES.indexOf(__SLAG_NAME) === -1) {
				throw new Error('Use user custom property ' + __SLAG_NAME);
			}
		}
	} else if (__SLAG_NAMES.length === 0 && __SLAG_PROPERTIES.length > 0 && process.env.SLAG_STRICT === 'true') {
		throw new Error('Use user custom properties. ' + __SLAG_PROPERTIES.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	if (__SLAG_PROPERTIES.INADDR_ANY) {
		throw new Error('Ti.Network.INADDR_ANY was deprecated, since 1.7.0');
	}
	if (__SLAG_PROPERTIES.NETWORK_LAN) {
		throw new Error('Ti.Network.NETWORK_LAN is read only property');
	}
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.NETWORK_LAN = undefined;
	} else {
		this.NETWORK_LAN = 0;
	}
	if (__SLAG_PROPERTIES.NETWORK_MOBILE) {
		throw new Error('Ti.Network.NETWORK_MOBILE is read only property');
	}
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.NETWORK_MOBILE = undefined;
	} else {
		this.NETWORK_MOBILE = 0;
	}
	if (__SLAG_PROPERTIES.NETWORK_NONE) {
		throw new Error('Ti.Network.NETWORK_NONE is read only property');
	}
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.NETWORK_NONE = undefined;
	} else {
		this.NETWORK_NONE = 0;
	}
	if (__SLAG_PROPERTIES.NETWORK_UNKNOWN) {
		throw new Error('Ti.Network.NETWORK_UNKNOWN is read only property');
	}
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.NETWORK_UNKNOWN = undefined;
	} else {
		this.NETWORK_UNKNOWN = 0;
	}
	if (__SLAG_PROPERTIES.NETWORK_WIFI) {
		throw new Error('Ti.Network.NETWORK_WIFI is read only property');
	}
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.NETWORK_WIFI = undefined;
	} else {
		this.NETWORK_WIFI = 0;
	}
	if (__SLAG_PROPERTIES.NOTIFICATION_TYPE_ALERT) {
		throw new Error('Ti.Network.NOTIFICATION_TYPE_ALERT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.NOTIFICATION_TYPE_ALERT = undefined;
	} else {
		this.NOTIFICATION_TYPE_ALERT = 0;
	}
	if (__SLAG_PROPERTIES.NOTIFICATION_TYPE_BADGE) {
		throw new Error('Ti.Network.NOTIFICATION_TYPE_BADGE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.NOTIFICATION_TYPE_BADGE = undefined;
	} else {
		this.NOTIFICATION_TYPE_BADGE = 0;
	}
	if (__SLAG_PROPERTIES.NOTIFICATION_TYPE_NEWSSTAND) {
		throw new Error('Ti.Network.NOTIFICATION_TYPE_NEWSSTAND is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.NOTIFICATION_TYPE_NEWSSTAND = undefined;
	} else {
		this.NOTIFICATION_TYPE_NEWSSTAND = 0;
	}
	if (__SLAG_PROPERTIES.NOTIFICATION_TYPE_SOUND) {
		throw new Error('Ti.Network.NOTIFICATION_TYPE_SOUND is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.NOTIFICATION_TYPE_SOUND = undefined;
	} else {
		this.NOTIFICATION_TYPE_SOUND = 0;
	}
	if (__SLAG_PROPERTIES.PROGRESS_UNKNOWN) {
		throw new Error('Ti.Network.PROGRESS_UNKNOWN is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.PROGRESS_UNKNOWN = undefined;
	} else {
		this.PROGRESS_UNKNOWN = 0;
	}
	if (__SLAG_PROPERTIES.READ_MODE) {
		throw new Error('Ti.Network.READ_MODE was deprecated, since 1.7.0');
	}
	if (__SLAG_PROPERTIES.READ_WRITE_MODE) {
		throw new Error('Ti.Network.READ_WRITE_MODE was deprecated, since 1.7.0');
	}
	if (__SLAG_PROPERTIES.SOCKET_CLOSED) {
		throw new Error('Ti.Network.SOCKET_CLOSED was deprecated, since 1.7.0');
	}
	if (__SLAG_PROPERTIES.SOCKET_CONNECTED) {
		throw new Error('Ti.Network.SOCKET_CONNECTED was deprecated, since 1.7.0');
	}
	if (__SLAG_PROPERTIES.SOCKET_ERROR) {
		throw new Error('Ti.Network.SOCKET_ERROR was deprecated, since 1.7.0');
	}
	if (__SLAG_PROPERTIES.SOCKET_INITIALIZED) {
		throw new Error('Ti.Network.SOCKET_INITIALIZED was deprecated, since 1.7.0');
	}
	if (__SLAG_PROPERTIES.SOCKET_LISTENING) {
		throw new Error('Ti.Network.SOCKET_LISTENING was deprecated, since 1.7.0');
	}
	if (__SLAG_PROPERTIES.TLS_VERSION_1_0) {
		throw new Error('Ti.Network.TLS_VERSION_1_0 is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.TLS_VERSION_1_0 = undefined;
	} else {
		this.TLS_VERSION_1_0 = 0;
	}
	if (__SLAG_PROPERTIES.TLS_VERSION_1_1) {
		throw new Error('Ti.Network.TLS_VERSION_1_1 is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.TLS_VERSION_1_1 = undefined;
	} else {
		this.TLS_VERSION_1_1 = 0;
	}
	if (__SLAG_PROPERTIES.TLS_VERSION_1_2) {
		throw new Error('Ti.Network.TLS_VERSION_1_2 is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.TLS_VERSION_1_2 = undefined;
	} else {
		this.TLS_VERSION_1_2 = 0;
	}
	if (__SLAG_PROPERTIES.WRITE_MODE) {
		throw new Error('Ti.Network.WRITE_MODE was deprecated, since 1.7.0');
	}
	if (__SLAG_PROPERTIES.allHTTPCookies) {
		throw new Error('Ti.Network.allHTTPCookies is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.allHTTPCookies = undefined;
	} else {
		this.allHTTPCookies = [];
	}
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.Network.apiName is read only property');
	}
	this.apiName = 'Ti.Network';
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.bubbleParent = undefined;
	} else {
		this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	}
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.httpURLFormatter = undefined;
	} else {
		this.httpURLFormatter = __SLAG_PROPERTIES.httpURLFormatter || '';
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.lifecycleContainer = undefined;
	} else {
		this.lifecycleContainer = __SLAG_PROPERTIES.lifecycleContainer || {};
	}
	if (__SLAG_PROPERTIES.networkType) {
		throw new Error('Ti.Network.networkType is read only property');
	}
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.networkType = undefined;
	} else {
		this.networkType = 0;
	}
	if (__SLAG_PROPERTIES.networkTypeName) {
		throw new Error('Ti.Network.networkTypeName is read only property');
	}
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.networkTypeName = undefined;
	} else {
		this.networkTypeName = '';
	}
	if (__SLAG_PROPERTIES.online) {
		throw new Error('Ti.Network.online is read only property');
	}
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.online = undefined;
	} else {
		this.online = true;
	}
	if (__SLAG_PROPERTIES.remoteDeviceUUID) {
		throw new Error('Ti.Network.remoteDeviceUUID is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.remoteDeviceUUID = undefined;
	} else {
		this.remoteDeviceUUID = '';
	}
	if (__SLAG_PROPERTIES.remoteNotificationTypes) {
		throw new Error('Ti.Network.remoteNotificationTypes is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.remoteNotificationTypes = undefined;
	} else {
		this.remoteNotificationTypes = 0;
	}
	if (__SLAG_PROPERTIES.remoteNotificationsEnabled) {
		throw new Error('Ti.Network.remoteNotificationsEnabled is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.remoteNotificationsEnabled = undefined;
	} else {
		this.remoteNotificationsEnabled = true;
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
Network.prototype.addConnectivityListener = function () {
	throw new Error('Ti.Network.addConnectivityListener was deprecated, since 1.7.0');
};
Network.prototype.addEventListener = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Network.prototype.addHTTPCookie = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Network.prototype.addSystemCookie = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Network.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
Network.prototype.createBonjourBrowser = function (__SLAG_PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var BonjourBrowser = require('./Network/BonjourBrowser');
	return BonjourBrowser(__SLAG_PROPERTY);
};
Network.prototype.createBonjourService = function (__SLAG_PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var BonjourService = require('./Network/BonjourService');
	return BonjourService(__SLAG_PROPERTY);
};
Network.prototype.createCookie = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var Cookie = require('./Network/Cookie');
	return Cookie(__SLAG_PROPERTY);
};
Network.prototype.createHTTPClient = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var HTTPClient = require('./Network/HTTPClient');
	return HTTPClient(__SLAG_PROPERTY);
};
Network.prototype.createTCPSocket = function () {
	throw new Error('Ti.Network.createTCPSocket was deprecated, since 1.7.0');
};
Network.prototype.decodeURIComponent = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return '';
};
Network.prototype.encodeURIComponent = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return '';
};
Network.prototype.fireEvent = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Network.prototype.getAllHTTPCookies = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.allHTTPCookies;
};
Network.prototype.getApiName = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
Network.prototype.getBubbleParent = function () {
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
Network.prototype.getHTTPCookies = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return [];
};
Network.prototype.getHTTPCookiesForDomain = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return [];
};
Network.prototype.getHttpURLFormatter = function () {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.httpURLFormatter;
};
Network.prototype.getLifecycleContainer = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lifecycleContainer;
};
Network.prototype.getNetworkType = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.networkType;
};
Network.prototype.getNetworkTypeName = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.networkTypeName;
};
Network.prototype.getOnline = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.online;
};
Network.prototype.getRemoteDeviceUUID = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.remoteDeviceUUID;
};
Network.prototype.getRemoteNotificationTypes = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.remoteNotificationTypes;
};
Network.prototype.getRemoteNotificationsEnabled = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.remoteNotificationsEnabled;
};
Network.prototype.getSystemCookies = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return [];
};
Network.prototype.registerForPushNotifications = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Network.prototype.removeAllHTTPCookies = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Network.prototype.removeAllSystemCookies = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Network.prototype.removeConnectivityListener = function () {
	throw new Error('Ti.Network.removeConnectivityListener was deprecated, since 1.7.0');
};
Network.prototype.removeEventListener = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Network.prototype.removeHTTPCookie = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Network.prototype.removeHTTPCookiesForDomain = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Network.prototype.removeSystemCookie = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Network.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
Network.prototype.setHttpURLFormatter = function (__SLAG__PROPERTY) {
	if (['mobileweb'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.httpURLFormatter = __SLAG__PROPERTY;
};
Network.prototype.setLifecycleContainer = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.lifecycleContainer = __SLAG__PROPERTY;
};
Network.prototype.unregisterForPushNotifications = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
module.exports = function (properties) {
	return new Network(properties);
};