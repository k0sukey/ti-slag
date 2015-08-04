var crypto = require('crypto');
function App(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'EVENT_ACCESSIBILITY_ANNOUNCEMENT',
			'EVENT_ACCESSIBILITY_CHANGED',
			'accessibilityEnabled',
			'analytics',
			'apiName',
			'bubbleParent',
			'copyright',
			'deployType',
			'description',
			'disableNetworkActivityIndicator',
			'forceSplashAsSnapshot',
			'guid',
			'id',
			'idleTimerDisabled',
			'installId',
			'keyboardVisible',
			'name',
			'proximityDetection',
			'proximityState',
			'publisher',
			'sessionId',
			'url',
			'version',
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
	if (__SLAG__properties.EVENT_ACCESSIBILITY_ANNOUNCEMENT) {
		throw new Error('Ti.App.EVENT_ACCESSIBILITY_ANNOUNCEMENT is read only property');
	}
	this.EVENT_ACCESSIBILITY_ANNOUNCEMENT = '';
	if (__SLAG__properties.EVENT_ACCESSIBILITY_CHANGED) {
		throw new Error('Ti.App.EVENT_ACCESSIBILITY_CHANGED is read only property');
	}
	this.EVENT_ACCESSIBILITY_CHANGED = '';
	if (__SLAG__properties.accessibilityEnabled) {
		throw new Error('Ti.App.accessibilityEnabled is read only property');
	}
	this.accessibilityEnabled = true;
	if (__SLAG__properties.analytics) {
		throw new Error('Ti.App.analytics is read only property');
	}
	this.analytics = true;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.App.apiName is read only property');
	}
	this.apiName = 'Ti.App';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.copyright) {
		throw new Error('Ti.App.copyright is read only property');
	}
	this.copyright = '';
	if (__SLAG__properties.deployType) {
		throw new Error('Ti.App.deployType is read only property');
	}
	this.deployType = '';
	if (__SLAG__properties.description) {
		throw new Error('Ti.App.description is read only property');
	}
	this.description = '';
	this.disableNetworkActivityIndicator = __SLAG__properties.disableNetworkActivityIndicator || true;
	this.forceSplashAsSnapshot = __SLAG__properties.forceSplashAsSnapshot || true;
	if (__SLAG__properties.guid) {
		throw new Error('Ti.App.guid is read only property');
	}
	this.guid = '';
	if (__SLAG__properties.id) {
		throw new Error('Ti.App.id is read only property');
	}
	this.id = '';
	this.idleTimerDisabled = __SLAG__properties.idleTimerDisabled || true;
	if (__SLAG__properties.installId) {
		throw new Error('Ti.App.installId is read only property');
	}
	this.installId = '';
	if (__SLAG__properties.keyboardVisible) {
		throw new Error('Ti.App.keyboardVisible is read only property');
	}
	this.keyboardVisible = true;
	if (__SLAG__properties.name) {
		throw new Error('Ti.App.name is read only property');
	}
	this.name = '';
	this.proximityDetection = __SLAG__properties.proximityDetection || true;
	if (__SLAG__properties.proximityState) {
		throw new Error('Ti.App.proximityState is read only property');
	}
	this.proximityState = true;
	if (__SLAG__properties.publisher) {
		throw new Error('Ti.App.publisher is read only property');
	}
	this.publisher = '';
	if (__SLAG__properties.sessionId) {
		throw new Error('Ti.App.sessionId is read only property');
	}
	this.sessionId = '';
	if (__SLAG__properties.url) {
		throw new Error('Ti.App.url is read only property');
	}
	this.url = '';
	if (__SLAG__properties.version) {
		throw new Error('Ti.App.version is read only property');
	}
	this.version = '';
	this.id = __SLAG__properties.id || '';
	return this;
}
App.prototype.addEventListener = function () {
};
App.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
App.prototype.fireEvent = function () {
};
App.prototype.fireSystemEvent = function () {
};
App.prototype.getAccessibilityEnabled = function () {
	return this.accessibilityEnabled;
};
App.prototype.getAnalytics = function () {
	return this.analytics;
};
App.prototype.getApiName = function () {
	return this.apiName;
};
App.prototype.getArguments = function () {
	return {};
};
App.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
App.prototype.getCopyright = function () {
	return this.copyright;
};
App.prototype.getDeployType = function () {
	return this.deployType;
};
App.prototype.getDescription = function () {
	return this.description;
};
App.prototype.getDisableNetworkActivityIndicator = function () {
	return this.disableNetworkActivityIndicator;
};
App.prototype.getForceSplashAsSnapshot = function () {
	return this.forceSplashAsSnapshot;
};
App.prototype.getGuid = function () {
	return this.guid;
};
App.prototype.getId = function () {
	return this.id;
};
App.prototype.getIdleTimerDisabled = function () {
	return this.idleTimerDisabled;
};
App.prototype.getInstallId = function () {
	return this.installId;
};
App.prototype.getKeyboardVisible = function () {
	return this.keyboardVisible;
};
App.prototype.getName = function () {
	return this.name;
};
App.prototype.getProximityDetection = function () {
	return this.proximityDetection;
};
App.prototype.getProximityState = function () {
	return this.proximityState;
};
App.prototype.getPublisher = function () {
	return this.publisher;
};
App.prototype.getSessionId = function () {
	return this.sessionId;
};
App.prototype.getUrl = function () {
	return this.url;
};
App.prototype.getVersion = function () {
	return this.version;
};
App.prototype.removeEventListener = function () {
};
App.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
App.prototype.setDisableNetworkActivityIndicator = function (property) {
	this.disableNetworkActivityIndicator = property;
};
App.prototype.setForceSplashAsSnapshot = function (property) {
	this.forceSplashAsSnapshot = property;
};
App.prototype.setIdleTimerDisabled = function (property) {
	this.idleTimerDisabled = property;
};
App.prototype.setProximityDetection = function (property) {
	this.proximityDetection = property;
};
module.exports = function (properties) {
	return new App(properties);
};