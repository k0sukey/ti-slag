function Activity(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.Android.Activity';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.actionBar = properties.actionBar || {};
	this.intent = properties.intent || {};
	this.onCreate = properties.onCreate || {};
	this.onCreateOptionsMenu = properties.onCreateOptionsMenu || {};
	this.onDestroy = properties.onDestroy || {};
	this.onPause = properties.onPause || {};
	this.onPrepareOptionsMenu = properties.onPrepareOptionsMenu || {};
	this.onRestart = properties.onRestart || {};
	this.onResume = properties.onResume || {};
	this.onStart = properties.onStart || {};
	this.onStop = properties.onStop || {};
	this.requestedOrientation = properties.requestedOrientation || 0;
	return this;
}
Activity.prototype.addEventListener = function () {
};
Activity.prototype.removeEventListener = function () {
};
Activity.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Activity.prototype.fireEvent = function () {
};
Activity.prototype.finish = function () {
};
Activity.prototype.getString = function () {
	return '';
};
Activity.prototype.invalidateOptionsMenu = function () {
};
Activity.prototype.setRequestedOrientation = function () {
};
Activity.prototype.setResult = function () {
};
Activity.prototype.startActivity = function () {
};
Activity.prototype.startActivityForResult = function () {
};
Activity.prototype.openOptionsMenu = function () {
};
Activity.prototype.sendBroadcast = function () {
};
Activity.prototype.sendBroadcastWithPermission = function () {
};
Activity.prototype.getBubbleParent = function () {
	return true;
};
Activity.prototype.setBubbleParent = function () {
};
Activity.prototype.getApiName = function () {
	return '';
};
Activity.prototype.getLifecycleContainer = function () {
	return {};
};
Activity.prototype.setLifecycleContainer = function () {
};
Activity.prototype.getActionBar = function () {
	return {};
};
Activity.prototype.getIntent = function () {
	return {};
};
Activity.prototype.getOnCreate = function () {
	return {};
};
Activity.prototype.setOnCreate = function () {
};
Activity.prototype.getOnCreateOptionsMenu = function () {
	return {};
};
Activity.prototype.setOnCreateOptionsMenu = function () {
};
Activity.prototype.getOnDestroy = function () {
	return {};
};
Activity.prototype.setOnDestroy = function () {
};
Activity.prototype.getOnPause = function () {
	return {};
};
Activity.prototype.setOnPause = function () {
};
Activity.prototype.getOnPrepareOptionsMenu = function () {
	return {};
};
Activity.prototype.setOnPrepareOptionsMenu = function () {
};
Activity.prototype.getOnRestart = function () {
	return {};
};
Activity.prototype.setOnRestart = function () {
};
Activity.prototype.getOnResume = function () {
	return {};
};
Activity.prototype.setOnResume = function () {
};
Activity.prototype.getOnStart = function () {
	return {};
};
Activity.prototype.setOnStart = function () {
};
Activity.prototype.getOnStop = function () {
	return {};
};
Activity.prototype.setOnStop = function () {
};
module.exports = function (properties) {
	return new Activity(properties);
};