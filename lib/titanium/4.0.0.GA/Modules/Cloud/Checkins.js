function Checkins(properties) {
	properties = properties || {};
	this.apiName = 'Modules.Cloud.Checkins';
	this.bubbleParent = properties.bubbleParent || true;
	this.lifecycleContainer = properties.lifecycleContainer || {};
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
Checkins.prototype.getLifecycleContainer = function () {
	return {};
};
Checkins.prototype.query = function () {
};
Checkins.prototype.remove = function () {
};
Checkins.prototype.setBubbleParent = function () {
};
Checkins.prototype.setLifecycleContainer = function () {
};
Checkins.prototype.show = function () {
};
module.exports = function (properties) {
	return new Checkins(properties);
};