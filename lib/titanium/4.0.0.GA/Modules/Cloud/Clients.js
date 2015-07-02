function Clients(properties) {
	properties = properties || {};
	this.apiName = 'Modules.Cloud.Clients';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	return this;
}
Clients.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Clients.prototype.geolocate = function () {
};
Clients.prototype.getApiName = function () {
	return this.apiName;
};
Clients.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Clients.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Clients.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Clients.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
module.exports = function (properties) {
	return new Clients(properties);
};