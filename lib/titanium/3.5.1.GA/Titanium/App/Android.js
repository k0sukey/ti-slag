var crypto = require('crypto');
function Android(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'R',
			'apiName',
			'appVersionCode',
			'appVersionName',
			'bubbleParent',
			'launchIntent',
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
	if (__SLAG__properties.R) {
		throw new Error('Ti.App.Android.R is read only property');
	}
	this.R = {};
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.App.Android.apiName is read only property');
	}
	this.apiName = 'Ti.App.Android';
	if (__SLAG__properties.appVersionCode) {
		throw new Error('Ti.App.Android.appVersionCode is read only property');
	}
	this.appVersionCode = 0;
	if (__SLAG__properties.appVersionName) {
		throw new Error('Ti.App.Android.appVersionName is read only property');
	}
	this.appVersionName = '';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.launchIntent) {
		throw new Error('Ti.App.Android.launchIntent is read only property');
	}
	this.launchIntent = {};
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
Android.prototype.getAppVersionCode = function () {
	return this.appVersionCode;
};
Android.prototype.getAppVersionName = function () {
	return this.appVersionName;
};
Android.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Android.prototype.getLaunchIntent = function () {
	return this.launchIntent;
};
Android.prototype.removeEventListener = function () {
};
Android.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
module.exports = function (properties) {
	return new Android(properties);
};