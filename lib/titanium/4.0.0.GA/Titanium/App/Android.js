function Android(properties) {
	properties = properties || {};
	this.R = properties.R || {};
	this.apiName = 'Ti.App.Android';
	this.appVersionCode = properties.appVersionCode || 0;
	this.appVersionName = properties.appVersionName || '';
	this.bubbleParent = properties.bubbleParent || true;
	this.launchIntent = properties.launchIntent || {};
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
Android.prototype.getAppVersionCode = function () {
	return 0;
};
Android.prototype.getAppVersionName = function () {
	return '';
};
Android.prototype.getBubbleParent = function () {
	return true;
};
Android.prototype.getLaunchIntent = function () {
	return {};
};
Android.prototype.getLifecycleContainer = function () {
	return {};
};
Android.prototype.removeEventListener = function () {
};
Android.prototype.setBubbleParent = function () {
};
Android.prototype.setLifecycleContainer = function () {
};
module.exports = function (properties) {
	return new Android(properties);
};