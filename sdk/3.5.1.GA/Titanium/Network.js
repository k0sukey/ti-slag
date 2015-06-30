function Network(properties) {
	properties = properties || {};

	this.INADDR_ANY = properties.INADDR_ANY || undefined;
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
	this.READ_MODE = properties.READ_MODE || undefined;
	this.READ_WRITE_MODE = properties.READ_WRITE_MODE || undefined;
	this.SOCKET_CLOSED = properties.SOCKET_CLOSED || undefined;
	this.SOCKET_CONNECTED = properties.SOCKET_CONNECTED || undefined;
	this.SOCKET_ERROR = properties.SOCKET_ERROR || undefined;
	this.SOCKET_INITIALIZED = properties.SOCKET_INITIALIZED || undefined;
	this.SOCKET_LISTENING = properties.SOCKET_LISTENING || undefined;
	this.TLS_VERSION_1_0 = properties.TLS_VERSION_1_0 || undefined;
	this.TLS_VERSION_1_1 = properties.TLS_VERSION_1_1 || undefined;
	this.TLS_VERSION_1_2 = properties.TLS_VERSION_1_2 || undefined;
	this.WRITE_MODE = properties.WRITE_MODE || undefined;
	this.allHTTPCookies = properties.allHTTPCookies || undefined;
	this.apiName = 'Titanium.Network';
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

Network.prototype.addConnectivityListener = function(){};

Network.prototype.addEventListener = function(){};

Network.prototype.addHTTPCookie = function(){};

Network.prototype.addSystemCookie = function(){};

Network.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

Network.prototype.createBonjourBrowser = function(params){ var BonjourBrowser = require('./Network/BonjourBrowser'); return BonjourBrowser(params); };

Network.prototype.createBonjourService = function(params){ var BonjourService = require('./Network/BonjourService'); return BonjourService(params); };

Network.prototype.createCookie = function(params){ var Cookie = require('./Network/Cookie'); return Cookie(params); };

Network.prototype.createHTTPClient = function(params){ var HTTPClient = require('./Network/HTTPClient'); return HTTPClient(params); };

Network.prototype.createTCPSocket = function(params){ var TCPSocket = require('./Network/TCPSocket'); return TCPSocket(params); };

Network.prototype.decodeURIComponent = function(){ return ''; };

Network.prototype.encodeURIComponent = function(){ return ''; };

Network.prototype.fireEvent = function(){};

Network.prototype.getAllHTTPCookies = function(){ return this.allHTTPCookies; };

Network.prototype.getApiName = function(){ return this.apiName; };

Network.prototype.getBubbleParent = function(){ return this.bubbleParent; };

Network.prototype.getHTTPCookies = function(){ return []; };

Network.prototype.getHTTPCookiesForDomain = function(){ return []; };

Network.prototype.getHttpURLFormatter = function(){ return this.httpURLFormatter; };

Network.prototype.getNetworkType = function(){ return this.networkType; };

Network.prototype.getNetworkTypeName = function(){ return this.networkTypeName; };

Network.prototype.getOnline = function(){ return this.online; };

Network.prototype.getRemoteDeviceUUID = function(){ return this.remoteDeviceUUID; };

Network.prototype.getRemoteNotificationTypes = function(){ return this.remoteNotificationTypes; };

Network.prototype.getRemoteNotificationsEnabled = function(){ return this.remoteNotificationsEnabled; };

Network.prototype.getSystemCookies = function(){ return []; };

Network.prototype.registerForPushNotifications = function(){};

Network.prototype.removeAllHTTPCookies = function(){};

Network.prototype.removeAllSystemCookies = function(){};

Network.prototype.removeConnectivityListener = function(){};

Network.prototype.removeEventListener = function(){};

Network.prototype.removeHTTPCookie = function(){};

Network.prototype.removeHTTPCookiesForDomain = function(){};

Network.prototype.removeSystemCookie = function(){};

Network.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

Network.prototype.setHttpURLFormatter = function(property){ this.httpURLFormatter = property; };

Network.prototype.unregisterForPushNotifications = function(){};

module.exports = function(properties){ return new Network(properties); };