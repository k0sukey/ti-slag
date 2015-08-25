var crypto = require('crypto');
function ResultSet(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'apiName',
			'bubbleParent',
			'fieldCount',
			'rowCount',
			'validRow',
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
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.Database.ResultSet.apiName is read only property');
	}
	this.apiName = 'Ti.Database.ResultSet';
	this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	if (__SLAG_PROPERTIES.fieldCount) {
		throw new Error('Ti.Database.ResultSet.fieldCount is read only property');
	}
	this.fieldCount = 0;
	if (__SLAG_PROPERTIES.rowCount) {
		throw new Error('Ti.Database.ResultSet.rowCount is read only property');
	}
	this.rowCount = 0;
	if (__SLAG_PROPERTIES.validRow) {
		throw new Error('Ti.Database.ResultSet.validRow is read only property');
	}
	this.validRow = true;
	this.__SLAG_SIMULATE_IS_VALID_ROW = true;
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
ResultSet.prototype.addEventListener = function () {
	if ([
			'android',
			'ios',
			'blackberry'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
ResultSet.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
ResultSet.prototype.close = function () {
	if ([
			'android',
			'ios',
			'blackberry'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
ResultSet.prototype.field = function () {
	if ([
			'android',
			'ios',
			'blackberry'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return '';
};
ResultSet.prototype.fieldByName = function () {
	if ([
			'android',
			'ios',
			'blackberry'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return '';
};
ResultSet.prototype.fieldCount = function () {
	throw new Error('Ti.Database.ResultSet.fieldCount was deprecated, since 3.3.0');
};
ResultSet.prototype.fieldName = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return '';
};
ResultSet.prototype.fireEvent = function () {
	if ([
			'android',
			'ios',
			'blackberry'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
ResultSet.prototype.getApiName = function () {
	if ([
			'android',
			'ios',
			'blackberry'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
ResultSet.prototype.getBubbleParent = function () {
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
ResultSet.prototype.getFieldCount = function () {
	if ([
			'android',
			'blackberry',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.fieldCount;
};
ResultSet.prototype.getFieldName = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return '';
};
ResultSet.prototype.getRowCount = function () {
	if ([
			'android',
			'ios',
			'blackberry'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.rowCount;
};
ResultSet.prototype.getValidRow = function () {
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.validRow;
};
ResultSet.prototype.isValidRow = function () {
	if ([
			'android',
			'ios',
			'blackberry'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var __SLAG_SIMULATE_IS_VALID_ROW = this.__SLAG_SIMULATE_IS_VALID_ROW;
	this.__SLAG_SIMULATE_IS_VALID_ROW = !this.__SLAG_SIMULATE_IS_VALID_ROW;
	return __SLAG_SIMULATE_IS_VALID_ROW;
};
ResultSet.prototype.next = function () {
	if ([
			'android',
			'ios',
			'blackberry'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
ResultSet.prototype.removeEventListener = function () {
	if ([
			'android',
			'ios',
			'blackberry'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
ResultSet.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
module.exports = function (properties) {
	return new ResultSet(properties);
};