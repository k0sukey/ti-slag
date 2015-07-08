function Module(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Module';
	this.bubbleParent = properties.bubbleParent || true;
	return this;
}
Module.prototype.addEventListener = function () {
};
Module.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Module.prototype.fireEvent = function () {
};
Module.prototype.getApiName = function () {
	return '';
};
Module.prototype.getBubbleParent = function () {
	return true;
};
Module.prototype.removeEventListener = function () {
};
Module.prototype.setBubbleParent = function () {
};
module.exports = function (properties) {
	return new Module(properties);
};