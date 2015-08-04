var crypto = require('crypto');
function DB(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'apiName',
			'bubbleParent',
			'file',
			'lastInsertRowId',
			'name',
			'rowsAffected',
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
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.Database.DB.apiName is read only property');
	}
	this.apiName = 'Ti.Database.DB';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.file) {
		throw new Error('Ti.Database.DB.file is read only property');
	}
	this.file = {};
	this.lastInsertRowId = __SLAG__properties.lastInsertRowId || 0;
	this.name = __SLAG__properties.name || '';
	this.rowsAffected = __SLAG__properties.rowsAffected || 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
DB.prototype.addEventListener = function () {
};
DB.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
DB.prototype.close = function () {
};
DB.prototype.execute = function () {
	return {};
};
DB.prototype.fireEvent = function () {
};
DB.prototype.getApiName = function () {
	return this.apiName;
};
DB.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
DB.prototype.getFile = function () {
	return this.file;
};
DB.prototype.getLastInsertRowId = function () {
	return this.lastInsertRowId;
};
DB.prototype.getName = function () {
	return this.name;
};
DB.prototype.getRowsAffected = function () {
	return this.rowsAffected;
};
DB.prototype.remove = function () {
};
DB.prototype.removeEventListener = function () {
};
DB.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
DB.prototype.setLastInsertRowId = function (property) {
	this.lastInsertRowId = property;
};
DB.prototype.setName = function (property) {
	this.name = property;
};
DB.prototype.setRowsAffected = function (property) {
	this.rowsAffected = property;
};
module.exports = function (properties) {
	return new DB(properties);
};