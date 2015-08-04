var crypto = require('crypto');
function API(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
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
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.API.apiName is read only property');
	}
	this.apiName = 'Ti.API';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.id = __SLAG__properties.id || '';
	return this;
}
API.prototype.addEventListener = function () {
};
API.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
API.prototype.debug = function (params) {
	console.info(params);
};
API.prototype.error = function (params) {
	console.error(params);
};
API.prototype.fireEvent = function () {
};
API.prototype.getApiName = function () {
	return this.apiName;
};
API.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
API.prototype.info = function (params) {
	console.info(params);
};
API.prototype.log = function (params) {
	console.log(params);
};
API.prototype.removeEventListener = function () {
};
API.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
API.prototype.timestamp = function () {
};
API.prototype.trace = function (params) {
	console.trace(params);
};
API.prototype.warn = function (params) {
	console.warn(params);
};
module.exports = function (properties) {
	return new API(properties);
};