function LocationProvider(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Geolocation.Android.LocationProvider';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.minUpdateDistance = properties.minUpdateDistance || undefined;
	this.minUpdateTime = properties.minUpdateTime || undefined;
	this.name = properties.name || undefined;
	return this;
}
LocationProvider.prototype.addEventListener = function () {
};
LocationProvider.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
LocationProvider.prototype.fireEvent = function () {
};
LocationProvider.prototype.getApiName = function () {
	return '';
};
LocationProvider.prototype.getBubbleParent = function () {
	return true;
};
LocationProvider.prototype.getLifecycleContainer = function () {
	return {};
};
LocationProvider.prototype.getMinUpdateDistance = function () {
	return 0;
};
LocationProvider.prototype.getMinUpdateTime = function () {
	return 0;
};
LocationProvider.prototype.getName = function () {
	return '';
};
LocationProvider.prototype.removeEventListener = function () {
};
LocationProvider.prototype.setBubbleParent = function () {
};
LocationProvider.prototype.setLifecycleContainer = function () {
};
LocationProvider.prototype.setMinUpdateDistance = function () {
};
LocationProvider.prototype.setMinUpdateTime = function () {
};
LocationProvider.prototype.setName = function () {
};
module.exports = function (properties) {
	return new LocationProvider(properties);
};