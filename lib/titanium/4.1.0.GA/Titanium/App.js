var crypto = require('crypto');
function App(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'EVENT_ACCESSIBILITY_ANNOUNCEMENT',
			'EVENT_ACCESSIBILITY_CHANGED',
			'accessibilityEnabled',
			'analytics',
			'copyright',
			'deployType',
			'description',
			'disableNetworkActivityIndicator',
			'forceSplashAsSnapshot',
			'guid',
			'id',
			'installId',
			'idleTimerDisabled',
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
	this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.App.apiName is read only property');
	}
	this.apiName = 'Ti.App';
	this.lifecycleContainer = __SLAG_PROPERTIES.lifecycleContainer || {};
	if (__SLAG_PROPERTIES.EVENT_ACCESSIBILITY_ANNOUNCEMENT) {
		throw new Error('Ti.App.EVENT_ACCESSIBILITY_ANNOUNCEMENT is read only property');
	}
	this.EVENT_ACCESSIBILITY_ANNOUNCEMENT = '';
	if (__SLAG_PROPERTIES.EVENT_ACCESSIBILITY_CHANGED) {
		throw new Error('Ti.App.EVENT_ACCESSIBILITY_CHANGED is read only property');
	}
	this.EVENT_ACCESSIBILITY_CHANGED = '';
	if (__SLAG_PROPERTIES.accessibilityEnabled) {
		throw new Error('Ti.App.accessibilityEnabled is read only property');
	}
	this.accessibilityEnabled = true;
	if (__SLAG_PROPERTIES.analytics) {
		throw new Error('Ti.App.analytics is read only property');
	}
	this.analytics = true;
	if (__SLAG_PROPERTIES.copyright) {
		throw new Error('Ti.App.copyright is read only property');
	}
	this.copyright = '';
	if (__SLAG_PROPERTIES.deployType) {
		throw new Error('Ti.App.deployType is read only property');
	}
	this.deployType = '';
	if (__SLAG_PROPERTIES.description) {
		throw new Error('Ti.App.description is read only property');
	}
	this.description = '';
	this.disableNetworkActivityIndicator = __SLAG_PROPERTIES.disableNetworkActivityIndicator || true;
	this.forceSplashAsSnapshot = __SLAG_PROPERTIES.forceSplashAsSnapshot || true;
	if (__SLAG_PROPERTIES.guid) {
		throw new Error('Ti.App.guid is read only property');
	}
	this.guid = '';
	if (__SLAG_PROPERTIES.id) {
		throw new Error('Ti.App.id is read only property');
	}
	this.id = '';
	if (__SLAG_PROPERTIES.installId) {
		throw new Error('Ti.App.installId is read only property');
	}
	this.installId = '';
	this.idleTimerDisabled = __SLAG_PROPERTIES.idleTimerDisabled || true;
	if (__SLAG_PROPERTIES.keyboardVisible) {
		throw new Error('Ti.App.keyboardVisible is read only property');
	}
	this.keyboardVisible = true;
	if (__SLAG_PROPERTIES.name) {
		throw new Error('Ti.App.name is read only property');
	}
	this.name = '';
	this.proximityDetection = __SLAG_PROPERTIES.proximityDetection || true;
	if (__SLAG_PROPERTIES.proximityState) {
		throw new Error('Ti.App.proximityState is read only property');
	}
	this.proximityState = true;
	if (__SLAG_PROPERTIES.publisher) {
		throw new Error('Ti.App.publisher is read only property');
	}
	this.publisher = '';
	if (__SLAG_PROPERTIES.sessionId) {
		throw new Error('Ti.App.sessionId is read only property');
	}
	this.sessionId = '';
	if (__SLAG_PROPERTIES.url) {
		throw new Error('Ti.App.url is read only property');
	}
	this.url = '';
	if (__SLAG_PROPERTIES.version) {
		throw new Error('Ti.App.version is read only property');
	}
	this.version = '';
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
App.prototype.addEventListener = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
App.prototype.removeEventListener = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
App.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
App.prototype.fireEvent = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
App.prototype.getArguments = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
App.prototype.fireSystemEvent = function () {
	if ([
			'android',
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
App.prototype.getBubbleParent = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
App.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
App.prototype.getApiName = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
App.prototype.getLifecycleContainer = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lifecycleContainer;
};
App.prototype.setLifecycleContainer = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.lifecycleContainer = __SLAG__PROPERTY;
};
App.prototype.getAccessibilityEnabled = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.accessibilityEnabled;
};
App.prototype.getAnalytics = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.analytics;
};
App.prototype.getCopyright = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.copyright;
};
App.prototype.getDeployType = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.deployType;
};
App.prototype.getDescription = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.description;
};
App.prototype.getDisableNetworkActivityIndicator = function () {
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.disableNetworkActivityIndicator;
};
App.prototype.setDisableNetworkActivityIndicator = function (__SLAG__PROPERTY) {
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.disableNetworkActivityIndicator = __SLAG__PROPERTY;
};
App.prototype.getForceSplashAsSnapshot = function () {
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.forceSplashAsSnapshot;
};
App.prototype.setForceSplashAsSnapshot = function (__SLAG__PROPERTY) {
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.forceSplashAsSnapshot = __SLAG__PROPERTY;
};
App.prototype.getGuid = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.guid;
};
App.prototype.getId = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.id;
};
App.prototype.getInstallId = function () {
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.installId;
};
App.prototype.getIdleTimerDisabled = function () {
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.idleTimerDisabled;
};
App.prototype.setIdleTimerDisabled = function (__SLAG__PROPERTY) {
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.idleTimerDisabled = __SLAG__PROPERTY;
};
App.prototype.getKeyboardVisible = function () {
	if ([
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.keyboardVisible;
};
App.prototype.getName = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.name;
};
App.prototype.getProximityDetection = function () {
	if ([
			'android',
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.proximityDetection;
};
App.prototype.setProximityDetection = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.proximityDetection = __SLAG__PROPERTY;
};
App.prototype.getProximityState = function () {
	if ([
			'android',
			'ios',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.proximityState;
};
App.prototype.getPublisher = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.publisher;
};
App.prototype.getSessionId = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.sessionId;
};
App.prototype.getUrl = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.url;
};
App.prototype.getVersion = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.version;
};
module.exports = function (properties) {
	return new App(properties);
};