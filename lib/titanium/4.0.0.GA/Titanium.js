function Titanium(properties) {
	properties = properties || {};
	this.apiName = 'Ti';
	this.bubbleParent = properties.bubbleParent || true;
	this.buildDate = properties.buildDate || '';
	this.buildHash = properties.buildHash || '';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.userAgent = properties.userAgent || '';
	this.version = properties.version || '';
	return this;
}
Titanium.prototype.addEventListener = function () {
};
Titanium.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Titanium.prototype.createBuffer = function (params) {
	var Buffer = require('./Titanium/Buffer');
	return Buffer(params);
};
Titanium.prototype.fireEvent = function () {
};
Titanium.prototype.getApiName = function () {
	return '';
};
Titanium.prototype.getBubbleParent = function () {
	return true;
};
Titanium.prototype.getBuildDate = function () {
	return '';
};
Titanium.prototype.getBuildHash = function () {
	return '';
};
Titanium.prototype.getLifecycleContainer = function () {
	return {};
};
Titanium.prototype.getUserAgent = function () {
	return '';
};
Titanium.prototype.getVersion = function () {
	return '';
};
Titanium.prototype.include = function () {
	throw new Error('Ti.include was deprecated, since 3.3.0');
};
Titanium.prototype.removeEventListener = function () {
};
Titanium.prototype.setBubbleParent = function () {
};
Titanium.prototype.setLifecycleContainer = function () {
};
Titanium.prototype.setUserAgent = function () {
};
module.exports = function (properties) {
	return new Titanium(properties);
};