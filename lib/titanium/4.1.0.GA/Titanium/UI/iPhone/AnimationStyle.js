var crypto = require('crypto');
function AnimationStyle(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'CURL_DOWN',
			'CURL_UP',
			'FLIP_FROM_LEFT',
			'FLIP_FROM_RIGHT',
			'NONE',
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
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.iPhone.AnimationStyle.apiName is read only property');
	}
	this.apiName = 'Ti.UI.iPhone.AnimationStyle';
	if (__SLAG__properties.CURL_DOWN) {
		throw new Error('Ti.UI.iPhone.AnimationStyle.CURL_DOWN is read only property');
	}
	this.CURL_DOWN = 0;
	if (__SLAG__properties.CURL_UP) {
		throw new Error('Ti.UI.iPhone.AnimationStyle.CURL_UP is read only property');
	}
	this.CURL_UP = 0;
	if (__SLAG__properties.FLIP_FROM_LEFT) {
		throw new Error('Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT is read only property');
	}
	this.FLIP_FROM_LEFT = 0;
	if (__SLAG__properties.FLIP_FROM_RIGHT) {
		throw new Error('Ti.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT is read only property');
	}
	this.FLIP_FROM_RIGHT = 0;
	if (__SLAG__properties.NONE) {
		throw new Error('Ti.UI.iPhone.AnimationStyle.NONE is read only property');
	}
	this.NONE = 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
AnimationStyle.prototype.addEventListener = function () {
};
AnimationStyle.prototype.removeEventListener = function () {
};
AnimationStyle.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
AnimationStyle.prototype.fireEvent = function () {
};
AnimationStyle.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
AnimationStyle.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
AnimationStyle.prototype.getApiName = function () {
	return this.apiName;
};
module.exports = function (properties) {
	return new AnimationStyle(properties);
};