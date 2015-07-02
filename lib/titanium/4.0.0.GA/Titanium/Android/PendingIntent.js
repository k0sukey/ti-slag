function PendingIntent(properties) {
	properties = properties || {};
	this.apiName = 'Titanium.Android.PendingIntent';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.flags = properties.flags || undefined;
	this.intent = properties.intent || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.updateCurrentIntent = properties.updateCurrentIntent || undefined;
	return this;
}
PendingIntent.prototype.addEventListener = function () {
};
PendingIntent.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
PendingIntent.prototype.fireEvent = function () {
};
PendingIntent.prototype.getApiName = function () {
	return this.apiName;
};
PendingIntent.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
PendingIntent.prototype.getFlags = function () {
	return this.flags;
};
PendingIntent.prototype.getIntent = function () {
	return this.intent;
};
PendingIntent.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
PendingIntent.prototype.getUpdateCurrentIntent = function () {
	return this.updateCurrentIntent;
};
PendingIntent.prototype.removeEventListener = function () {
};
PendingIntent.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
PendingIntent.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
module.exports = function (properties) {
	return new PendingIntent(properties);
};