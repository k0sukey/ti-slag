function GeoFences(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Modules.Cloud.GeoFences';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	return this;
}
GeoFences.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
GeoFences.prototype.create = function () {
};
GeoFences.prototype.query = function () {
};
GeoFences.prototype.remove = function () {
};
GeoFences.prototype.update = function () {
};
GeoFences.prototype.getBubbleParent = function () {
	return true;
};
GeoFences.prototype.setBubbleParent = function () {
};
GeoFences.prototype.getApiName = function () {
	return '';
};
GeoFences.prototype.getLifecycleContainer = function () {
	return {};
};
GeoFences.prototype.setLifecycleContainer = function () {
};
module.exports = function (properties) {
	return new GeoFences(properties);
};