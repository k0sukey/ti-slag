function LocationProvider(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.Geolocation.Android.LocationProvider';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.name = properties.name || '';
	this.minUpdateTime = properties.minUpdateTime || 0;
	this.minUpdateDistance = properties.minUpdateDistance || 0;
	return this;
}
LocationProvider.prototype.addEventListener = function () {
};
LocationProvider.prototype.removeEventListener = function () {
};
LocationProvider.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
LocationProvider.prototype.fireEvent = function () {
};
LocationProvider.prototype.getBubbleParent = function () {
	return true;
};
LocationProvider.prototype.setBubbleParent = function () {
};
LocationProvider.prototype.getApiName = function () {
	return '';
};
LocationProvider.prototype.getLifecycleContainer = function () {
	return {};
};
LocationProvider.prototype.setLifecycleContainer = function () {
};
LocationProvider.prototype.getName = function () {
	return '';
};
LocationProvider.prototype.setName = function () {
};
LocationProvider.prototype.getMinUpdateTime = function () {
	return 0;
};
LocationProvider.prototype.setMinUpdateTime = function () {
};
LocationProvider.prototype.getMinUpdateDistance = function () {
	return 0;
};
LocationProvider.prototype.setMinUpdateDistance = function () {
};
module.exports = function (properties) {
	return new LocationProvider(properties);
};