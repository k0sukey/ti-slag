var crypto = require('crypto');
function ResultSet(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'fieldCount',
			'rowCount',
			'validRow',
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
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.Database.ResultSet.apiName is read only property');
	}
	this.apiName = 'Ti.Database.ResultSet';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	if (__SLAG__properties.fieldCount) {
		throw new Error('Ti.Database.ResultSet.fieldCount is read only property');
	}
	this.fieldCount = 0;
	if (__SLAG__properties.rowCount) {
		throw new Error('Ti.Database.ResultSet.rowCount is read only property');
	}
	this.rowCount = 0;
	if (__SLAG__properties.validRow) {
		throw new Error('Ti.Database.ResultSet.validRow is read only property');
	}
	this.validRow = true;
	this.id = __SLAG__properties.id || '';
	return this;
}
ResultSet.prototype.addEventListener = function () {
};
ResultSet.prototype.removeEventListener = function () {
};
ResultSet.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
ResultSet.prototype.fireEvent = function () {
};
ResultSet.prototype.fieldCount = function () {
	throw new Error('Ti.Database.ResultSet.fieldCount was deprecated, since 3.3.0');
};
ResultSet.prototype.close = function () {
};
ResultSet.prototype.field = function () {
	return '';
};
ResultSet.prototype.fieldByName = function () {
	return '';
};
ResultSet.prototype.fieldName = function () {
	return '';
};
ResultSet.prototype.getFieldName = function () {
	return '';
};
ResultSet.prototype.isValidRow = function () {
	return true;
};
ResultSet.prototype.next = function () {
	return true;
};
ResultSet.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
ResultSet.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
ResultSet.prototype.getApiName = function () {
	return this.apiName;
};
ResultSet.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
ResultSet.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
ResultSet.prototype.getFieldCount = function () {
	return this.fieldCount;
};
ResultSet.prototype.getRowCount = function () {
	return this.rowCount;
};
ResultSet.prototype.getValidRow = function () {
	return this.validRow;
};
module.exports = function (properties) {
	return new ResultSet(properties);
};