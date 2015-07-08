function LocationProvider(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Geolocation.Android.LocationProvider';
	this.bubbleParent = properties.bubbleParent || true;
	this.minUpdateDistance = properties.minUpdateDistance || 0;
	this.minUpdateTime = properties.minUpdateTime || 0;
	this.name = properties.name || '';
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
LocationProvider.prototype.setMinUpdateDistance = function () {
};
LocationProvider.prototype.setMinUpdateTime = function () {
};
LocationProvider.prototype.setName = function () {
};
module.exports = function (properties) {
	return new LocationProvider(properties);
};