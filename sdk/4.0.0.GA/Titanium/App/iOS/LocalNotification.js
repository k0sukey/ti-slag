function LocalNotification(properties) {
	properties = properties || {};
	this.apiName = 'Titanium.App.iOS.LocalNotification';
	this.bubbleParent = properties.bubbleParent || undefined;
	return this;
}
LocalNotification.prototype.addEventListener = function () {
};
LocalNotification.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
LocalNotification.prototype.cancel = function () {
};
LocalNotification.prototype.fireEvent = function () {
};
LocalNotification.prototype.getApiName = function () {
	return this.apiName;
};
LocalNotification.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
LocalNotification.prototype.removeEventListener = function () {
};
LocalNotification.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
module.exports = function (properties) {
	return new LocalNotification(properties);
};