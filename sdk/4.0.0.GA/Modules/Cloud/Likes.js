function Likes(properties) {
	properties = properties || {};

	this.apiName = 'Modules.Cloud.Likes';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;

	return this;
}

Likes.prototype.create = function(){};

Likes.prototype.getApiName = function(){ return this.apiName; };

Likes.prototype.getBubbleParent = function(){ return this.bubbleParent; };

Likes.prototype.getLifecycleContainer = function(){ return this.lifecycleContainer; };

Likes.prototype.remove = function(){};

Likes.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

Likes.prototype.setLifecycleContainer = function(property){ this.lifecycleContainer = property; };

module.exports = function(properties){ return new Likes(properties); };