function Chats(properties) {
	properties = properties || {};
	this.apiName = 'Modules.Cloud.Chats';
	this.bubbleParent = properties.bubbleParent || true;
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
Chats.prototype.getApiName = function () {
	return '';
};
Chats.prototype.getBubbleParent = function () {
	return true;
};
Chats.prototype.getChatGroups = function () {
};
Chats.prototype.getLifecycleContainer = function () {
	return {};
};
Chats.prototype.query = function () {
};
Chats.prototype.queryChatGroups = function () {
};
Chats.prototype.remove = function () {
};
Chats.prototype.setBubbleParent = function () {
};
Chats.prototype.setLifecycleContainer = function () {
};
module.exports = function (properties) {
	return new Chats(properties);
};