function Messages(properties) {
	properties = properties || {};
	this.apiName = 'Modules.Cloud.Messages';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	return this;
}
Messages.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Messages.prototype.create = function () {
};
Messages.prototype.getApiName = function () {
	return this.apiName;
};
Messages.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Messages.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Messages.prototype.remove = function () {
};
Messages.prototype.removeThread = function () {
};
Messages.prototype.reply = function () {
};
Messages.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Messages.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
Messages.prototype.show = function () {
};
Messages.prototype.showInbox = function () {
};
Messages.prototype.showSent = function () {
};
Messages.prototype.showThread = function () {
};
Messages.prototype.showThreads = function () {
};
module.exports = function (properties) {
	return new Messages(properties);
};