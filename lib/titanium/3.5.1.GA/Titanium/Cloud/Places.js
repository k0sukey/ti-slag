function Places(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Cloud.Places';
	this.bubbleParent = properties.bubbleParent || true;
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
	return '';
};
Places.prototype.getBubbleParent = function () {
	return true;
};
Places.prototype.query = function () {
};
Places.prototype.remove = function () {
};
Places.prototype.search = function () {
};
Places.prototype.setBubbleParent = function () {
};
Places.prototype.show = function () {
};
Places.prototype.update = function () {
};
module.exports = function (properties) {
	return new Places(properties);
};