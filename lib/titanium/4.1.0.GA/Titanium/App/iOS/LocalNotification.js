function LocalNotification(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.App.iOS.LocalNotification';
	return this;
}
LocalNotification.prototype.addEventListener = function () {
};
LocalNotification.prototype.removeEventListener = function () {
};
LocalNotification.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
LocalNotification.prototype.fireEvent = function () {
};
LocalNotification.prototype.cancel = function () {
};
LocalNotification.prototype.getBubbleParent = function () {
	return true;
};
LocalNotification.prototype.setBubbleParent = function () {
};
LocalNotification.prototype.getApiName = function () {
	return '';
};
module.exports = function (properties) {
	return new LocalNotification(properties);
};