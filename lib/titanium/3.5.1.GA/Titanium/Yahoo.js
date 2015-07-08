function Yahoo(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Yahoo';
	this.bubbleParent = properties.bubbleParent || true;
	return this;
}
Yahoo.prototype.addEventListener = function () {
};
Yahoo.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Yahoo.prototype.fireEvent = function () {
};
Yahoo.prototype.getApiName = function () {
	return '';
};
Yahoo.prototype.getBubbleParent = function () {
	return true;
};
Yahoo.prototype.removeEventListener = function () {
};
Yahoo.prototype.setBubbleParent = function () {
};
Yahoo.prototype.yql = function () {
};
module.exports = function (properties) {
	return new Yahoo(properties);
};