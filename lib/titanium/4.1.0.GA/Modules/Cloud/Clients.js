function Clients(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Modules.Cloud.Clients';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	return this;
}
Clients.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Clients.prototype.geolocate = function () {
};
Clients.prototype.getBubbleParent = function () {
	return true;
};
Clients.prototype.setBubbleParent = function () {
};
Clients.prototype.getApiName = function () {
	return '';
};
Clients.prototype.getLifecycleContainer = function () {
	return {};
};
Clients.prototype.setLifecycleContainer = function () {
};
module.exports = function (properties) {
	return new Clients(properties);
};