var crypto = require('crypto');
function RowAnimationStyle(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
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
	if (__SLAG_PROPERTIES.BOTTOM) {
		throw new Error('Ti.UI.iPhone.RowAnimationStyle.BOTTOM is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.BOTTOM = undefined;
	} else {
		this.BOTTOM = 0;
	}
	if (__SLAG_PROPERTIES.FADE) {
		throw new Error('Ti.UI.iPhone.RowAnimationStyle.FADE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FADE = undefined;
	} else {
		this.FADE = 0;
	}
	if (__SLAG_PROPERTIES.LEFT) {
		throw new Error('Ti.UI.iPhone.RowAnimationStyle.LEFT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.LEFT = undefined;
	} else {
		this.LEFT = 0;
	}
	if (__SLAG_PROPERTIES.NONE) {
		throw new Error('Ti.UI.iPhone.RowAnimationStyle.NONE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.NONE = undefined;
	} else {
		this.NONE = 0;
	}
	if (__SLAG_PROPERTIES.RIGHT) {
		throw new Error('Ti.UI.iPhone.RowAnimationStyle.RIGHT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.RIGHT = undefined;
	} else {
		this.RIGHT = 0;
	}
	if (__SLAG_PROPERTIES.TOP) {
		throw new Error('Ti.UI.iPhone.RowAnimationStyle.TOP is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.TOP = undefined;
	} else {
		this.TOP = 0;
	}
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.UI.iPhone.RowAnimationStyle.apiName is read only property');
	}
	this.apiName = 'Ti.UI.iPhone.RowAnimationStyle';
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.bubbleParent = undefined;
	} else {
		this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
RowAnimationStyle.prototype.addEventListener = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
RowAnimationStyle.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
RowAnimationStyle.prototype.fireEvent = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
RowAnimationStyle.prototype.getApiName = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
RowAnimationStyle.prototype.getBubbleParent = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
RowAnimationStyle.prototype.removeEventListener = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
RowAnimationStyle.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
module.exports = function (properties) {
	return new RowAnimationStyle(properties);
};