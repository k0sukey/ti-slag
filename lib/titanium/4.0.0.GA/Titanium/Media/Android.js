function Android(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Media.Android';
	this.bubbleParent = properties.bubbleParent || true;
	this.lifecycleContainer = properties.lifecycleContainer || {};
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
	return '';
};
Android.prototype.getBubbleParent = function () {
	return true;
};
Android.prototype.getLifecycleContainer = function () {
	return {};
};
Android.prototype.removeEventListener = function () {
};
Android.prototype.scanMediaFiles = function () {
};
Android.prototype.setBubbleParent = function () {
};
Android.prototype.setLifecycleContainer = function () {
};
Android.prototype.setSystemWallpaper = function () {
};
module.exports = function (properties) {
	return new Android(properties);
};