var crypto = require('crypto');
function DisplayCaps(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
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
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.Platform.DisplayCaps.apiName is read only property');
	}
	this.apiName = 'Ti.Platform.DisplayCaps';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.density) {
		throw new Error('Ti.Platform.DisplayCaps.density is read only property');
	}
	this.density = '';
	if (__SLAG__properties.dpi) {
		throw new Error('Ti.Platform.DisplayCaps.dpi is read only property');
	}
	this.dpi = 0;
	if (__SLAG__properties.logicalDensityFactor) {
		throw new Error('Ti.Platform.DisplayCaps.logicalDensityFactor is read only property');
	}
	this.logicalDensityFactor = 0;
	if (__SLAG__properties.platformHeight) {
		throw new Error('Ti.Platform.DisplayCaps.platformHeight is read only property');
	}
	this.platformHeight = 0;
	if (__SLAG__properties.platformWidth) {
		throw new Error('Ti.Platform.DisplayCaps.platformWidth is read only property');
	}
	this.platformWidth = 0;
	if (__SLAG__properties.xdpi) {
		throw new Error('Ti.Platform.DisplayCaps.xdpi is read only property');
	}
	this.xdpi = 0;
	if (__SLAG__properties.ydpi) {
		throw new Error('Ti.Platform.DisplayCaps.ydpi is read only property');
	}
	this.ydpi = 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
DisplayCaps.prototype.addEventListener = function () {
};
DisplayCaps.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
DisplayCaps.prototype.fireEvent = function () {
};
DisplayCaps.prototype.getApiName = function () {
	return this.apiName;
};
DisplayCaps.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
DisplayCaps.prototype.getDensity = function () {
	return this.density;
};
DisplayCaps.prototype.getDpi = function () {
	return this.dpi;
};
DisplayCaps.prototype.getLogicalDensityFactor = function () {
	return this.logicalDensityFactor;
};
DisplayCaps.prototype.getPlatformHeight = function () {
	return this.platformHeight;
};
DisplayCaps.prototype.getPlatformWidth = function () {
	return this.platformWidth;
};
DisplayCaps.prototype.getXdpi = function () {
	return this.xdpi;
};
DisplayCaps.prototype.getYdpi = function () {
	return this.ydpi;
};
DisplayCaps.prototype.removeEventListener = function () {
};
DisplayCaps.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
module.exports = function (properties) {
	return new DisplayCaps(properties);
};