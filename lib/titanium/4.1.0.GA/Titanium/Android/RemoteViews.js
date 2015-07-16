function RemoteViews(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.Android.RemoteViews';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.layoutId = properties.layoutId || 0;
	this.packageName = properties.packageName || '';
	return this;
}
RemoteViews.prototype.addEventListener = function () {
};
RemoteViews.prototype.removeEventListener = function () {
};
RemoteViews.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
RemoteViews.prototype.fireEvent = function () {
};
RemoteViews.prototype.setBoolean = function () {
};
RemoteViews.prototype.setChronometer = function () {
};
RemoteViews.prototype.setDouble = function () {
};
RemoteViews.prototype.setImageViewResource = function () {
};
RemoteViews.prototype.setImageViewUri = function () {
};
RemoteViews.prototype.setInt = function () {
};
RemoteViews.prototype.setOnClickPendingIntent = function () {
};
RemoteViews.prototype.setProgressBar = function () {
};
RemoteViews.prototype.setString = function () {
};
RemoteViews.prototype.setTextColor = function () {
};
RemoteViews.prototype.setTextViewText = function () {
};
RemoteViews.prototype.setUri = function () {
};
RemoteViews.prototype.setViewVisibility = function () {
};
RemoteViews.prototype.getBubbleParent = function () {
	return true;
};
RemoteViews.prototype.setBubbleParent = function () {
};
RemoteViews.prototype.getApiName = function () {
	return '';
};
RemoteViews.prototype.getLifecycleContainer = function () {
	return {};
};
RemoteViews.prototype.setLifecycleContainer = function () {
};
RemoteViews.prototype.getLayoutId = function () {
	return 0;
};
RemoteViews.prototype.setLayoutId = function () {
};
RemoteViews.prototype.getPackageName = function () {
	return '';
};
RemoteViews.prototype.setPackageName = function () {
};
module.exports = function (properties) {
	return new RemoteViews(properties);
};