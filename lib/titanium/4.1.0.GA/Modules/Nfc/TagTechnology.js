var crypto = require('crypto');
function TagTechnology(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'apiName',
			'lifecycleContainer',
			'tag',
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
	if (__SLAG__properties.apiName) {
		throw new Error('Modules.Nfc.TagTechnology.apiName is read only property');
	}
	this.apiName = 'Modules.Nfc.TagTechnology';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.tag = __SLAG__properties.tag || {};
	this.id = __SLAG__properties.id || '';
	return this;
}
TagTechnology.prototype.isValid = function () {
	return true;
};
TagTechnology.prototype.close = function () {
};
TagTechnology.prototype.connect = function () {
};
TagTechnology.prototype.isConnected = function () {
	return true;
};
TagTechnology.prototype.getApiName = function () {
	return this.apiName;
};
TagTechnology.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
TagTechnology.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
TagTechnology.prototype.getTag = function () {
	return this.tag;
};
TagTechnology.prototype.setTag = function (property) {
	this.tag = property;
};
module.exports = function (properties) {
	return new TagTechnology(properties);
};