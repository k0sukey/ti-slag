var crypto = require('crypto');
function Utils(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'apiName',
			'bubbleParent',
			'lifecycleContainer',
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
		throw new Error('Ti.Utils.apiName is read only property');
	}
	this.apiName = 'Ti.Utils';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.id = __SLAG__properties.id || '';
	return this;
}
Utils.prototype.addEventListener = function () {
};
Utils.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Utils.prototype.base64decode = function () {
	return {};
};
Utils.prototype.base64encode = function () {
	return {};
};
Utils.prototype.fireEvent = function () {
};
Utils.prototype.getApiName = function () {
	return this.apiName;
};
Utils.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Utils.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Utils.prototype.md5HexDigest = function () {
	return '';
};
Utils.prototype.removeEventListener = function () {
};
Utils.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Utils.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
Utils.prototype.sha1 = function () {
	return '';
};
Utils.prototype.sha256 = function () {
	return '';
};
module.exports = function (properties) {
	return new Utils(properties);
};