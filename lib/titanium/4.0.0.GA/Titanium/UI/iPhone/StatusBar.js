var crypto = require('crypto');
function StatusBar(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'ANIMATION_STYLE_FADE',
			'ANIMATION_STYLE_NONE',
			'ANIMATION_STYLE_SLIDE',
			'DEFAULT',
			'GRAY',
			'GREY',
			'LIGHT_CONTENT',
			'OPAQUE_BLACK',
			'TRANSLUCENT_BLACK',
			'apiName',
			'bubbleParent',
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
	if (__SLAG_PROPERTIES.ANIMATION_STYLE_FADE) {
		throw new Error('Ti.UI.iPhone.StatusBar.ANIMATION_STYLE_FADE is read only property');
	}
	this.ANIMATION_STYLE_FADE = 0;
	if (__SLAG_PROPERTIES.ANIMATION_STYLE_NONE) {
		throw new Error('Ti.UI.iPhone.StatusBar.ANIMATION_STYLE_NONE is read only property');
	}
	this.ANIMATION_STYLE_NONE = 0;
	if (__SLAG_PROPERTIES.ANIMATION_STYLE_SLIDE) {
		throw new Error('Ti.UI.iPhone.StatusBar.ANIMATION_STYLE_SLIDE is read only property');
	}
	this.ANIMATION_STYLE_SLIDE = 0;
	if (__SLAG_PROPERTIES.DEFAULT) {
		throw new Error('Ti.UI.iPhone.StatusBar.DEFAULT is read only property');
	}
	this.DEFAULT = 0;
	if (__SLAG_PROPERTIES.GRAY) {
		throw new Error('Ti.UI.iPhone.StatusBar.GRAY is read only property');
	}
	this.GRAY = 0;
	if (__SLAG_PROPERTIES.GREY) {
		throw new Error('Ti.UI.iPhone.StatusBar.GREY is read only property');
	}
	this.GREY = 0;
	if (__SLAG_PROPERTIES.LIGHT_CONTENT) {
		throw new Error('Ti.UI.iPhone.StatusBar.LIGHT_CONTENT is read only property');
	}
	this.LIGHT_CONTENT = 0;
	if (__SLAG_PROPERTIES.OPAQUE_BLACK) {
		throw new Error('Ti.UI.iPhone.StatusBar.OPAQUE_BLACK is read only property');
	}
	this.OPAQUE_BLACK = 0;
	if (__SLAG_PROPERTIES.TRANSLUCENT_BLACK) {
		throw new Error('Ti.UI.iPhone.StatusBar.TRANSLUCENT_BLACK is read only property');
	}
	this.TRANSLUCENT_BLACK = 0;
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.UI.iPhone.StatusBar.apiName is read only property');
	}
	this.apiName = 'Ti.UI.iPhone.StatusBar';
	this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
StatusBar.prototype.addEventListener = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
StatusBar.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
StatusBar.prototype.fireEvent = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
StatusBar.prototype.getApiName = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
StatusBar.prototype.getBubbleParent = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
StatusBar.prototype.removeEventListener = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
StatusBar.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
module.exports = function (properties) {
	return new StatusBar(properties);
};