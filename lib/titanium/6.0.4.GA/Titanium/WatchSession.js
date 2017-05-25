var crypto = require('crypto');
function WatchSession(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'bubbleParent',
			'apiName',
			'activationState',
			'ACTIVATION_STATE_NOT_ACTIVATED',
			'ACTIVATION_STATE_INACTIVE',
			'ACTIVATION_STATE_ACTIVATED',
			'hasContentPending',
			'remainingComplicationUserInfoTransfers',
			'isSupported',
			'isPaired',
			'isWatchAppInstalled',
			'isComplicationEnabled',
			'isReachable',
			'isActivated',
			'recentApplicationContext',
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
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.bubbleParent = undefined;
	} else {
		this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	}
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.WatchSession.apiName is read only property');
	}
	this.apiName = 'Ti.WatchSession';
	if (__SLAG_PROPERTIES.activationState) {
		throw new Error('Ti.WatchSession.activationState is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.activationState = undefined;
	} else {
		this.activationState = 0;
	}
	if (__SLAG_PROPERTIES.ACTIVATION_STATE_NOT_ACTIVATED) {
		throw new Error('Ti.WatchSession.ACTIVATION_STATE_NOT_ACTIVATED is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTIVATION_STATE_NOT_ACTIVATED = undefined;
	} else {
		this.ACTIVATION_STATE_NOT_ACTIVATED = 0;
	}
	if (__SLAG_PROPERTIES.ACTIVATION_STATE_INACTIVE) {
		throw new Error('Ti.WatchSession.ACTIVATION_STATE_INACTIVE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTIVATION_STATE_INACTIVE = undefined;
	} else {
		this.ACTIVATION_STATE_INACTIVE = 0;
	}
	if (__SLAG_PROPERTIES.ACTIVATION_STATE_ACTIVATED) {
		throw new Error('Ti.WatchSession.ACTIVATION_STATE_ACTIVATED is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.ACTIVATION_STATE_ACTIVATED = undefined;
	} else {
		this.ACTIVATION_STATE_ACTIVATED = 0;
	}
	if (__SLAG_PROPERTIES.hasContentPending) {
		throw new Error('Ti.WatchSession.hasContentPending is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.hasContentPending = undefined;
	} else {
		this.hasContentPending = true;
	}
	if (__SLAG_PROPERTIES.remainingComplicationUserInfoTransfers) {
		throw new Error('Ti.WatchSession.remainingComplicationUserInfoTransfers is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.remainingComplicationUserInfoTransfers = undefined;
	} else {
		this.remainingComplicationUserInfoTransfers = 0;
	}
	if (__SLAG_PROPERTIES.isSupported) {
		throw new Error('Ti.WatchSession.isSupported is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.isSupported = undefined;
	} else {
		this.isSupported = true;
	}
	if (__SLAG_PROPERTIES.isPaired) {
		throw new Error('Ti.WatchSession.isPaired is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.isPaired = undefined;
	} else {
		this.isPaired = true;
	}
	if (__SLAG_PROPERTIES.isWatchAppInstalled) {
		throw new Error('Ti.WatchSession.isWatchAppInstalled is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.isWatchAppInstalled = undefined;
	} else {
		this.isWatchAppInstalled = true;
	}
	if (__SLAG_PROPERTIES.isComplicationEnabled) {
		throw new Error('Ti.WatchSession.isComplicationEnabled is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.isComplicationEnabled = undefined;
	} else {
		this.isComplicationEnabled = true;
	}
	if (__SLAG_PROPERTIES.isReachable) {
		throw new Error('Ti.WatchSession.isReachable is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.isReachable = undefined;
	} else {
		this.isReachable = true;
	}
	if (__SLAG_PROPERTIES.isActivated) {
		throw new Error('Ti.WatchSession.isActivated is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.isActivated = undefined;
	} else {
		this.isActivated = true;
	}
	if (__SLAG_PROPERTIES.recentApplicationContext) {
		throw new Error('Ti.WatchSession.recentApplicationContext is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.recentApplicationContext = undefined;
	} else {
		this.recentApplicationContext = {};
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
WatchSession.prototype.addEventListener = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
WatchSession.prototype.removeEventListener = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
WatchSession.prototype.fireEvent = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
WatchSession.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
WatchSession.prototype.activateSession = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
WatchSession.prototype.sendMessage = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
WatchSession.prototype.updateApplicationContext = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
WatchSession.prototype.transferUserInfo = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
WatchSession.prototype.transferFile = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
WatchSession.prototype.transferCurrentComplication = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
WatchSession.prototype.cancelAllUserInfoTransfers = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
WatchSession.prototype.cancelAllFileTransfers = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
WatchSession.prototype.cancelAllTransfers = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
WatchSession.prototype.getBubbleParent = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
WatchSession.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
WatchSession.prototype.getApiName = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
WatchSession.prototype.getActivationState = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.activationState;
};
WatchSession.prototype.getHasContentPending = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.hasContentPending;
};
WatchSession.prototype.getRemainingComplicationUserInfoTransfers = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.remainingComplicationUserInfoTransfers;
};
WatchSession.prototype.getIsSupported = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.isSupported;
};
WatchSession.prototype.getIsPaired = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.isPaired;
};
WatchSession.prototype.getIsWatchAppInstalled = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.isWatchAppInstalled;
};
WatchSession.prototype.getIsComplicationEnabled = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.isComplicationEnabled;
};
WatchSession.prototype.getIsReachable = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.isReachable;
};
WatchSession.prototype.getIsActivated = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.isActivated;
};
WatchSession.prototype.getRecentApplicationContext = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.recentApplicationContext;
};
module.exports = function (properties) {
	return new WatchSession(properties);
};