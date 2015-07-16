function Android(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.Media.Android';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	return this;
}
Android.prototype.addEventListener = function () {
};
Android.prototype.removeEventListener = function () {
};
Android.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Android.prototype.fireEvent = function () {
};
Android.prototype.scanMediaFiles = function () {
};
Android.prototype.setSystemWallpaper = function () {
};
Android.prototype.getBubbleParent = function () {
	return true;
};
Android.prototype.setBubbleParent = function () {
};
Android.prototype.getApiName = function () {
	return '';
};
Android.prototype.getLifecycleContainer = function () {
	return {};
};
Android.prototype.setLifecycleContainer = function () {
};
module.exports = function (properties) {
	return new Android(properties);
};