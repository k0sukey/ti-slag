function Chats(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Modules.Cloud.Chats';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	return this;
}
Chats.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Chats.prototype.create = function () {
};
Chats.prototype.remove = function () {
};
Chats.prototype.getChatGroups = function () {
};
Chats.prototype.queryChatGroups = function () {
};
Chats.prototype.query = function () {
};
Chats.prototype.getBubbleParent = function () {
	return true;
};
Chats.prototype.setBubbleParent = function () {
};
Chats.prototype.getApiName = function () {
	return '';
};
Chats.prototype.getLifecycleContainer = function () {
	return {};
};
Chats.prototype.setLifecycleContainer = function () {
};
module.exports = function (properties) {
	return new Chats(properties);
};