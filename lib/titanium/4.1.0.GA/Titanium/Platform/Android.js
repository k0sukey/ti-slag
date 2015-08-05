var crypto = require('crypto');
function Android(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'API_LEVEL',
			'PHYSICAL_SIZE_CATEGORY_LARGE',
			'PHYSICAL_SIZE_CATEGORY_NORMAL',
			'PHYSICAL_SIZE_CATEGORY_SMALL',
			'PHYSICAL_SIZE_CATEGORY_UNDEFINED',
			'PHYSICAL_SIZE_CATEGORY_XLARGE',
			'physicalSizeCategory',
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
		throw new Error('Ti.Platform.Android.apiName is read only property');
	}
	this.apiName = 'Ti.Platform.Android';
	this.lifecycleContainer = __SLAG_PROPERTIES.lifecycleContainer || {};
	if (__SLAG_PROPERTIES.API_LEVEL) {
		throw new Error('Ti.Platform.Android.API_LEVEL is read only property');
	}
	this.API_LEVEL = 0;
	if (__SLAG_PROPERTIES.PHYSICAL_SIZE_CATEGORY_LARGE) {
		throw new Error('Ti.Platform.Android.PHYSICAL_SIZE_CATEGORY_LARGE is read only property');
	}
	this.PHYSICAL_SIZE_CATEGORY_LARGE = 0;
	if (__SLAG_PROPERTIES.PHYSICAL_SIZE_CATEGORY_NORMAL) {
		throw new Error('Ti.Platform.Android.PHYSICAL_SIZE_CATEGORY_NORMAL is read only property');
	}
	this.PHYSICAL_SIZE_CATEGORY_NORMAL = 0;
	if (__SLAG_PROPERTIES.PHYSICAL_SIZE_CATEGORY_SMALL) {
		throw new Error('Ti.Platform.Android.PHYSICAL_SIZE_CATEGORY_SMALL is read only property');
	}
	this.PHYSICAL_SIZE_CATEGORY_SMALL = 0;
	if (__SLAG_PROPERTIES.PHYSICAL_SIZE_CATEGORY_UNDEFINED) {
		throw new Error('Ti.Platform.Android.PHYSICAL_SIZE_CATEGORY_UNDEFINED is read only property');
	}
	this.PHYSICAL_SIZE_CATEGORY_UNDEFINED = 0;
	if (__SLAG_PROPERTIES.PHYSICAL_SIZE_CATEGORY_XLARGE) {
		throw new Error('Ti.Platform.Android.PHYSICAL_SIZE_CATEGORY_XLARGE is read only property');
	}
	this.PHYSICAL_SIZE_CATEGORY_XLARGE = 0;
	if (__SLAG_PROPERTIES.physicalSizeCategory) {
		throw new Error('Ti.Platform.Android.physicalSizeCategory is read only property');
	}
	this.physicalSizeCategory = 0;
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
Android.prototype.addEventListener = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Android.prototype.removeEventListener = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Android.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
Android.prototype.fireEvent = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Android.prototype.getBubbleParent = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
Android.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
Android.prototype.getApiName = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
Android.prototype.getLifecycleContainer = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lifecycleContainer;
};
Android.prototype.setLifecycleContainer = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.lifecycleContainer = __SLAG__PROPERTY;
};
Android.prototype.getPhysicalSizeCategory = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.physicalSizeCategory;
};
module.exports = function (properties) {
	return new Android(properties);
};