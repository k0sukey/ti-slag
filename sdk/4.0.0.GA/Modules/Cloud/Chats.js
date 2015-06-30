function Chats(properties) {
	properties = properties || {};

	this.apiName = 'Modules.Cloud.Chats';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;

	return this;
}

Chats.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

Chats.prototype.create = function(){};

Chats.prototype.getApiName = function(){ return this.apiName; };

Chats.prototype.getBubbleParent = function(){ return this.bubbleParent; };

Chats.prototype.getChatGroups = function(){};

Chats.prototype.getLifecycleContainer = function(){ return this.lifecycleContainer; };

Chats.prototype.query = function(){};

Chats.prototype.queryChatGroups = function(){};

Chats.prototype.remove = function(){};

Chats.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

Chats.prototype.setLifecycleContainer = function(property){ this.lifecycleContainer = property; };

module.exports = function(properties){ return new Chats(properties); };