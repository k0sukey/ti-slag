function PushNotifications(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Modules.Cloud.PushNotifications';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	return this;
}
PushNotifications.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
PushNotifications.prototype.notify = function () {
};
PushNotifications.prototype.notifyTokens = function () {
};
PushNotifications.prototype.resetBadge = function () {
};
PushNotifications.prototype.setBadge = function () {
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
PushNotifications.prototype.queryChannels = function () {
};
PushNotifications.prototype.showChannels = function () {
};
PushNotifications.prototype.query = function () {
};
PushNotifications.prototype.getBubbleParent = function () {
	return true;
};
PushNotifications.prototype.setBubbleParent = function () {
};
PushNotifications.prototype.getApiName = function () {
	return '';
};
PushNotifications.prototype.getLifecycleContainer = function () {
	return {};
};
PushNotifications.prototype.setLifecycleContainer = function () {
};
module.exports = function (properties) {
	return new PushNotifications(properties);
};