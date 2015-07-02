function Friends(properties) {
	properties = properties || {};
	this.apiName = 'Titanium.Cloud.Friends';
	this.bubbleParent = properties.bubbleParent || undefined;
	return this;
}
Friends.prototype.add = function () {
};
Friends.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Friends.prototype.approve = function () {
};
Friends.prototype.getApiName = function () {
	return this.apiName;
};
Friends.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Friends.prototype.remove = function () {
};
Friends.prototype.requests = function () {
};
Friends.prototype.search = function () {
};
Friends.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
module.exports = function (properties) {
	return new Friends(properties);
};