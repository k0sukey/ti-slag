var crypto = require('crypto');
function URLSession(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'apiName',
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
		throw new Error('Modules.URLSession.apiName is read only property');
	}
	this.apiName = 'Modules.URLSession';
	this.id = __SLAG__properties.id || '';
	return this;
}
URLSession.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
URLSession.prototype.createURLSessionBackgroundConfiguration = function (params) {
	var URLSessionBackgroundConfiguration = require('./URLSession/URLSessionBackgroundConfiguration');
	return URLSessionBackgroundConfiguration(params);
};
URLSession.prototype.createURLSession = function (params) {
	var URLSession = require('./URLSession/URLSession');
	return URLSession(params);
};
URLSession.prototype.finishTasksAndInvalidate = function () {
};
URLSession.prototype.invalidateAndCancel = function () {
};
URLSession.prototype.backgroundDownloadTaskWithURL = function () {
	return '';
};
URLSession.prototype.getApiName = function () {
	return this.apiName;
};
module.exports = function (properties) {
	return new URLSession(properties);
};