function ProgressIndicator(properties) {
	properties = properties || {};
	this.apiName = 'Ti.UI.Android.ProgressIndicator';
	this.bubbleParent = properties.bubbleParent || true;
	this.cancelable = properties.cancelable || true;
	this.canceledOnTouchOutside = properties.canceledOnTouchOutside || true;
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.location = properties.location || 0;
	this.max = properties.max || 0;
	this.message = properties.message || '';
	this.messageid = properties.messageid || '';
	this.min = properties.min || 0;
	this.type = properties.type || 0;
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
ProgressIndicator.prototype.getCanceledOnTouchOutside = function () {
	return true;
};
ProgressIndicator.prototype.getLifecycleContainer = function () {
	return {};
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
ProgressIndicator.prototype.setCanceledOnTouchOutside = function () {
};
ProgressIndicator.prototype.setLifecycleContainer = function () {
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