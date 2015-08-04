var crypto = require('crypto');
function BonjourBrowser(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'apiName',
			'bubbleParent',
			'domain',
			'isSearching',
			'serviceType',
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
		throw new Error('Ti.Network.BonjourBrowser.apiName is read only property');
	}
	this.apiName = 'Ti.Network.BonjourBrowser';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.domain = __SLAG__properties.domain || '';
	this.isSearching = __SLAG__properties.isSearching || true;
	this.serviceType = __SLAG__properties.serviceType || '';
	this.id = __SLAG__properties.id || '';
	return this;
}
BonjourBrowser.prototype.addEventListener = function () {
};
BonjourBrowser.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
BonjourBrowser.prototype.fireEvent = function () {
};
BonjourBrowser.prototype.getApiName = function () {
	return this.apiName;
};
BonjourBrowser.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
BonjourBrowser.prototype.getDomain = function () {
	return this.domain;
};
BonjourBrowser.prototype.getIsSearching = function () {
	return this.isSearching;
};
BonjourBrowser.prototype.getServiceType = function () {
	return this.serviceType;
};
BonjourBrowser.prototype.removeEventListener = function () {
};
BonjourBrowser.prototype.search = function () {
};
BonjourBrowser.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
BonjourBrowser.prototype.setDomain = function (property) {
	this.domain = property;
};
BonjourBrowser.prototype.setIsSearching = function (property) {
	this.isSearching = property;
};
BonjourBrowser.prototype.setServiceType = function (property) {
	this.serviceType = property;
};
BonjourBrowser.prototype.stopSearch = function () {
};
module.exports = function (properties) {
	return new BonjourBrowser(properties);
};