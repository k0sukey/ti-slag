function BroadcastReceiver(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.Android.BroadcastReceiver';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.onReceived = properties.onReceived || {};
	this.url = properties.url || '';
	return this;
}
BroadcastReceiver.prototype.addEventListener = function () {
};
BroadcastReceiver.prototype.removeEventListener = function () {
};
BroadcastReceiver.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
BroadcastReceiver.prototype.fireEvent = function () {
};
BroadcastReceiver.prototype.getBubbleParent = function () {
	return true;
};
BroadcastReceiver.prototype.setBubbleParent = function () {
};
BroadcastReceiver.prototype.getApiName = function () {
	return '';
};
BroadcastReceiver.prototype.getLifecycleContainer = function () {
	return {};
};
BroadcastReceiver.prototype.setLifecycleContainer = function () {
};
BroadcastReceiver.prototype.getOnReceived = function () {
	return {};
};
BroadcastReceiver.prototype.setOnReceived = function () {
};
BroadcastReceiver.prototype.getUrl = function () {
	return '';
};
BroadcastReceiver.prototype.setUrl = function () {
};
module.exports = function (properties) {
	return new BroadcastReceiver(properties);
};