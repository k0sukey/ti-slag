function ACLs(properties) {
	properties = properties || {};
	this.apiName = 'Modules.Cloud.ACLs';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
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
	return this.apiName;
};
ACLs.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
ACLs.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
ACLs.prototype.remove = function () {
};
ACLs.prototype.removeUser = function () {
};
ACLs.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
ACLs.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
ACLs.prototype.show = function () {
};
ACLs.prototype.update = function () {
};
module.exports = function (properties) {
	return new ACLs(properties);
};