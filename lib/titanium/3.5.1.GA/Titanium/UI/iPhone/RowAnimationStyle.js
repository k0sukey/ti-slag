var crypto = require('crypto');
function RowAnimationStyle(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'BOTTOM',
			'FADE',
			'LEFT',
			'NONE',
			'RIGHT',
			'TOP',
			'apiName',
			'bubbleParent',
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
	if (__SLAG__properties.BOTTOM) {
		throw new Error('Ti.UI.iPhone.RowAnimationStyle.BOTTOM is read only property');
	}
	this.BOTTOM = 0;
	if (__SLAG__properties.FADE) {
		throw new Error('Ti.UI.iPhone.RowAnimationStyle.FADE is read only property');
	}
	this.FADE = 0;
	if (__SLAG__properties.LEFT) {
		throw new Error('Ti.UI.iPhone.RowAnimationStyle.LEFT is read only property');
	}
	this.LEFT = 0;
	if (__SLAG__properties.NONE) {
		throw new Error('Ti.UI.iPhone.RowAnimationStyle.NONE is read only property');
	}
	this.NONE = 0;
	if (__SLAG__properties.RIGHT) {
		throw new Error('Ti.UI.iPhone.RowAnimationStyle.RIGHT is read only property');
	}
	this.RIGHT = 0;
	if (__SLAG__properties.TOP) {
		throw new Error('Ti.UI.iPhone.RowAnimationStyle.TOP is read only property');
	}
	this.TOP = 0;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.iPhone.RowAnimationStyle.apiName is read only property');
	}
	this.apiName = 'Ti.UI.iPhone.RowAnimationStyle';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.id = __SLAG__properties.id || '';
	return this;
}
RowAnimationStyle.prototype.addEventListener = function () {
};
RowAnimationStyle.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
RowAnimationStyle.prototype.fireEvent = function () {
};
RowAnimationStyle.prototype.getApiName = function () {
	return this.apiName;
};
RowAnimationStyle.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
RowAnimationStyle.prototype.removeEventListener = function () {
};
RowAnimationStyle.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
module.exports = function (properties) {
	return new RowAnimationStyle(properties);
};