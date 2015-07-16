function Checkins(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Modules.Cloud.Checkins';
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
Checkins.prototype.query = function () {
};
Checkins.prototype.remove = function () {
};
Checkins.prototype.show = function () {
};
Checkins.prototype.getBubbleParent = function () {
	return true;
};
Checkins.prototype.setBubbleParent = function () {
};
Checkins.prototype.getApiName = function () {
	return '';
};
Checkins.prototype.getLifecycleContainer = function () {
	return {};
};
Checkins.prototype.setLifecycleContainer = function () {
};
module.exports = function (properties) {
	return new Checkins(properties);
};