function LocalNotification(properties) {
	properties = properties || {};
	this.apiName = 'Ti.App.iOS.LocalNotification';
	this.bubbleParent = properties.bubbleParent || true;
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
	return '';
};
LocalNotification.prototype.getBubbleParent = function () {
	return true;
};
LocalNotification.prototype.removeEventListener = function () {
};
LocalNotification.prototype.setBubbleParent = function () {
};
module.exports = function (properties) {
	return new LocalNotification(properties);
};