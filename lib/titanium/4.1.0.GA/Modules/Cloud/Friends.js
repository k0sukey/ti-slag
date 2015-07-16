function Friends(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Modules.Cloud.Friends';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	return this;
}
Friends.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Friends.prototype.add = function () {
};
Friends.prototype.requests = function () {
};
Friends.prototype.approve = function () {
};
Friends.prototype.remove = function () {
};
Friends.prototype.search = function () {
};
Friends.prototype.getBubbleParent = function () {
	return true;
};
Friends.prototype.setBubbleParent = function () {
};
Friends.prototype.getApiName = function () {
	return '';
};
Friends.prototype.getLifecycleContainer = function () {
	return {};
};
Friends.prototype.setLifecycleContainer = function () {
};
module.exports = function (properties) {
	return new Friends(properties);
};