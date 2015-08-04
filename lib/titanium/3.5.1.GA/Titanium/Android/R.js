var crypto = require('crypto');
function R(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'anim',
			'apiName',
			'array',
			'attr',
			'bubbleParent',
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
	if (__SLAG__properties.anim) {
		throw new Error('Ti.Android.R.anim is read only property');
	}
	this.anim = {};
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.Android.R.apiName is read only property');
	}
	this.apiName = 'Ti.Android.R';
	if (__SLAG__properties.array) {
		throw new Error('Ti.Android.R.array is read only property');
	}
	this.array = {};
	if (__SLAG__properties.attr) {
		throw new Error('Ti.Android.R.attr is read only property');
	}
	this.attr = {};
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.color) {
		throw new Error('Ti.Android.R.color is read only property');
	}
	this.color = {};
	if (__SLAG__properties.dimen) {
		throw new Error('Ti.Android.R.dimen is read only property');
	}
	this.dimen = {};
	if (__SLAG__properties.drawable) {
		throw new Error('Ti.Android.R.drawable is read only property');
	}
	this.drawable = {};
	if (__SLAG__properties.id) {
		throw new Error('Ti.Android.R.id is read only property');
	}
	this.id = {};
	if (__SLAG__properties.integer) {
		throw new Error('Ti.Android.R.integer is read only property');
	}
	this.integer = {};
	if (__SLAG__properties.layout) {
		throw new Error('Ti.Android.R.layout is read only property');
	}
	this.layout = {};
	if (__SLAG__properties.string) {
		throw new Error('Ti.Android.R.string is read only property');
	}
	this.string = {};
	if (__SLAG__properties.style) {
		throw new Error('Ti.Android.R.style is read only property');
	}
	this.style = {};
	if (__SLAG__properties.styleable) {
		throw new Error('Ti.Android.R.styleable is read only property');
	}
	this.styleable = {};
	this.id = __SLAG__properties.id || '';
	return this;
}
R.prototype.addEventListener = function () {
};
R.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
R.prototype.fireEvent = function () {
};
R.prototype.getApiName = function () {
	return this.apiName;
};
R.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
R.prototype.removeEventListener = function () {
};
R.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
module.exports = function (properties) {
	return new R(properties);
};