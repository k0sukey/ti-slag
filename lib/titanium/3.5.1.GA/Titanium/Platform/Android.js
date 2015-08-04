var crypto = require('crypto');
function Android(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'API_LEVEL',
			'PHYSICAL_SIZE_CATEGORY_LARGE',
			'PHYSICAL_SIZE_CATEGORY_NORMAL',
			'PHYSICAL_SIZE_CATEGORY_SMALL',
			'PHYSICAL_SIZE_CATEGORY_UNDEFINED',
			'PHYSICAL_SIZE_CATEGORY_XLARGE',
			'apiName',
			'bubbleParent',
			'physicalSizeCategory',
			'id'
		];
	if (__SLAG__names.length > 0 && process.env.SLAG_STRICT === 'true') {
		for (var __SLAG__name in __SLAG__properties) {
			if (__SLAG__names.indexOf(__SLAG__name) === -1) {
				throw new Error('Use user custom property ' + __SLAG__name);
			}
		}
	} else if (__SLAG__names.length === 0 && __SLAG__properties.length > 0 && process.env.SLAG_STRICT === 'true') {
		throw new Error('Use user custom properties. ' + __SLAG__properties.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	if (__SLAG__properties.API_LEVEL) {
		throw new Error('Ti.Platform.Android.API_LEVEL is read only property');
	}
	this.API_LEVEL = 0;
	if (__SLAG__properties.PHYSICAL_SIZE_CATEGORY_LARGE) {
		throw new Error('Ti.Platform.Android.PHYSICAL_SIZE_CATEGORY_LARGE is read only property');
	}
	this.PHYSICAL_SIZE_CATEGORY_LARGE = 0;
	if (__SLAG__properties.PHYSICAL_SIZE_CATEGORY_NORMAL) {
		throw new Error('Ti.Platform.Android.PHYSICAL_SIZE_CATEGORY_NORMAL is read only property');
	}
	this.PHYSICAL_SIZE_CATEGORY_NORMAL = 0;
	if (__SLAG__properties.PHYSICAL_SIZE_CATEGORY_SMALL) {
		throw new Error('Ti.Platform.Android.PHYSICAL_SIZE_CATEGORY_SMALL is read only property');
	}
	this.PHYSICAL_SIZE_CATEGORY_SMALL = 0;
	if (__SLAG__properties.PHYSICAL_SIZE_CATEGORY_UNDEFINED) {
		throw new Error('Ti.Platform.Android.PHYSICAL_SIZE_CATEGORY_UNDEFINED is read only property');
	}
	this.PHYSICAL_SIZE_CATEGORY_UNDEFINED = 0;
	if (__SLAG__properties.PHYSICAL_SIZE_CATEGORY_XLARGE) {
		throw new Error('Ti.Platform.Android.PHYSICAL_SIZE_CATEGORY_XLARGE is read only property');
	}
	this.PHYSICAL_SIZE_CATEGORY_XLARGE = 0;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.Platform.Android.apiName is read only property');
	}
	this.apiName = 'Ti.Platform.Android';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.physicalSizeCategory) {
		throw new Error('Ti.Platform.Android.physicalSizeCategory is read only property');
	}
	this.physicalSizeCategory = 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
Android.prototype.addEventListener = function () {
};
Android.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Android.prototype.fireEvent = function () {
};
Android.prototype.getApiName = function () {
	return this.apiName;
};
Android.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Android.prototype.getPhysicalSizeCategory = function () {
	return this.physicalSizeCategory;
};
Android.prototype.removeEventListener = function () {
};
Android.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
module.exports = function (properties) {
	return new Android(properties);
};