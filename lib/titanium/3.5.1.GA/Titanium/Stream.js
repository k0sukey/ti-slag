var crypto = require('crypto');
function Stream(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'MODE_APPEND',
			'MODE_READ',
			'MODE_WRITE',
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
	if (__SLAG_PROPERTIES.MODE_APPEND) {
		throw new Error('Ti.Stream.MODE_APPEND is read only property');
	}
	if ([
			'android',
			'ios',
			'blackberry'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MODE_APPEND = undefined;
	} else {
		this.MODE_APPEND = 0;
	}
	if (__SLAG_PROPERTIES.MODE_READ) {
		throw new Error('Ti.Stream.MODE_READ is read only property');
	}
	if ([
			'android',
			'ios',
			'blackberry'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MODE_READ = undefined;
	} else {
		this.MODE_READ = 0;
	}
	if (__SLAG_PROPERTIES.MODE_WRITE) {
		throw new Error('Ti.Stream.MODE_WRITE is read only property');
	}
	if ([
			'android',
			'ios',
			'blackberry'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MODE_WRITE = undefined;
	} else {
		this.MODE_WRITE = 0;
	}
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.Stream.apiName is read only property');
	}
	this.apiName = 'Ti.Stream';
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.bubbleParent = undefined;
	} else {
		this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
Stream.prototype.addEventListener = function () {
	if ([
			'android',
			'ios',
			'blackberry'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Stream.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
Stream.prototype.createStream = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios',
			'blackberry'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var Stream = require('./Stream/Stream');
	return Stream(__SLAG_PROPERTY);
};
Stream.prototype.fireEvent = function () {
	if ([
			'android',
			'ios',
			'blackberry'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Stream.prototype.getApiName = function () {
	if ([
			'android',
			'ios',
			'blackberry'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
Stream.prototype.getBubbleParent = function () {
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
Stream.prototype.pump = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Stream.prototype.read = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Stream.prototype.readAll = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
Stream.prototype.removeEventListener = function () {
	if ([
			'android',
			'ios',
			'blackberry'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Stream.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
Stream.prototype.write = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Stream.prototype.writeStream = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
module.exports = function (properties) {
	return new Stream(properties);
};