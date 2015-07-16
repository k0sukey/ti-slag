function Messages(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Modules.Cloud.Messages';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	return this;
}
Messages.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Messages.prototype.create = function () {
};
Messages.prototype.reply = function () {
};
Messages.prototype.show = function () {
};
Messages.prototype.showInbox = function () {
};
Messages.prototype.showSent = function () {
};
Messages.prototype.showThreads = function () {
};
Messages.prototype.showThread = function () {
};
Messages.prototype.remove = function () {
};
Messages.prototype.removeThread = function () {
};
Messages.prototype.getBubbleParent = function () {
	return true;
};
Messages.prototype.setBubbleParent = function () {
};
Messages.prototype.getApiName = function () {
	return '';
};
Messages.prototype.getLifecycleContainer = function () {
	return {};
};
Messages.prototype.setLifecycleContainer = function () {
};
module.exports = function (properties) {
	return new Messages(properties);
};