function Objects(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Cloud.Objects';
	this.bubbleParent = properties.bubbleParent || true;
	return this;
}
Objects.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Objects.prototype.create = function () {
};
Objects.prototype.getApiName = function () {
	return '';
};
Objects.prototype.getBubbleParent = function () {
	return true;
};
Objects.prototype.query = function () {
};
Objects.prototype.remove = function () {
};
Objects.prototype.setBubbleParent = function () {
};
Objects.prototype.show = function () {
};
Objects.prototype.update = function () {
};
module.exports = function (properties) {
	return new Objects(properties);
};