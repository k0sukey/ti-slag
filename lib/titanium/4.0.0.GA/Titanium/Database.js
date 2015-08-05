var crypto = require('crypto');
function Database(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'FIELD_TYPE_DOUBLE',
			'FIELD_TYPE_FLOAT',
			'FIELD_TYPE_INT',
			'FIELD_TYPE_STRING',
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
	if (__SLAG_PROPERTIES.FIELD_TYPE_DOUBLE) {
		throw new Error('Ti.Database.FIELD_TYPE_DOUBLE is read only property');
	}
	this.FIELD_TYPE_DOUBLE = 0;
	if (__SLAG_PROPERTIES.FIELD_TYPE_FLOAT) {
		throw new Error('Ti.Database.FIELD_TYPE_FLOAT is read only property');
	}
	this.FIELD_TYPE_FLOAT = 0;
	if (__SLAG_PROPERTIES.FIELD_TYPE_INT) {
		throw new Error('Ti.Database.FIELD_TYPE_INT is read only property');
	}
	this.FIELD_TYPE_INT = 0;
	if (__SLAG_PROPERTIES.FIELD_TYPE_STRING) {
		throw new Error('Ti.Database.FIELD_TYPE_STRING is read only property');
	}
	this.FIELD_TYPE_STRING = 0;
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.Database.apiName is read only property');
	}
	this.apiName = 'Ti.Database';
	this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	this.lifecycleContainer = __SLAG_PROPERTIES.lifecycleContainer || {};
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
Database.prototype.addEventListener = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Database.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
Database.prototype.fireEvent = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Database.prototype.getApiName = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
Database.prototype.getBubbleParent = function () {
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
Database.prototype.getLifecycleContainer = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lifecycleContainer;
};
Database.prototype.install = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
Database.prototype.open = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
Database.prototype.removeEventListener = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Database.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
Database.prototype.setLifecycleContainer = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.lifecycleContainer = __SLAG__PROPERTY;
};
module.exports = function (properties) {
	return new Database(properties);
};