function LocationRule(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.Geolocation.Android.LocationRule';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.name = properties.name || '';
	this.accuracy = properties.accuracy || 0;
	this.minAge = properties.minAge || 0;
	this.maxAge = properties.maxAge || 0;
	return this;
}
LocationRule.prototype.addEventListener = function () {
};
LocationRule.prototype.removeEventListener = function () {
};
LocationRule.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
LocationRule.prototype.fireEvent = function () {
};
LocationRule.prototype.getBubbleParent = function () {
	return true;
};
LocationRule.prototype.setBubbleParent = function () {
};
LocationRule.prototype.getApiName = function () {
	return '';
};
LocationRule.prototype.getLifecycleContainer = function () {
	return {};
};
LocationRule.prototype.setLifecycleContainer = function () {
};
LocationRule.prototype.getName = function () {
	return '';
};
LocationRule.prototype.setName = function () {
};
LocationRule.prototype.getAccuracy = function () {
	return 0;
};
LocationRule.prototype.setAccuracy = function () {
};
LocationRule.prototype.getMinAge = function () {
	return 0;
};
LocationRule.prototype.setMinAge = function () {
};
LocationRule.prototype.getMaxAge = function () {
	return 0;
};
LocationRule.prototype.setMaxAge = function () {
};
module.exports = function (properties) {
	return new LocationRule(properties);
};