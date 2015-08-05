var crypto = require('crypto');
function R(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'anim',
			'array',
			'attr',
			'color',
			'dimen',
			'drawable',
			'id',
			'integer',
			'layout',
			'string',
			'style',
			'styleable',
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
		throw new Error('Ti.Android.R.apiName is read only property');
	}
	this.apiName = 'Ti.Android.R';
	this.lifecycleContainer = __SLAG_PROPERTIES.lifecycleContainer || {};
	if (__SLAG_PROPERTIES.anim) {
		throw new Error('Ti.Android.R.anim is read only property');
	}
	this.anim = {};
	if (__SLAG_PROPERTIES.array) {
		throw new Error('Ti.Android.R.array is read only property');
	}
	this.array = {};
	if (__SLAG_PROPERTIES.attr) {
		throw new Error('Ti.Android.R.attr is read only property');
	}
	this.attr = {};
	if (__SLAG_PROPERTIES.color) {
		throw new Error('Ti.Android.R.color is read only property');
	}
	this.color = {};
	if (__SLAG_PROPERTIES.dimen) {
		throw new Error('Ti.Android.R.dimen is read only property');
	}
	this.dimen = {};
	if (__SLAG_PROPERTIES.drawable) {
		throw new Error('Ti.Android.R.drawable is read only property');
	}
	this.drawable = {};
	if (__SLAG_PROPERTIES.id) {
		throw new Error('Ti.Android.R.id is read only property');
	}
	this.id = {};
	if (__SLAG_PROPERTIES.integer) {
		throw new Error('Ti.Android.R.integer is read only property');
	}
	this.integer = {};
	if (__SLAG_PROPERTIES.layout) {
		throw new Error('Ti.Android.R.layout is read only property');
	}
	this.layout = {};
	if (__SLAG_PROPERTIES.string) {
		throw new Error('Ti.Android.R.string is read only property');
	}
	this.string = {};
	if (__SLAG_PROPERTIES.style) {
		throw new Error('Ti.Android.R.style is read only property');
	}
	this.style = {};
	if (__SLAG_PROPERTIES.styleable) {
		throw new Error('Ti.Android.R.styleable is read only property');
	}
	this.styleable = {};
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
R.prototype.addEventListener = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
R.prototype.removeEventListener = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
R.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
R.prototype.fireEvent = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
R.prototype.getBubbleParent = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
R.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
R.prototype.getApiName = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
R.prototype.getLifecycleContainer = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lifecycleContainer;
};
R.prototype.setLifecycleContainer = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.lifecycleContainer = __SLAG__PROPERTY;
};
module.exports = function (properties) {
	return new R(properties);
};