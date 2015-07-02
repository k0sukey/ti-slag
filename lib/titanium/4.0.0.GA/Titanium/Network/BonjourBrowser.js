function BonjourBrowser(properties) {
	properties = properties || {};
	this.apiName = 'Titanium.Network.BonjourBrowser';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.domain = properties.domain || undefined;
	this.isSearching = properties.isSearching || undefined;
	this.serviceType = properties.serviceType || undefined;
	return this;
}
BonjourBrowser.prototype.addEventListener = function () {
};
BonjourBrowser.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
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