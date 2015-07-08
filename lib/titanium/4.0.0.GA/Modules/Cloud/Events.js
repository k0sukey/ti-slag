function Events(properties) {
	properties = properties || {};
	this.apiName = 'Modules.Cloud.Events';
	this.bubbleParent = properties.bubbleParent || true;
	this.lifecycleContainer = properties.lifecycleContainer || {};
	return this;
}
Events.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Events.prototype.create = function () {
};
Events.prototype.getApiName = function () {
	return '';
};
Events.prototype.getBubbleParent = function () {
	return true;
};
Events.prototype.getLifecycleContainer = function () {
	return {};
};
Events.prototype.query = function () {
};
Events.prototype.queryOccurrences = function () {
};
Events.prototype.remove = function () {
};
Events.prototype.search = function () {
};
Events.prototype.searchOccurrences = function () {
};
Events.prototype.setBubbleParent = function () {
};
Events.prototype.setLifecycleContainer = function () {
};
Events.prototype.show = function () {
};
Events.prototype.showOccurrences = function () {
};
Events.prototype.update = function () {
};
module.exports = function (properties) {
	return new Events(properties);
};