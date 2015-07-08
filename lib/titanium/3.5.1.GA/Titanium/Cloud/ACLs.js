function ACLs(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Cloud.ACLs';
	this.bubbleParent = properties.bubbleParent || true;
	return this;
}
ACLs.prototype.addUser = function () {
};
ACLs.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
ACLs.prototype.checkUser = function () {
};
ACLs.prototype.create = function () {
};
ACLs.prototype.getApiName = function () {
	return '';
};
ACLs.prototype.getBubbleParent = function () {
	return true;
};
ACLs.prototype.remove = function () {
};
ACLs.prototype.removeUser = function () {
};
ACLs.prototype.setBubbleParent = function () {
};
ACLs.prototype.show = function () {
};
ACLs.prototype.update = function () {
};
module.exports = function (properties) {
	return new ACLs(properties);
};