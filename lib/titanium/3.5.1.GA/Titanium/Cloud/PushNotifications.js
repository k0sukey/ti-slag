function PushNotifications(properties) {
	properties = properties || {};
	this.apiName = 'Titanium.Cloud.PushNotifications';
	this.bubbleParent = properties.bubbleParent || undefined;
	return this;
}
PushNotifications.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
PushNotifications.prototype.getApiName = function () {
	return this.apiName;
};
PushNotifications.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
PushNotifications.prototype.notify = function () {
};
PushNotifications.prototype.notifyTokens = function () {
};
PushNotifications.prototype.query = function () {
};
PushNotifications.prototype.queryChannels = function () {
};
PushNotifications.prototype.resetBadge = function () {
};
PushNotifications.prototype.setBadge = function () {
};
PushNotifications.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
PushNotifications.prototype.showChannels = function () {
};
PushNotifications.prototype.subscribe = function () {
};
PushNotifications.prototype.subscribeToken = function () {
};
PushNotifications.prototype.unsubscribe = function () {
};
PushNotifications.prototype.unsubscribeToken = function () {
};
PushNotifications.prototype.updateSubscription = function () {
};
module.exports = function (properties) {
	return new PushNotifications(properties);
};