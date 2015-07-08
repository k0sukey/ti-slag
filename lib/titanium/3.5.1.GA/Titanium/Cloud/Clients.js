function Clients(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Cloud.Clients';
	this.bubbleParent = properties.bubbleParent || true;
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
	return '';
};
Clients.prototype.getBubbleParent = function () {
	return true;
};
Clients.prototype.setBubbleParent = function () {
};
module.exports = function (properties) {
	return new Clients(properties);
};