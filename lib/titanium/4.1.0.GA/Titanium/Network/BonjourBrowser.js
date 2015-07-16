function BonjourBrowser(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.Network.BonjourBrowser';
	this.domain = properties.domain || '';
	this.isSearching = properties.isSearching || true;
	this.serviceType = properties.serviceType || '';
	return this;
}
BonjourBrowser.prototype.addEventListener = function () {
};
BonjourBrowser.prototype.removeEventListener = function () {
};
BonjourBrowser.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
BonjourBrowser.prototype.fireEvent = function () {
};
BonjourBrowser.prototype.search = function () {
};
BonjourBrowser.prototype.stopSearch = function () {
};
BonjourBrowser.prototype.getBubbleParent = function () {
	return true;
};
BonjourBrowser.prototype.setBubbleParent = function () {
};
BonjourBrowser.prototype.getApiName = function () {
	return '';
};
BonjourBrowser.prototype.getDomain = function () {
	return '';
};
BonjourBrowser.prototype.setDomain = function () {
};
BonjourBrowser.prototype.getIsSearching = function () {
	return true;
};
BonjourBrowser.prototype.setIsSearching = function () {
};
BonjourBrowser.prototype.getServiceType = function () {
	return '';
};
BonjourBrowser.prototype.setServiceType = function () {
};
module.exports = function (properties) {
	return new BonjourBrowser(properties);
};