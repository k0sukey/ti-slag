function Android(properties) {
	properties = properties || {};
	this.apiName = 'Titanium.Media.Android';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	return this;
}
Android.prototype.addEventListener = function () {
};
Android.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Android.prototype.fireEvent = function () {
};
Android.prototype.getApiName = function () {
	return this.apiName;
};
Android.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Android.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Android.prototype.removeEventListener = function () {
};
Android.prototype.scanMediaFiles = function () {
};
Android.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Android.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
Android.prototype.setSystemWallpaper = function () {
};
module.exports = function (properties) {
	return new Android(properties);
};