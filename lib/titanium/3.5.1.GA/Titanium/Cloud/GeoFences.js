function GeoFences(properties) {
	properties = properties || {};
	this.apiName = 'Titanium.Cloud.GeoFences';
	this.bubbleParent = properties.bubbleParent || undefined;
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
	return this.apiName;
};
GeoFences.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
GeoFences.prototype.query = function () {
};
GeoFences.prototype.remove = function () {
};
GeoFences.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
GeoFences.prototype.update = function () {
};
module.exports = function (properties) {
	return new GeoFences(properties);
};