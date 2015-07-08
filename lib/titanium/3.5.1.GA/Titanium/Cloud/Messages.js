function Messages(properties) {
	properties = properties || {};
	this.apiName = 'Ti.Cloud.Messages';
	this.bubbleParent = properties.bubbleParent || true;
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
	return '';
};
Messages.prototype.getBubbleParent = function () {
	return true;
};
Messages.prototype.remove = function () {
};
Messages.prototype.removeThread = function () {
};
Messages.prototype.reply = function () {
};
Messages.prototype.setBubbleParent = function () {
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