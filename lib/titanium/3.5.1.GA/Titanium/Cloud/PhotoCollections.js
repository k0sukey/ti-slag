function PhotoCollections(properties) {
	properties = properties || {};
	this.apiName = 'Titanium.Cloud.PhotoCollections';
	this.bubbleParent = properties.bubbleParent || undefined;
	return this;
}
PhotoCollections.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
PhotoCollections.prototype.create = function () {
};
PhotoCollections.prototype.getApiName = function () {
	return this.apiName;
};
PhotoCollections.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
PhotoCollections.prototype.remove = function () {
};
PhotoCollections.prototype.search = function () {
};
PhotoCollections.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
PhotoCollections.prototype.show = function () {
};
PhotoCollections.prototype.showPhotos = function () {
};
PhotoCollections.prototype.showSubCollections = function () {
};
PhotoCollections.prototype.update = function () {
};
module.exports = function (properties) {
	return new PhotoCollections(properties);
};