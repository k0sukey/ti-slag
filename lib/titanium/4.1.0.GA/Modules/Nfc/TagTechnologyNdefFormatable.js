var crypto = require('crypto');
function TagTechnologyNdefFormatable(__SLAG__properties) {
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
		throw new Error('Modules.Nfc.TagTechnologyNdefFormatable.apiName is read only property');
	}
	this.apiName = 'Modules.Nfc.TagTechnologyNdefFormatable';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.tag = __SLAG__properties.tag || {};
	this.id = __SLAG__properties.id || '';
	return this;
}
TagTechnologyNdefFormatable.prototype.isValid = function () {
	return true;
};
TagTechnologyNdefFormatable.prototype.close = function () {
};
TagTechnologyNdefFormatable.prototype.connect = function () {
};
TagTechnologyNdefFormatable.prototype.isConnected = function () {
	return true;
};
TagTechnologyNdefFormatable.prototype.format = function () {
};
TagTechnologyNdefFormatable.prototype.formatReadOnly = function () {
};
TagTechnologyNdefFormatable.prototype.getApiName = function () {
	return this.apiName;
};
TagTechnologyNdefFormatable.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
TagTechnologyNdefFormatable.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
TagTechnologyNdefFormatable.prototype.getTag = function () {
	return this.tag;
};
TagTechnologyNdefFormatable.prototype.setTag = function (property) {
	this.tag = property;
};
module.exports = function (properties) {
	return new TagTechnologyNdefFormatable(properties);
};