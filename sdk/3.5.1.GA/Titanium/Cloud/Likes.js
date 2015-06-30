function Likes(properties) {
	properties = properties || {};

	this.apiName = 'Titanium.Cloud.Likes';
	this.bubbleParent = properties.bubbleParent || undefined;

	return this;
}

Likes.prototype.create = function(){};

Likes.prototype.getApiName = function(){ return this.apiName; };

Likes.prototype.getBubbleParent = function(){ return this.bubbleParent; };

Likes.prototype.remove = function(){};

Likes.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

module.exports = function(properties){ return new Likes(properties); };