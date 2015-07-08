function Cookie(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Network.Cookie';
	this.bubbleParent = properties.bubbleParent || true;
	this.comment = properties.comment || '';
	this.domain = properties.domain || '';
	this.expiryDate = properties.expiryDate || '';
	this.httponly = properties.httponly || true;
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.name = properties.name || '';
	this.originalUrl = properties.originalUrl || '';
	this.path = properties.path || '';
	this.secure = properties.secure || true;
	this.value = properties.value || '';
	this.version = properties.version || 0;
	return this;
}
Cookie.prototype.addEventListener = function () {
};
Cookie.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Cookie.prototype.fireEvent = function () {
};
Cookie.prototype.getApiName = function () {
	return '';
};
Cookie.prototype.getBubbleParent = function () {
	return true;
};
Cookie.prototype.getComment = function () {
	return '';
};
Cookie.prototype.getDomain = function () {
	return '';
};
Cookie.prototype.getExpiryDate = function () {
	return '';
};
Cookie.prototype.getHttponly = function () {
	return true;
};
Cookie.prototype.getLifecycleContainer = function () {
	return {};
};
Cookie.prototype.getName = function () {
	return '';
};
Cookie.prototype.getOriginalUrl = function () {
	return '';
};
Cookie.prototype.getPath = function () {
	return '';
};
Cookie.prototype.getSecure = function () {
	return true;
};
Cookie.prototype.getValue = function () {
	return '';
};
Cookie.prototype.getVersion = function () {
	return 0;
};
Cookie.prototype.isValid = function () {
	return true;
};
Cookie.prototype.removeEventListener = function () {
};
Cookie.prototype.setBubbleParent = function () {
};
Cookie.prototype.setComment = function () {
};
Cookie.prototype.setDomain = function () {
};
Cookie.prototype.setExpiryDate = function () {
};
Cookie.prototype.setHttponly = function () {
};
Cookie.prototype.setLifecycleContainer = function () {
};
Cookie.prototype.setOriginalUrl = function () {
};
Cookie.prototype.setPath = function () {
};
Cookie.prototype.setSecure = function () {
};
Cookie.prototype.setValue = function () {
};
Cookie.prototype.setVersion = function () {
};
module.exports = function (properties) {
	return new Cookie(properties);
};