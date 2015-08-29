var crypto = require('crypto');
function AnimationStyle(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'bubbleParent',
			'apiName',
			'CURL_DOWN',
			'CURL_UP',
			'FLIP_FROM_LEFT',
			'FLIP_FROM_RIGHT',
			'NONE',
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
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.bubbleParent = undefined;
	} else {
		this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	}
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.UI.iPhone.AnimationStyle.apiName is read only property');
	}
	this.apiName = 'Ti.UI.iPhone.AnimationStyle';
	if (__SLAG_PROPERTIES.CURL_DOWN) {
		throw new Error('Ti.UI.iPhone.AnimationStyle.CURL_DOWN is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CURL_DOWN = undefined;
	} else {
		this.CURL_DOWN = 0;
	}
	if (__SLAG_PROPERTIES.CURL_UP) {
		throw new Error('Ti.UI.iPhone.AnimationStyle.CURL_UP is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CURL_UP = undefined;
	} else {
		this.CURL_UP = 0;
	}
	if (__SLAG_PROPERTIES.FLIP_FROM_LEFT) {
		throw new Error('Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FLIP_FROM_LEFT = undefined;
	} else {
		this.FLIP_FROM_LEFT = 0;
	}
	if (__SLAG_PROPERTIES.FLIP_FROM_RIGHT) {
		throw new Error('Ti.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.FLIP_FROM_RIGHT = undefined;
	} else {
		this.FLIP_FROM_RIGHT = 0;
	}
	if (__SLAG_PROPERTIES.NONE) {
		throw new Error('Ti.UI.iPhone.AnimationStyle.NONE is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.NONE = undefined;
	} else {
		this.NONE = 0;
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
AnimationStyle.prototype.addEventListener = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
AnimationStyle.prototype.removeEventListener = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
AnimationStyle.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
AnimationStyle.prototype.fireEvent = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
AnimationStyle.prototype.getBubbleParent = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
AnimationStyle.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
AnimationStyle.prototype.getApiName = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
module.exports = function (properties) {
	return new AnimationStyle(properties);
};