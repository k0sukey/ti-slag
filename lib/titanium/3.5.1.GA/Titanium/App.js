var crypto = require('crypto');
function App(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
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
	if (__SLAG_PROPERTIES.EVENT_ACCESSIBILITY_ANNOUNCEMENT) {
		throw new Error('Ti.App.EVENT_ACCESSIBILITY_ANNOUNCEMENT is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.EVENT_ACCESSIBILITY_ANNOUNCEMENT = undefined;
	} else {
		this.EVENT_ACCESSIBILITY_ANNOUNCEMENT = '';
	}
	if (__SLAG_PROPERTIES.EVENT_ACCESSIBILITY_CHANGED) {
		throw new Error('Ti.App.EVENT_ACCESSIBILITY_CHANGED is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.EVENT_ACCESSIBILITY_CHANGED = undefined;
	} else {
		this.EVENT_ACCESSIBILITY_CHANGED = '';
	}
	if (__SLAG_PROPERTIES.accessibilityEnabled) {
		throw new Error('Ti.App.accessibilityEnabled is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.accessibilityEnabled = undefined;
	} else {
		this.accessibilityEnabled = true;
	}
	if (__SLAG_PROPERTIES.analytics) {
		throw new Error('Ti.App.analytics is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.analytics = undefined;
	} else {
		this.analytics = true;
	}
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.App.apiName is read only property');
	}
	this.apiName = 'Ti.App';
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.bubbleParent = undefined;
	} else {
		this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	}
	if (__SLAG_PROPERTIES.copyright) {
		throw new Error('Ti.App.copyright is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.copyright = undefined;
	} else {
		this.copyright = '';
	}
	if (__SLAG_PROPERTIES.deployType) {
		throw new Error('Ti.App.deployType is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.deployType = undefined;
	} else {
		this.deployType = '';
	}
	if (__SLAG_PROPERTIES.description) {
		throw new Error('Ti.App.description is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.description = undefined;
	} else {
		this.description = '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.disableNetworkActivityIndicator = undefined;
	} else {
		this.disableNetworkActivityIndicator = __SLAG_PROPERTIES.disableNetworkActivityIndicator || true;
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.forceSplashAsSnapshot = undefined;
	} else {
		this.forceSplashAsSnapshot = __SLAG_PROPERTIES.forceSplashAsSnapshot || true;
	}
	if (__SLAG_PROPERTIES.guid) {
		throw new Error('Ti.App.guid is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.guid = undefined;
	} else {
		this.guid = '';
	}
	if (__SLAG_PROPERTIES.id) {
		throw new Error('Ti.App.id is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.id = undefined;
	} else {
		this.id = '';
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.idleTimerDisabled = undefined;
	} else {
		this.idleTimerDisabled = __SLAG_PROPERTIES.idleTimerDisabled || true;
	}
	if (__SLAG_PROPERTIES.installId) {
		throw new Error('Ti.App.installId is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.installId = undefined;
	} else {
		this.installId = '';
	}
	if (__SLAG_PROPERTIES.keyboardVisible) {
		throw new Error('Ti.App.keyboardVisible is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.keyboardVisible = undefined;
	} else {
		this.keyboardVisible = true;
	}
	if (__SLAG_PROPERTIES.name) {
		throw new Error('Ti.App.name is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.name = undefined;
	} else {
		this.name = '';
	}
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.proximityDetection = undefined;
	} else {
		this.proximityDetection = __SLAG_PROPERTIES.proximityDetection || true;
	}
	if (__SLAG_PROPERTIES.proximityState) {
		throw new Error('Ti.App.proximityState is read only property');
	}
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.proximityState = undefined;
	} else {
		this.proximityState = true;
	}
	if (__SLAG_PROPERTIES.publisher) {
		throw new Error('Ti.App.publisher is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.publisher = undefined;
	} else {
		this.publisher = '';
	}
	if (__SLAG_PROPERTIES.sessionId) {
		throw new Error('Ti.App.sessionId is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.sessionId = undefined;
	} else {
		this.sessionId = '';
	}
	if (__SLAG_PROPERTIES.url) {
		throw new Error('Ti.App.url is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.url = undefined;
	} else {
		this.url = '';
	}
	if (__SLAG_PROPERTIES.version) {
		throw new Error('Ti.App.version is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.version = undefined;
	} else {
		this.version = '';
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
App.prototype.addEventListener = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
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
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
App.prototype.fireSystemEvent = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
App.prototype.getAccessibilityEnabled = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
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
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.analytics;
};
App.prototype.getApiName = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
App.prototype.getArguments = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
App.prototype.getBubbleParent = function () {
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
App.prototype.getCopyright = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
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
			'tizen'
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
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.description;
};
App.prototype.getDisableNetworkActivityIndicator = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.disableNetworkActivityIndicator;
};
App.prototype.getForceSplashAsSnapshot = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.forceSplashAsSnapshot;
};
App.prototype.getGuid = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
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
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.id;
};
App.prototype.getIdleTimerDisabled = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.idleTimerDisabled;
};
App.prototype.getInstallId = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.installId;
};
App.prototype.getKeyboardVisible = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.keyboardVisible;
};
App.prototype.getName = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.name;
};
App.prototype.getProximityDetection = function () {
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.proximityDetection;
};
App.prototype.getProximityState = function () {
	if ([
			'ios',
			'android'
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
			'tizen'
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
			'tizen'
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
			'tizen'
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
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.version;
};
App.prototype.removeEventListener = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
App.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
App.prototype.setDisableNetworkActivityIndicator = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.disableNetworkActivityIndicator = __SLAG__PROPERTY;
};
App.prototype.setForceSplashAsSnapshot = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.forceSplashAsSnapshot = __SLAG__PROPERTY;
};
App.prototype.setIdleTimerDisabled = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.idleTimerDisabled = __SLAG__PROPERTY;
};
App.prototype.setProximityDetection = function (__SLAG__PROPERTY) {
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.proximityDetection = __SLAG__PROPERTY;
};
module.exports = function (properties) {
	return new App(properties);
};