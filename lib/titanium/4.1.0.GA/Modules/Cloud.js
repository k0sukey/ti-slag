var crypto = require('crypto');
function Cloud(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'debug',
			'ondatastream',
			'onsendstream',
			'useSecure',
			'sessionId',
			'accessToken',
			'expiresIn',
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
		throw new Error('Modules.Cloud.apiName is read only property');
	}
	this.apiName = 'Modules.Cloud';
	this.lifecycleContainer = __SLAG_PROPERTIES.lifecycleContainer || {};
	this.debug = __SLAG_PROPERTIES.debug || true;
	this.ondatastream = __SLAG_PROPERTIES.ondatastream || {};
	this.onsendstream = __SLAG_PROPERTIES.onsendstream || {};
	if (__SLAG_PROPERTIES.useSecure) {
		throw new Error('Modules.Cloud.useSecure was deprecated, since 2.0');
	}
	this.sessionId = __SLAG_PROPERTIES.sessionId || '';
	this.accessToken = __SLAG_PROPERTIES.accessToken || '';
	if (__SLAG_PROPERTIES.expiresIn) {
		throw new Error('Modules.Cloud.expiresIn is read only property');
	}
	this.expiresIn = 0;
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
Cloud.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
Cloud.prototype.hasStoredSession = function () {
	throw new Error('Modules.Cloud.hasStoredSession was deprecated, since 2.1.2');
};
Cloud.prototype.retrieveStoredSession = function () {
	throw new Error('Modules.Cloud.retrieveStoredSession was deprecated, since 2.1.2');
};
Cloud.prototype.sendRequest = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Cloud.prototype.createX509CertificatePinningSecurityManager = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var X509CertificatePinningSecurityManager = require('./Cloud/X509CertificatePinningSecurityManager');
	return X509CertificatePinningSecurityManager(__SLAG_PROPERTY);
};
Cloud.prototype.getBubbleParent = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
Cloud.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
Cloud.prototype.getApiName = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
Cloud.prototype.getLifecycleContainer = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lifecycleContainer;
};
Cloud.prototype.setLifecycleContainer = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.lifecycleContainer = __SLAG__PROPERTY;
};
Cloud.prototype.getDebug = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.debug;
};
Cloud.prototype.setDebug = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.debug = __SLAG__PROPERTY;
};
Cloud.prototype.getOndatastream = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.ondatastream;
};
Cloud.prototype.setOndatastream = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.ondatastream = __SLAG__PROPERTY;
};
Cloud.prototype.getOnsendstream = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.onsendstream;
};
Cloud.prototype.setOnsendstream = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.onsendstream = __SLAG__PROPERTY;
};
Cloud.prototype.getUseSecure = function () {
	throw new Error('Modules.Cloud.getUseSecure was deprecated, since 2.0');
};
Cloud.prototype.setUseSecure = function () {
	throw new Error('Modules.Cloud.setUseSecure was deprecated, since 2.0');
};
Cloud.prototype.getSessionId = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.sessionId;
};
Cloud.prototype.setSessionId = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.sessionId = __SLAG__PROPERTY;
};
Cloud.prototype.getAccessToken = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.accessToken;
};
Cloud.prototype.setAccessToken = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.accessToken = __SLAG__PROPERTY;
};
Cloud.prototype.getExpiresIn = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.expiresIn;
};
module.exports = function (properties) {
	return new Cloud(properties);
};