function GeoFences(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Cloud.GeoFences';
	this.bubbleParent = properties.bubbleParent || true;
	return this;
}
GeoFences.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
GeoFences.prototype.create = function () {
};
GeoFences.prototype.getApiName = function () {
	return '';
};
GeoFences.prototype.getBubbleParent = function () {
	return true;
};
GeoFences.prototype.query = function () {
};
GeoFences.prototype.remove = function () {
};
GeoFences.prototype.setBubbleParent = function () {
};
GeoFences.prototype.update = function () {
};
module.exports = function (properties) {
	return new GeoFences(properties);
};