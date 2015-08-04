var crypto = require('crypto');
function Intent(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'action',
			'apiName',
			'bubbleParent',
			'className',
			'data',
			'flags',
			'packageName',
			'type',
			'url',
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
	this.action = __SLAG__properties.action || '';
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.Android.Intent.apiName is read only property');
	}
	this.apiName = 'Ti.Android.Intent';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.className = __SLAG__properties.className || '';
	if (__SLAG__properties.data) {
		throw new Error('Ti.Android.Intent.data is read only property');
	}
	this.data = '';
	this.flags = __SLAG__properties.flags || 0;
	this.packageName = __SLAG__properties.packageName || '';
	if (__SLAG__properties.type) {
		throw new Error('Ti.Android.Intent.type is read only property');
	}
	this.type = '';
	this.url = __SLAG__properties.url || '';
	this.id = __SLAG__properties.id || '';
	return this;
}
Intent.prototype.addCategory = function () {
};
Intent.prototype.addEventListener = function () {
};
Intent.prototype.addFlags = function () {
};
Intent.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Intent.prototype.fireEvent = function () {
};
Intent.prototype.getAction = function () {
	return this.action;
};
Intent.prototype.getApiName = function () {
	return this.apiName;
};
Intent.prototype.getBlobExtra = function () {
	return {};
};
Intent.prototype.getBooleanExtra = function () {
	return true;
};
Intent.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Intent.prototype.getClassName = function () {
	return this.className;
};
Intent.prototype.getData = function () {
	return this.data;
};
Intent.prototype.getDoubleExtra = function () {
	return 0;
};
Intent.prototype.getFlags = function () {
	return this.flags;
};
Intent.prototype.getIntExtra = function () {
	return 0;
};
Intent.prototype.getLongExtra = function () {
	return 0;
};
Intent.prototype.getPackageName = function () {
	return this.packageName;
};
Intent.prototype.getStringExtra = function () {
	return '';
};
Intent.prototype.getType = function () {
	return this.type;
};
Intent.prototype.getUrl = function () {
	return this.url;
};
Intent.prototype.hasExtra = function () {
	return true;
};
Intent.prototype.putExtra = function () {
};
Intent.prototype.putExtraUri = function () {
};
Intent.prototype.removeEventListener = function () {
};
Intent.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Intent.prototype.setFlags = function (property) {
	this.flags = property;
};
module.exports = function (properties) {
	return new Intent(properties);
};