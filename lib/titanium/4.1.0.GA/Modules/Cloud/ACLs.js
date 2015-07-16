function ACLs(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Modules.Cloud.ACLs';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	return this;
}
ACLs.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
ACLs.prototype.create = function () {
};
ACLs.prototype.update = function () {
};
ACLs.prototype.show = function () {
};
ACLs.prototype.remove = function () {
};
ACLs.prototype.addUser = function () {
};
ACLs.prototype.removeUser = function () {
};
ACLs.prototype.checkUser = function () {
};
ACLs.prototype.getBubbleParent = function () {
	return true;
};
ACLs.prototype.setBubbleParent = function () {
};
ACLs.prototype.getApiName = function () {
	return '';
};
ACLs.prototype.getLifecycleContainer = function () {
	return {};
};
ACLs.prototype.setLifecycleContainer = function () {
};
module.exports = function (properties) {
	return new ACLs(properties);
};