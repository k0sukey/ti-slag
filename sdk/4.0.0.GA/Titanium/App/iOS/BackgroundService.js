function BackgroundService(properties) {
	properties = properties || {};
	this.apiName = 'Titanium.App.iOS.BackgroundService';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.url = properties.url || undefined;
	return this;
}
BackgroundService.prototype.addEventListener = function () {
};
BackgroundService.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
BackgroundService.prototype.fireEvent = function () {
};
BackgroundService.prototype.getApiName = function () {
	return this.apiName;
};
BackgroundService.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
BackgroundService.prototype.getUrl = function () {
	return this.url;
};
BackgroundService.prototype.removeEventListener = function () {
};
BackgroundService.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
BackgroundService.prototype.stop = function () {
};
BackgroundService.prototype.unregister = function () {
};
module.exports = function (properties) {
	return new BackgroundService(properties);
};