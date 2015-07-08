function Friends(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Cloud.Friends';
	this.bubbleParent = properties.bubbleParent || true;
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
	return '';
};
Friends.prototype.getBubbleParent = function () {
	return true;
};
Friends.prototype.remove = function () {
};
Friends.prototype.requests = function () {
};
Friends.prototype.search = function () {
};
Friends.prototype.setBubbleParent = function () {
};
module.exports = function (properties) {
	return new Friends(properties);
};