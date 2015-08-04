var crypto = require('crypto');
function Activity(__SLAG__properties) {
	__SLAG__properties = __SLAG__properties || {};
	var __SLAG__checks = [], __SLAG__names = [
			'actionBar',
			'apiName',
			'bubbleParent',
			'intent',
			'lifecycleContainer',
			'onCreate',
			'onCreateOptionsMenu',
			'onDestroy',
			'onPause',
			'onPrepareOptionsMenu',
			'onRestart',
			'onResume',
			'onStart',
			'onStop',
			'requestedOrientation',
			'id'
		];
	if (__SLAG__names.length > 0 && process.env.SLAG_STRICT === 'true') {
		for (var __SLAG__name in __SLAG__properties) {
			if (__SLAG__names.indexOf(__SLAG__name) === -1) {
				throw new Error('Use user custom property ' + __SLAG__name);
			}
		}
	} else if (__SLAG__names.length === 0 && __SLAG__properties.length > 0 && process.env.SLAG_STRICT === 'true') {
		throw new Error('Use user custom properties. ' + __SLAG__properties.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	if (__SLAG__properties.actionBar) {
		throw new Error('Ti.Android.Activity.actionBar is read only property');
	}
	this.actionBar = {};
	if (__SLAG__properties.apiName) {
		throw new Error('Ti.Android.Activity.apiName is read only property');
	}
	this.apiName = 'Ti.Android.Activity';
	this.bubbleParent = __SLAG__properties.bubbleParent || true;
	if (__SLAG__properties.intent) {
		throw new Error('Ti.Android.Activity.intent is read only property');
	}
	this.intent = {};
	this.lifecycleContainer = __SLAG__properties.lifecycleContainer || {};
	this.onCreate = __SLAG__properties.onCreate || {};
	this.onCreateOptionsMenu = __SLAG__properties.onCreateOptionsMenu || {};
	this.onDestroy = __SLAG__properties.onDestroy || {};
	this.onPause = __SLAG__properties.onPause || {};
	this.onPrepareOptionsMenu = __SLAG__properties.onPrepareOptionsMenu || {};
	this.onRestart = __SLAG__properties.onRestart || {};
	this.onResume = __SLAG__properties.onResume || {};
	this.onStart = __SLAG__properties.onStart || {};
	this.onStop = __SLAG__properties.onStop || {};
	this.requestedOrientation = __SLAG__properties.requestedOrientation || 0;
	this.id = __SLAG__properties.id || '';
	return this;
}
Activity.prototype.addEventListener = function () {
};
Activity.prototype.applyProperties = function (params) {
	for (var __SLAG__name in params) {
		this[__SLAG__name] = params[__SLAG__name];
	}
};
Activity.prototype.finish = function () {
};
Activity.prototype.fireEvent = function () {
};
Activity.prototype.getActionBar = function () {
	return this.actionBar;
};
Activity.prototype.getApiName = function () {
	return this.apiName;
};
Activity.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Activity.prototype.getIntent = function () {
	return this.intent;
};
Activity.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Activity.prototype.getOnCreate = function () {
	return this.onCreate;
};
Activity.prototype.getOnCreateOptionsMenu = function () {
	return this.onCreateOptionsMenu;
};
Activity.prototype.getOnDestroy = function () {
	return this.onDestroy;
};
Activity.prototype.getOnPause = function () {
	return this.onPause;
};
Activity.prototype.getOnPrepareOptionsMenu = function () {
	return this.onPrepareOptionsMenu;
};
Activity.prototype.getOnRestart = function () {
	return this.onRestart;
};
Activity.prototype.getOnResume = function () {
	return this.onResume;
};
Activity.prototype.getOnStart = function () {
	return this.onStart;
};
Activity.prototype.getOnStop = function () {
	return this.onStop;
};
Activity.prototype.getString = function () {
	return '';
};
Activity.prototype.invalidateOptionsMenu = function () {
};
Activity.prototype.openOptionsMenu = function () {
};
Activity.prototype.removeEventListener = function () {
};
Activity.prototype.sendBroadcast = function () {
};
Activity.prototype.sendBroadcastWithPermission = function () {
};
Activity.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Activity.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
Activity.prototype.setOnCreate = function (property) {
	this.onCreate = property;
};
Activity.prototype.setOnCreateOptionsMenu = function (property) {
	this.onCreateOptionsMenu = property;
};
Activity.prototype.setOnDestroy = function (property) {
	this.onDestroy = property;
};
Activity.prototype.setOnPause = function (property) {
	this.onPause = property;
};
Activity.prototype.setOnPrepareOptionsMenu = function (property) {
	this.onPrepareOptionsMenu = property;
};
Activity.prototype.setOnRestart = function (property) {
	this.onRestart = property;
};
Activity.prototype.setOnResume = function (property) {
	this.onResume = property;
};
Activity.prototype.setOnStart = function (property) {
	this.onStart = property;
};
Activity.prototype.setOnStop = function (property) {
	this.onStop = property;
};
Activity.prototype.setRequestedOrientation = function (property) {
	this.requestedOrientation = property;
};
Activity.prototype.setResult = function () {
};
Activity.prototype.startActivity = function () {
};
Activity.prototype.startActivityForResult = function () {
};
module.exports = function (properties) {
	return new Activity(properties);
};