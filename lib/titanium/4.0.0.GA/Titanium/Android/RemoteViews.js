var crypto = require('crypto');
function RemoteViews(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'apiName',
			'bubbleParent',
			'layoutId',
			'lifecycleContainer',
			'packageName',
			'id'
		];
	if (__SLAG__names.length > 0 && process.env.SLAG_STRICT) {
		for (var __SLAG__name in __SLAG__properties) {
			if (__SLAG__names.indexOf(__SLAG__name) === -1) {
				throw new Error('Use user custom property ' + __SLAG__name);
			}
		}
	} else if (__SLAG__names.length === 0 && __SLAG__properties.length > 0 && process.env.SLAG_STRICT) {
		throw new Error('Use user custom properties. ' + __SLAG__properties.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.Android.RemoteViews.apiName is read only property');
	}
	this.apiName = 'Ti.Android.RemoteViews';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	this.layoutId = __SLAG__properties.layoutId || 0;
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.packageName = __SLAG__properties.packageName || '';
	this.id = __SLAG__properties.id || '';
	return this;
}
RemoteViews.prototype.addEventListener = function () {
};
RemoteViews.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
RemoteViews.prototype.fireEvent = function () {
};
RemoteViews.prototype.getApiName = function () {
	return this.apiName;
};
RemoteViews.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
RemoteViews.prototype.getLayoutId = function () {
	return this.layoutId;
};
RemoteViews.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
RemoteViews.prototype.getPackageName = function () {
	return this.packageName;
};
RemoteViews.prototype.removeEventListener = function () {
};
RemoteViews.prototype.setBoolean = function () {
};
RemoteViews.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
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
RemoteViews.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
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