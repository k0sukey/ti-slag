function Titanium(properties) {
	properties = properties || {};
	this.apiName = 'Titanium';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.buildDate = properties.buildDate || undefined;
	this.buildHash = properties.buildHash || undefined;
	this.userAgent = properties.userAgent || undefined;
	this.version = properties.version || undefined;
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
	return this.apiName;
};
Titanium.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Titanium.prototype.getBuildDate = function () {
	return this.buildDate;
};
Titanium.prototype.getBuildHash = function () {
	return this.buildHash;
};
Titanium.prototype.getUserAgent = function () {
	return this.userAgent;
};
Titanium.prototype.getVersion = function () {
	return this.version;
};
Titanium.prototype.include = function () {
};
Titanium.prototype.removeEventListener = function () {
};
Titanium.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Titanium.prototype.setUserAgent = function (property) {
	this.userAgent = property;
};
module.exports = function (properties) {
	return new Titanium(properties);
};