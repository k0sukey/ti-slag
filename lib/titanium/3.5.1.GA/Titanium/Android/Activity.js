function Activity(properties) {
	properties = properties || {};
	this.actionBar = properties.actionBar || {};
	this.apiName = 'Ti.Android.Activity';
	this.bubbleParent = properties.bubbleParent || true;
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
Activity.prototype.getOnCreate = function () {
	return {};
};
Activity.prototype.getOnCreateOptionsMenu = function () {
	return {};
};
Activity.prototype.getOnDestroy = function () {
	return {};
};
Activity.prototype.getOnPause = function () {
	return {};
};
Activity.prototype.getOnPrepareOptionsMenu = function () {
	return {};
};
Activity.prototype.getOnRestart = function () {
	return {};
};
Activity.prototype.getOnResume = function () {
	return {};
};
Activity.prototype.getOnStart = function () {
	return {};
};
Activity.prototype.getOnStop = function () {
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