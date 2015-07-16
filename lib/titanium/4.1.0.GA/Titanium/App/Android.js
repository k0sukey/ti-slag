function Android(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.App.Android';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.R = properties.R || {};
	this.appVersionCode = properties.appVersionCode || 0;
	this.appVersionName = properties.appVersionName || '';
	this.launchIntent = properties.launchIntent || {};
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
Android.prototype.getAppVersionCode = function () {
	return 0;
};
Android.prototype.getAppVersionName = function () {
	return '';
};
Android.prototype.getLaunchIntent = function () {
	return {};
};
module.exports = function (properties) {
	return new Android(properties);
};