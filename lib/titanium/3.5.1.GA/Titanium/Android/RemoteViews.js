function RemoteViews(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Android.RemoteViews';
	this.bubbleParent = properties.bubbleParent || true;
	this.layoutId = properties.layoutId || 0;
	this.packageName = properties.packageName || '';
	return this;
}
RemoteViews.prototype.addEventListener = function () {
};
RemoteViews.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
RemoteViews.prototype.fireEvent = function () {
};
RemoteViews.prototype.getApiName = function () {
	return '';
};
RemoteViews.prototype.getBubbleParent = function () {
	return true;
};
RemoteViews.prototype.getLayoutId = function () {
	return 0;
};
RemoteViews.prototype.getPackageName = function () {
	return '';
};
RemoteViews.prototype.removeEventListener = function () {
};
RemoteViews.prototype.setBoolean = function () {
};
RemoteViews.prototype.setBubbleParent = function () {
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
module.exports = function (properties) {
	return new RemoteViews(properties);
};