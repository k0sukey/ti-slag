function BackgroundService(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.App.iOS.BackgroundService';
	this.url = properties.url || '';
	return this;
}
BackgroundService.prototype.addEventListener = function () {
};
BackgroundService.prototype.removeEventListener = function () {
};
BackgroundService.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
BackgroundService.prototype.fireEvent = function () {
};
BackgroundService.prototype.stop = function () {
};
BackgroundService.prototype.unregister = function () {
};
BackgroundService.prototype.getBubbleParent = function () {
	return true;
};
BackgroundService.prototype.setBubbleParent = function () {
};
BackgroundService.prototype.getApiName = function () {
	return '';
};
BackgroundService.prototype.getUrl = function () {
	return '';
};
BackgroundService.prototype.setUrl = function () {
};
module.exports = function (properties) {
	return new BackgroundService(properties);
};