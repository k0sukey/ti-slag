function Android(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Media.Android';
	this.bubbleParent = properties.bubbleParent || true;
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
Android.prototype.removeEventListener = function () {
};
Android.prototype.scanMediaFiles = function () {
};
Android.prototype.setBubbleParent = function () {
};
Android.prototype.setSystemWallpaper = function () {
};
module.exports = function (properties) {
	return new Android(properties);
};