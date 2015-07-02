function Activity(properties) {
	properties = properties || {};
	this.actionBar = properties.actionBar || undefined;
	this.apiName = 'Titanium.Android.Activity';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.intent = properties.intent || undefined;
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