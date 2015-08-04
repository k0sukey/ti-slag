var crypto = require('crypto');
function Database(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'FIELD_TYPE_DOUBLE',
			'FIELD_TYPE_FLOAT',
			'FIELD_TYPE_INT',
			'FIELD_TYPE_STRING',
			'apiName',
			'bubbleParent',
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
	if (__SLAG__properties.FIELD_TYPE_DOUBLE) {
		throw new Error('Ti.Database.FIELD_TYPE_DOUBLE is read only property');
	}
	this.FIELD_TYPE_DOUBLE = 0;
	if (__SLAG__properties.FIELD_TYPE_FLOAT) {
		throw new Error('Ti.Database.FIELD_TYPE_FLOAT is read only property');
	}
	this.FIELD_TYPE_FLOAT = 0;
	if (__SLAG__properties.FIELD_TYPE_INT) {
		throw new Error('Ti.Database.FIELD_TYPE_INT is read only property');
	}
	this.FIELD_TYPE_INT = 0;
	if (__SLAG__properties.FIELD_TYPE_STRING) {
		throw new Error('Ti.Database.FIELD_TYPE_STRING is read only property');
	}
	this.FIELD_TYPE_STRING = 0;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.Database.apiName is read only property');
	}
	this.apiName = 'Ti.Database';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.id = __SLAG__properties.id || '';
	return this;
}
Database.prototype.addEventListener = function () {
};
Database.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Database.prototype.fireEvent = function () {
};
Database.prototype.getApiName = function () {
	return this.apiName;
};
Database.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Database.prototype.install = function () {
	return {};
};
Database.prototype.open = function () {
	return {};
};
Database.prototype.removeEventListener = function () {
};
Database.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
module.exports = function (properties) {
	return new Database(properties);
};