var crypto = require('crypto');
function Codec(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
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
	if (__SLAG_PROPERTIES.BIG_ENDIAN) {
		throw new Error('Ti.Codec.BIG_ENDIAN is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.BIG_ENDIAN = undefined;
	} else {
		this.BIG_ENDIAN = 0;
	}
	if (__SLAG_PROPERTIES.CHARSET_ASCII) {
		throw new Error('Ti.Codec.CHARSET_ASCII is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CHARSET_ASCII = undefined;
	} else {
		this.CHARSET_ASCII = '';
	}
	if (__SLAG_PROPERTIES.CHARSET_ISO_LATIN_1) {
		throw new Error('Ti.Codec.CHARSET_ISO_LATIN_1 is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CHARSET_ISO_LATIN_1 = undefined;
	} else {
		this.CHARSET_ISO_LATIN_1 = '';
	}
	if (__SLAG_PROPERTIES.CHARSET_UTF16) {
		throw new Error('Ti.Codec.CHARSET_UTF16 is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CHARSET_UTF16 = undefined;
	} else {
		this.CHARSET_UTF16 = '';
	}
	if (__SLAG_PROPERTIES.CHARSET_UTF16BE) {
		throw new Error('Ti.Codec.CHARSET_UTF16BE is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CHARSET_UTF16BE = undefined;
	} else {
		this.CHARSET_UTF16BE = '';
	}
	if (__SLAG_PROPERTIES.CHARSET_UTF16LE) {
		throw new Error('Ti.Codec.CHARSET_UTF16LE is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CHARSET_UTF16LE = undefined;
	} else {
		this.CHARSET_UTF16LE = '';
	}
	if (__SLAG_PROPERTIES.CHARSET_UTF8) {
		throw new Error('Ti.Codec.CHARSET_UTF8 is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.CHARSET_UTF8 = undefined;
	} else {
		this.CHARSET_UTF8 = '';
	}
	if (__SLAG_PROPERTIES.LITTLE_ENDIAN) {
		throw new Error('Ti.Codec.LITTLE_ENDIAN is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.LITTLE_ENDIAN = undefined;
	} else {
		this.LITTLE_ENDIAN = 0;
	}
	if (__SLAG_PROPERTIES.TYPE_BYTE) {
		throw new Error('Ti.Codec.TYPE_BYTE is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.TYPE_BYTE = undefined;
	} else {
		this.TYPE_BYTE = '';
	}
	if (__SLAG_PROPERTIES.TYPE_DOUBLE) {
		throw new Error('Ti.Codec.TYPE_DOUBLE is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.TYPE_DOUBLE = undefined;
	} else {
		this.TYPE_DOUBLE = '';
	}
	if (__SLAG_PROPERTIES.TYPE_FLOAT) {
		throw new Error('Ti.Codec.TYPE_FLOAT is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.TYPE_FLOAT = undefined;
	} else {
		this.TYPE_FLOAT = '';
	}
	if (__SLAG_PROPERTIES.TYPE_INT) {
		throw new Error('Ti.Codec.TYPE_INT is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.TYPE_INT = undefined;
	} else {
		this.TYPE_INT = '';
	}
	if (__SLAG_PROPERTIES.TYPE_LONG) {
		throw new Error('Ti.Codec.TYPE_LONG is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.TYPE_LONG = undefined;
	} else {
		this.TYPE_LONG = '';
	}
	if (__SLAG_PROPERTIES.TYPE_SHORT) {
		throw new Error('Ti.Codec.TYPE_SHORT is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.TYPE_SHORT = undefined;
	} else {
		this.TYPE_SHORT = '';
	}
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.Codec.apiName is read only property');
	}
	this.apiName = 'Ti.Codec';
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.bubbleParent = undefined;
	} else {
		this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.lifecycleContainer = undefined;
	} else {
		this.lifecycleContainer = __SLAG_PROPERTIES.lifecycleContainer || {};
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
Codec.prototype.addEventListener = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Codec.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
Codec.prototype.decodeNumber = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return 0;
};
Codec.prototype.decodeString = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return '';
};
Codec.prototype.encodeNumber = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return 0;
};
Codec.prototype.encodeString = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return 0;
};
Codec.prototype.fireEvent = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Codec.prototype.getApiName = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
Codec.prototype.getBubbleParent = function () {
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
Codec.prototype.getLifecycleContainer = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lifecycleContainer;
};
Codec.prototype.getNativeByteOrder = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return 0;
};
Codec.prototype.removeEventListener = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Codec.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
Codec.prototype.setLifecycleContainer = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.lifecycleContainer = __SLAG__PROPERTY;
};
module.exports = function (properties) {
	return new Codec(properties);
};