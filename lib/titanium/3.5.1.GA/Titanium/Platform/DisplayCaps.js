var crypto = require('crypto');
function DisplayCaps(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'apiName',
			'bubbleParent',
			'density',
			'dpi',
			'logicalDensityFactor',
			'platformHeight',
			'platformWidth',
			'xdpi',
			'ydpi',
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
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.Platform.DisplayCaps.apiName is read only property');
	}
	this.apiName = 'Ti.Platform.DisplayCaps';
	this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	if (__SLAG_PROPERTIES.density) {
		throw new Error('Ti.Platform.DisplayCaps.density is read only property');
	}
	this.density = '';
	if (__SLAG_PROPERTIES.dpi) {
		throw new Error('Ti.Platform.DisplayCaps.dpi is read only property');
	}
	this.dpi = 0;
	if (__SLAG_PROPERTIES.logicalDensityFactor) {
		throw new Error('Ti.Platform.DisplayCaps.logicalDensityFactor is read only property');
	}
	this.logicalDensityFactor = 0;
	if (__SLAG_PROPERTIES.platformHeight) {
		throw new Error('Ti.Platform.DisplayCaps.platformHeight is read only property');
	}
	this.platformHeight = 0;
	if (__SLAG_PROPERTIES.platformWidth) {
		throw new Error('Ti.Platform.DisplayCaps.platformWidth is read only property');
	}
	this.platformWidth = 0;
	if (__SLAG_PROPERTIES.xdpi) {
		throw new Error('Ti.Platform.DisplayCaps.xdpi is read only property');
	}
	this.xdpi = 0;
	if (__SLAG_PROPERTIES.ydpi) {
		throw new Error('Ti.Platform.DisplayCaps.ydpi is read only property');
	}
	this.ydpi = 0;
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
DisplayCaps.prototype.addEventListener = function () {
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
DisplayCaps.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
DisplayCaps.prototype.fireEvent = function () {
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
DisplayCaps.prototype.getApiName = function () {
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
DisplayCaps.prototype.getBubbleParent = function () {
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
DisplayCaps.prototype.getDensity = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.density;
};
DisplayCaps.prototype.getDpi = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.dpi;
};
DisplayCaps.prototype.getLogicalDensityFactor = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.logicalDensityFactor;
};
DisplayCaps.prototype.getPlatformHeight = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.platformHeight;
};
DisplayCaps.prototype.getPlatformWidth = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.platformWidth;
};
DisplayCaps.prototype.getXdpi = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.xdpi;
};
DisplayCaps.prototype.getYdpi = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.ydpi;
};
DisplayCaps.prototype.removeEventListener = function () {
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
DisplayCaps.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
module.exports = function (properties) {
	return new DisplayCaps(properties);
};