function Activity(properties) {
	properties = properties || {};
	this.actionBar = properties.actionBar || undefined;
	this.apiName = 'Ti.Android.Activity';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.intent = properties.intent || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.onCreate = properties.onCreate || undefined;
	this.onCreateOptionsMenu = properties.onCreateOptionsMenu || undefined;
	this.onDestroy = properties.onDestroy || undefined;
	this.onPause = properties.onPause || undefined;
	this.onPrepareOptionsMenu = properties.onPrepareOptionsMenu || undefined;
	this.onRestart = properties.onRestart || undefined;
	this.onResume = properties.onResume || undefined;
	this.onStart = properties.onStart || undefined;
	this.onStop = properties.onStop || undefined;
	this.requestedOrientation = properties.requestedOrientation || undefined;
	return this;
}
Activity.prototype.addEventListener = function () {
};
Activity.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Activity.prototype.finish = function () {
};
Activity.prototype.fireEvent = function () {
};
Activity.prototype.getActionBar = function () {
	return {};
};
Activity.prototype.getApiName = function () {
	return '';
};
Activity.prototype.getBubbleParent = function () {
	return true;
};
Activity.prototype.getIntent = function () {
	return {};
};
Activity.prototype.getLifecycleContainer = function () {
	return {};
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
Activity.prototype.setBubbleParent = function () {
};
Activity.prototype.setLifecycleContainer = function () {
};
Activity.prototype.setOnCreate = function () {
};
Activity.prototype.setOnCreateOptionsMenu = function () {
};
Activity.prototype.setOnDestroy = function () {
};
Activity.prototype.setOnPause = function () {
};
Activity.prototype.setOnPrepareOptionsMenu = function () {
};
Activity.prototype.setOnRestart = function () {
};
Activity.prototype.setOnResume = function () {
};
Activity.prototype.setOnStart = function () {
};
Activity.prototype.setOnStop = function () {
};
Activity.prototype.setRequestedOrientation = function () {
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