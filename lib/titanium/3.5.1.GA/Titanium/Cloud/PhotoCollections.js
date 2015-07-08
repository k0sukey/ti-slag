function PhotoCollections(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Cloud.PhotoCollections';
	this.bubbleParent = properties.bubbleParent || true;
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
	return '';
};
PhotoCollections.prototype.getBubbleParent = function () {
	return true;
};
PhotoCollections.prototype.remove = function () {
};
PhotoCollections.prototype.search = function () {
};
PhotoCollections.prototype.setBubbleParent = function () {
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