var crypto = require('crypto');
function UserDefaults(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'bubbleParent',
			'apiName',
			'suiteName',
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
		throw new Error('Ti.App.iOS.UserDefaults.apiName is read only property');
	}
	this.apiName = 'Ti.App.iOS.UserDefaults';
	this.suiteName = __SLAG__properties.suiteName || '';
	this.id = __SLAG__properties.id || '';
	return this;
}
UserDefaults.prototype.addEventListener = function () {
};
UserDefaults.prototype.removeEventListener = function () {
};
UserDefaults.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
UserDefaults.prototype.fireEvent = function () {
};
UserDefaults.prototype.getBool = function () {
	return true;
};
UserDefaults.prototype.getDouble = function () {
	return 0;
};
UserDefaults.prototype.getInt = function () {
	return 0;
};
UserDefaults.prototype.getList = function () {
	return [];
};
UserDefaults.prototype.getObject = function () {
	return {};
};
UserDefaults.prototype.getString = function () {
	return '';
};
UserDefaults.prototype.hasProperty = function () {
	return true;
};
UserDefaults.prototype.listProperties = function () {
	return [];
};
UserDefaults.prototype.removeProperty = function () {
};
UserDefaults.prototype.setBool = function () {
};
UserDefaults.prototype.setDouble = function () {
};
UserDefaults.prototype.setInt = function () {
};
UserDefaults.prototype.setList = function () {
};
UserDefaults.prototype.setObject = function () {
};
UserDefaults.prototype.setString = function () {
};
UserDefaults.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
UserDefaults.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
UserDefaults.prototype.getApiName = function () {
	return this.apiName;
};
UserDefaults.prototype.getSuiteName = function () {
	return this.suiteName;
};
UserDefaults.prototype.setSuiteName = function (property) {
	this.suiteName = property;
};
module.exports = function (properties) {
	return new UserDefaults(properties);
};