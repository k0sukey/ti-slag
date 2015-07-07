function BroadcastReceiver(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Android.BroadcastReceiver';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.onReceived = properties.onReceived || undefined;
	this.url = properties.url || undefined;
	return this;
}
BroadcastReceiver.prototype.addEventListener = function () {
};
BroadcastReceiver.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
BroadcastReceiver.prototype.fireEvent = function () {
};
BroadcastReceiver.prototype.getApiName = function () {
	return '';
};
BroadcastReceiver.prototype.getBubbleParent = function () {
	return true;
};
BroadcastReceiver.prototype.getOnReceived = function () {
	return {};
};
BroadcastReceiver.prototype.getUrl = function () {
	return '';
};
BroadcastReceiver.prototype.removeEventListener = function () {
};
BroadcastReceiver.prototype.setBubbleParent = function () {
};
BroadcastReceiver.prototype.setOnReceived = function () {
};
BroadcastReceiver.prototype.setUrl = function () {
};
module.exports = function (properties) {
	return new BroadcastReceiver(properties);
};