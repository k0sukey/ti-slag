var crypto = require('crypto');
function StatusBar(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'ANIMATION_STYLE_NONE',
			'ANIMATION_STYLE_SLIDE',
			'ANIMATION_STYLE_FADE',
			'DEFAULT',
			'GRAY',
			'GREY',
			'LIGHT_CONTENT',
			'OPAQUE_BLACK',
			'TRANSLUCENT_BLACK',
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
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.UI.iPhone.StatusBar.apiName is read only property');
	}
	this.apiName = 'Ti.UI.iPhone.StatusBar';
	if (__SLAG__properties.ANIMATION_STYLE_NONE) {
		throw new Error('Ti.UI.iPhone.StatusBar.ANIMATION_STYLE_NONE is read only property');
	}
	this.ANIMATION_STYLE_NONE = 0;
	if (__SLAG__properties.ANIMATION_STYLE_SLIDE) {
		throw new Error('Ti.UI.iPhone.StatusBar.ANIMATION_STYLE_SLIDE is read only property');
	}
	this.ANIMATION_STYLE_SLIDE = 0;
	if (__SLAG__properties.ANIMATION_STYLE_FADE) {
		throw new Error('Ti.UI.iPhone.StatusBar.ANIMATION_STYLE_FADE is read only property');
	}
	this.ANIMATION_STYLE_FADE = 0;
	if (__SLAG__properties.DEFAULT) {
		throw new Error('Ti.UI.iPhone.StatusBar.DEFAULT is read only property');
	}
	this.DEFAULT = 0;
	if (__SLAG__properties.GRAY) {
		throw new Error('Ti.UI.iPhone.StatusBar.GRAY is read only property');
	}
	this.GRAY = 0;
	if (__SLAG__properties.GREY) {
		throw new Error('Ti.UI.iPhone.StatusBar.GREY is read only property');
	}
	this.GREY = 0;
	if (__SLAG__properties.LIGHT_CONTENT) {
		throw new Error('Ti.UI.iPhone.StatusBar.LIGHT_CONTENT is read only property');
	}
	this.LIGHT_CONTENT = 0;
	if (__SLAG__properties.OPAQUE_BLACK) {
		throw new Error('Ti.UI.iPhone.StatusBar.OPAQUE_BLACK is read only property');
	}
	this.OPAQUE_BLACK = 0;
	if (__SLAG__properties.TRANSLUCENT_BLACK) {
		throw new Error('Ti.UI.iPhone.StatusBar.TRANSLUCENT_BLACK is read only property');
	}
	this.TRANSLUCENT_BLACK = 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
StatusBar.prototype.addEventListener = function () {
};
StatusBar.prototype.removeEventListener = function () {
};
StatusBar.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
StatusBar.prototype.fireEvent = function () {
};
StatusBar.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
StatusBar.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
StatusBar.prototype.getApiName = function () {
	return this.apiName;
};
module.exports = function (properties) {
	return new StatusBar(properties);
};