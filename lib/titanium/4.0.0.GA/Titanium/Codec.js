var crypto = require('crypto');
function Codec(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'BIG_ENDIAN',
			'CHARSET_ASCII',
			'CHARSET_ISO_LATIN_1',
			'CHARSET_UTF16',
			'CHARSET_UTF16BE',
			'CHARSET_UTF16LE',
			'CHARSET_UTF8',
			'LITTLE_ENDIAN',
			'TYPE_BYTE',
			'TYPE_DOUBLE',
			'TYPE_FLOAT',
			'TYPE_INT',
			'TYPE_LONG',
			'TYPE_SHORT',
			'apiName',
			'bubbleParent',
			'lifecycleContainer',
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
	if (__SLAG__properties.BIG_ENDIAN) {
		throw new Error('Ti.Codec.BIG_ENDIAN is read only property');
	}
	this.BIG_ENDIAN = 0;
	if (__SLAG__properties.CHARSET_ASCII) {
		throw new Error('Ti.Codec.CHARSET_ASCII is read only property');
	}
	this.CHARSET_ASCII = '';
	if (__SLAG__properties.CHARSET_ISO_LATIN_1) {
		throw new Error('Ti.Codec.CHARSET_ISO_LATIN_1 is read only property');
	}
	this.CHARSET_ISO_LATIN_1 = '';
	if (__SLAG__properties.CHARSET_UTF16) {
		throw new Error('Ti.Codec.CHARSET_UTF16 is read only property');
	}
	this.CHARSET_UTF16 = '';
	if (__SLAG__properties.CHARSET_UTF16BE) {
		throw new Error('Ti.Codec.CHARSET_UTF16BE is read only property');
	}
	this.CHARSET_UTF16BE = '';
	if (__SLAG__properties.CHARSET_UTF16LE) {
		throw new Error('Ti.Codec.CHARSET_UTF16LE is read only property');
	}
	this.CHARSET_UTF16LE = '';
	if (__SLAG__properties.CHARSET_UTF8) {
		throw new Error('Ti.Codec.CHARSET_UTF8 is read only property');
	}
	this.CHARSET_UTF8 = '';
	if (__SLAG__properties.LITTLE_ENDIAN) {
		throw new Error('Ti.Codec.LITTLE_ENDIAN is read only property');
	}
	this.LITTLE_ENDIAN = 0;
	if (__SLAG__properties.TYPE_BYTE) {
		throw new Error('Ti.Codec.TYPE_BYTE is read only property');
	}
	this.TYPE_BYTE = '';
	if (__SLAG__properties.TYPE_DOUBLE) {
		throw new Error('Ti.Codec.TYPE_DOUBLE is read only property');
	}
	this.TYPE_DOUBLE = '';
	if (__SLAG__properties.TYPE_FLOAT) {
		throw new Error('Ti.Codec.TYPE_FLOAT is read only property');
	}
	this.TYPE_FLOAT = '';
	if (__SLAG__properties.TYPE_INT) {
		throw new Error('Ti.Codec.TYPE_INT is read only property');
	}
	this.TYPE_INT = '';
	if (__SLAG__properties.TYPE_LONG) {
		throw new Error('Ti.Codec.TYPE_LONG is read only property');
	}
	this.TYPE_LONG = '';
	if (__SLAG__properties.TYPE_SHORT) {
		throw new Error('Ti.Codec.TYPE_SHORT is read only property');
	}
	this.TYPE_SHORT = '';
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.Codec.apiName is read only property');
	}
	this.apiName = 'Ti.Codec';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.id = __SLAG__properties.id || '';
	return this;
}
Codec.prototype.addEventListener = function () {
};
Codec.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Codec.prototype.decodeNumber = function () {
	return 0;
};
Codec.prototype.decodeString = function () {
	return '';
};
Codec.prototype.encodeNumber = function () {
	return 0;
};
Codec.prototype.encodeString = function () {
	return 0;
};
Codec.prototype.fireEvent = function () {
};
Codec.prototype.getApiName = function () {
	return this.apiName;
};
Codec.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Codec.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Codec.prototype.getNativeByteOrder = function () {
	return 0;
};
Codec.prototype.removeEventListener = function () {
};
Codec.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Codec.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
module.exports = function (properties) {
	return new Codec(properties);
};