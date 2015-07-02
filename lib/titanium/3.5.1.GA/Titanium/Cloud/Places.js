function Places(properties) {
	properties = properties || {};
	this.apiName = 'Titanium.Cloud.Places';
	this.bubbleParent = properties.bubbleParent || undefined;
	return this;
}
Places.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Places.prototype.create = function () {
};
Places.prototype.getApiName = function () {
	return this.apiName;
};
Places.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Places.prototype.query = function () {
};
Places.prototype.remove = function () {
};
Places.prototype.search = function () {
};
Places.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Places.prototype.show = function () {
};
Places.prototype.update = function () {
};
module.exports = function (properties) {
	return new Places(properties);
};