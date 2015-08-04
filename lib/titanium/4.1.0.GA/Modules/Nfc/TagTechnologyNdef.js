var crypto = require('crypto');
function TagTechnologyNdef(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'apiName',
			'lifecycleContainer',
			'tag',
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
		throw new Error('Modules.Nfc.TagTechnologyNdef.apiName is read only property');
	}
	this.apiName = 'Modules.Nfc.TagTechnologyNdef';
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.tag = __SLAG__properties.tag || {};
	this.id = __SLAG__properties.id || '';
	return this;
}
TagTechnologyNdef.prototype.isValid = function () {
	return true;
};
TagTechnologyNdef.prototype.close = function () {
};
TagTechnologyNdef.prototype.connect = function () {
};
TagTechnologyNdef.prototype.isConnected = function () {
	return true;
};
TagTechnologyNdef.prototype.canMakeReadOnly = function () {
	return true;
};
TagTechnologyNdef.prototype.getCachedNdefMessage = function () {
	return {};
};
TagTechnologyNdef.prototype.getMaxSize = function () {
	return 0;
};
TagTechnologyNdef.prototype.getNdefMessage = function () {
	return {};
};
TagTechnologyNdef.prototype.getType = function () {
	return '';
};
TagTechnologyNdef.prototype.isWritable = function () {
	return true;
};
TagTechnologyNdef.prototype.makeReadOnly = function () {
	return true;
};
TagTechnologyNdef.prototype.writeNdefMessage = function () {
};
TagTechnologyNdef.prototype.getApiName = function () {
	return this.apiName;
};
TagTechnologyNdef.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
TagTechnologyNdef.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
TagTechnologyNdef.prototype.getTag = function () {
	return this.tag;
};
TagTechnologyNdef.prototype.setTag = function (property) {
	this.tag = property;
};
module.exports = function (properties) {
	return new TagTechnologyNdef(properties);
};