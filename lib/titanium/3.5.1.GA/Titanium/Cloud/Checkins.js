function Checkins(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Cloud.Checkins';
	this.bubbleParent = properties.bubbleParent || true;
	return this;
}
Checkins.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Checkins.prototype.create = function () {
};
Checkins.prototype.getApiName = function () {
	return '';
};
Checkins.prototype.getBubbleParent = function () {
	return true;
};
Checkins.prototype.query = function () {
};
Checkins.prototype.remove = function () {
};
Checkins.prototype.setBubbleParent = function () {
};
Checkins.prototype.show = function () {
};
module.exports = function (properties) {
	return new Checkins(properties);
};