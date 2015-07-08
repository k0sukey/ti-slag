function KeyValues(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Cloud.KeyValues';
	this.bubbleParent = properties.bubbleParent || true;
	return this;
}
KeyValues.prototype.append = function () {
};
KeyValues.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
KeyValues.prototype.get = function () {
};
KeyValues.prototype.getApiName = function () {
	return '';
};
KeyValues.prototype.getBubbleParent = function () {
	return true;
};
KeyValues.prototype.increment = function () {
};
KeyValues.prototype.remove = function () {
};
KeyValues.prototype.set = function () {
};
KeyValues.prototype.setBubbleParent = function () {
};
module.exports = function (properties) {
	return new KeyValues(properties);
};