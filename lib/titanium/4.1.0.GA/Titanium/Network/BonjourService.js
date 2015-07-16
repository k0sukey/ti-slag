function BonjourService(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.Network.BonjourService';
	this.domain = properties.domain || '';
	this.isLocal = properties.isLocal || true;
	this.name = properties.name || '';
	this.socket = properties.socket || {};
	this.type = properties.type || '';
	return this;
}
BonjourService.prototype.addEventListener = function () {
};
BonjourService.prototype.removeEventListener = function () {
};
BonjourService.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
BonjourService.prototype.fireEvent = function () {
};
BonjourService.prototype.publish = function () {
};
BonjourService.prototype.resolve = function () {
};
BonjourService.prototype.stop = function () {
};
BonjourService.prototype.getBubbleParent = function () {
	return true;
};
BonjourService.prototype.setBubbleParent = function () {
};
BonjourService.prototype.getApiName = function () {
	return '';
};
BonjourService.prototype.getDomain = function () {
	return '';
};
BonjourService.prototype.setDomain = function () {
};
BonjourService.prototype.getIsLocal = function () {
	return true;
};
BonjourService.prototype.setIsLocal = function () {
};
BonjourService.prototype.getName = function () {
	return '';
};
BonjourService.prototype.setName = function () {
};
BonjourService.prototype.getSocket = function () {
	return {};
};
BonjourService.prototype.setSocket = function () {
};
BonjourService.prototype.getType = function () {
	return '';
};
BonjourService.prototype.setType = function () {
};
module.exports = function (properties) {
	return new BonjourService(properties);
};