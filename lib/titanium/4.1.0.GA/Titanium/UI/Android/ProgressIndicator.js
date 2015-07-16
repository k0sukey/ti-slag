function ProgressIndicator(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.UI.Android.ProgressIndicator';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.cancelable = properties.cancelable || true;
	this.canceledOnTouchOutside = properties.canceledOnTouchOutside || true;
	this.message = properties.message || '';
	this.messageid = properties.messageid || '';
	this.min = properties.min || 0;
	this.max = properties.max || 0;
	this.location = properties.location || 0;
	this.type = properties.type || 0;
	return this;
}
ProgressIndicator.prototype.addEventListener = function () {
};
ProgressIndicator.prototype.removeEventListener = function () {
};
ProgressIndicator.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
ProgressIndicator.prototype.fireEvent = function () {
};
ProgressIndicator.prototype.finishLayout = function () {
	throw new Error('Ti.UI.Android.ProgressIndicator.finishLayout was deprecated, since 3.0.0');
};
ProgressIndicator.prototype.startLayout = function () {
	throw new Error('Ti.UI.Android.ProgressIndicator.startLayout was deprecated, since 3.0.0');
};
ProgressIndicator.prototype.updateLayout = function () {
	throw new Error('Ti.UI.Android.ProgressIndicator.updateLayout was deprecated, since 3.0.0');
};
ProgressIndicator.prototype.hide = function () {
};
ProgressIndicator.prototype.show = function () {
};
ProgressIndicator.prototype.getBubbleParent = function () {
	return true;
};
ProgressIndicator.prototype.setBubbleParent = function () {
};
ProgressIndicator.prototype.getApiName = function () {
	return '';
};
ProgressIndicator.prototype.getLifecycleContainer = function () {
	return {};
};
ProgressIndicator.prototype.setLifecycleContainer = function () {
};
ProgressIndicator.prototype.getCancelable = function () {
	return true;
};
ProgressIndicator.prototype.setCancelable = function () {
};
ProgressIndicator.prototype.getCanceledOnTouchOutside = function () {
	return true;
};
ProgressIndicator.prototype.setCanceledOnTouchOutside = function () {
};
ProgressIndicator.prototype.getMessage = function () {
	return '';
};
ProgressIndicator.prototype.setMessage = function () {
};
ProgressIndicator.prototype.getMessageid = function () {
	return '';
};
ProgressIndicator.prototype.setMessageid = function () {
};
ProgressIndicator.prototype.getMin = function () {
	return 0;
};
ProgressIndicator.prototype.setMin = function () {
};
ProgressIndicator.prototype.getMax = function () {
	return 0;
};
ProgressIndicator.prototype.setMax = function () {
};
ProgressIndicator.prototype.getLocation = function () {
	return 0;
};
ProgressIndicator.prototype.setLocation = function () {
};
ProgressIndicator.prototype.getType = function () {
	return 0;
};
ProgressIndicator.prototype.setType = function () {
};
module.exports = function (properties) {
	return new ProgressIndicator(properties);
};