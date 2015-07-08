function BonjourBrowser(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Network.BonjourBrowser';
	this.bubbleParent = properties.bubbleParent || true;
	this.domain = properties.domain || '';
	this.isSearching = properties.isSearching || true;
	this.serviceType = properties.serviceType || '';
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
	return '';
};
BonjourBrowser.prototype.getBubbleParent = function () {
	return true;
};
BonjourBrowser.prototype.getDomain = function () {
	return '';
};
BonjourBrowser.prototype.getIsSearching = function () {
	return true;
};
BonjourBrowser.prototype.getServiceType = function () {
	return '';
};
BonjourBrowser.prototype.removeEventListener = function () {
};
BonjourBrowser.prototype.search = function () {
};
BonjourBrowser.prototype.setBubbleParent = function () {
};
BonjourBrowser.prototype.setDomain = function () {
};
BonjourBrowser.prototype.setIsSearching = function () {
};
BonjourBrowser.prototype.setServiceType = function () {
};
BonjourBrowser.prototype.stopSearch = function () {
};
module.exports = function (properties) {
	return new BonjourBrowser(properties);
};