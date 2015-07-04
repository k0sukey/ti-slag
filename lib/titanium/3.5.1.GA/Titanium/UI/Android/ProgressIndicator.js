function ProgressIndicator(properties) {
	properties = properties || {};
	this.apiName = 'Ti.UI.Android.ProgressIndicator';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.cancelable = properties.cancelable || undefined;
	this.location = properties.location || undefined;
	this.max = properties.max || undefined;
	this.message = properties.message || undefined;
	this.messageid = properties.messageid || undefined;
	this.min = properties.min || undefined;
	this.type = properties.type || undefined;
	return this;
}
ProgressIndicator.prototype.addEventListener = function () {
};
ProgressIndicator.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
ProgressIndicator.prototype.fireEvent = function () {
};
ProgressIndicator.prototype.getApiName = function () {
	return '';
};
ProgressIndicator.prototype.getBubbleParent = function () {
	return true;
};
ProgressIndicator.prototype.getCancelable = function () {
	return true;
};
ProgressIndicator.prototype.getLocation = function () {
	return 0;
};
ProgressIndicator.prototype.getMax = function () {
	return 0;
};
ProgressIndicator.prototype.getMessage = function () {
	return '';
};
ProgressIndicator.prototype.getMessageid = function () {
	return '';
};
ProgressIndicator.prototype.getMin = function () {
	return 0;
};
ProgressIndicator.prototype.getType = function () {
	return 0;
};
ProgressIndicator.prototype.hide = function () {
};
ProgressIndicator.prototype.removeEventListener = function () {
};
ProgressIndicator.prototype.setBubbleParent = function () {
};
ProgressIndicator.prototype.setCancelable = function () {
};
ProgressIndicator.prototype.setLocation = function () {
};
ProgressIndicator.prototype.setMax = function () {
};
ProgressIndicator.prototype.setMessage = function () {
};
ProgressIndicator.prototype.setMessageid = function () {
};
ProgressIndicator.prototype.setMin = function () {
};
ProgressIndicator.prototype.setType = function () {
};
ProgressIndicator.prototype.show = function () {
};
module.exports = function (properties) {
	return new ProgressIndicator(properties);
};