function Titanium(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.version = properties.version || '';
	this.buildDate = properties.buildDate || '';
	this.buildHash = properties.buildHash || '';
	this.userAgent = properties.userAgent || '';
	return this;
}
Titanium.prototype.addEventListener = function () {
};
Titanium.prototype.removeEventListener = function () {
};
Titanium.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Titanium.prototype.fireEvent = function () {
};
Titanium.prototype.include = function () {
	throw new Error('Ti.include was deprecated, since 3.3.0');
};
Titanium.prototype.createBuffer = function (params) {
	var Buffer = require('./Titanium/Buffer');
	return Buffer(params);
};
Titanium.prototype.createProxy = function (params) {
	var Proxy = require('./Titanium/Proxy');
	return Proxy(params);
};
Titanium.prototype.getBubbleParent = function () {
	return true;
};
Titanium.prototype.setBubbleParent = function () {
};
Titanium.prototype.getApiName = function () {
	return '';
};
Titanium.prototype.getLifecycleContainer = function () {
	return {};
};
Titanium.prototype.setLifecycleContainer = function () {
};
Titanium.prototype.getVersion = function () {
	return '';
};
Titanium.prototype.getBuildDate = function () {
	return '';
};
Titanium.prototype.getBuildHash = function () {
	return '';
};
Titanium.prototype.getUserAgent = function () {
	return '';
};
Titanium.prototype.setUserAgent = function () {
};
module.exports = function (properties) {
	return new Titanium(properties);
};