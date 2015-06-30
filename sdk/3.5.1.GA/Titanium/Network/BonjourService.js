function BonjourService(properties) {
	properties = properties || {};
	this.apiName = 'Titanium.Network.BonjourService';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.domain = properties.domain || undefined;
	this.isLocal = properties.isLocal || undefined;
	this.name = properties.name || undefined;
	this.socket = properties.socket || undefined;
	this.type = properties.type || undefined;
	return this;
}
BonjourService.prototype.addEventListener = function () {
};
BonjourService.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
BonjourService.prototype.fireEvent = function () {
};
BonjourService.prototype.getApiName = function () {
	return this.apiName;
};
BonjourService.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
BonjourService.prototype.getDomain = function () {
	return this.domain;
};
BonjourService.prototype.getIsLocal = function () {
	return this.isLocal;
};
BonjourService.prototype.getName = function () {
	return this.name;
};
BonjourService.prototype.getType = function () {
	return this.type;
};
BonjourService.prototype.publish = function () {
};
BonjourService.prototype.removeEventListener = function () {
};
BonjourService.prototype.resolve = function () {
};
BonjourService.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
BonjourService.prototype.setDomain = function (property) {
	this.domain = property;
};
BonjourService.prototype.setIsLocal = function (property) {
	this.isLocal = property;
};
BonjourService.prototype.setName = function (property) {
	this.name = property;
};
BonjourService.prototype.setSocket = function (property) {
	this.socket = property;
};
BonjourService.prototype.setType = function (property) {
	this.type = property;
};
BonjourService.prototype.stop = function () {
};
module.exports = function (properties) {
	return new BonjourService(properties);
};