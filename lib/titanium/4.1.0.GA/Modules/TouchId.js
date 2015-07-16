function TouchId(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Modules.TouchId';
	this.ERROR_AUTHENTICATION_FAILED = properties.ERROR_AUTHENTICATION_FAILED || 0;
	this.ERROR_PASSCODE_NOT_SET = properties.ERROR_PASSCODE_NOT_SET || 0;
	this.ERROR_TOUCH_ID_NOT_AVAILABLE = properties.ERROR_TOUCH_ID_NOT_AVAILABLE || 0;
	this.ERROR_TOUCH_ID_NOT_ENROLLED = properties.ERROR_TOUCH_ID_NOT_ENROLLED || 0;
	this.ERROR_SYSTEM_CANCEL = properties.ERROR_SYSTEM_CANCEL || 0;
	this.ERROR_USER_CANCEL = properties.ERROR_USER_CANCEL || 0;
	this.ERROR_USER_FALLBACK = properties.ERROR_USER_FALLBACK || 0;
	return this;
}
TouchId.prototype.addEventListener = function () {
};
TouchId.prototype.removeEventListener = function () {
};
TouchId.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
TouchId.prototype.fireEvent = function () {
};
TouchId.prototype.authenticate = function () {
};
TouchId.prototype.deviceCanAuthenticate = function () {
	return {};
};
TouchId.prototype.getBubbleParent = function () {
	return true;
};
TouchId.prototype.setBubbleParent = function () {
};
TouchId.prototype.getApiName = function () {
	return '';
};
module.exports = function (properties) {
	return new TouchId(properties);
};