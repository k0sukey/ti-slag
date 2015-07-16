function PendingIntent(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.Android.PendingIntent';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.flags = properties.flags || 0;
	this.intent = properties.intent || {};
	this.updateCurrentIntent = properties.updateCurrentIntent || true;
	return this;
}
PendingIntent.prototype.addEventListener = function () {
};
PendingIntent.prototype.removeEventListener = function () {
};
PendingIntent.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
PendingIntent.prototype.fireEvent = function () {
};
PendingIntent.prototype.getBubbleParent = function () {
	return true;
};
PendingIntent.prototype.setBubbleParent = function () {
};
PendingIntent.prototype.getApiName = function () {
	return '';
};
PendingIntent.prototype.getLifecycleContainer = function () {
	return {};
};
PendingIntent.prototype.setLifecycleContainer = function () {
};
PendingIntent.prototype.getFlags = function () {
	return 0;
};
PendingIntent.prototype.setFlags = function () {
};
PendingIntent.prototype.getIntent = function () {
	return {};
};
PendingIntent.prototype.setIntent = function () {
};
PendingIntent.prototype.getUpdateCurrentIntent = function () {
	return true;
};
PendingIntent.prototype.setUpdateCurrentIntent = function () {
};
module.exports = function (properties) {
	return new PendingIntent(properties);
};