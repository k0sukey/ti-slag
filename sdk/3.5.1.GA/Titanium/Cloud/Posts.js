function Posts(properties) {
	properties = properties || {};

	this.apiName = 'Titanium.Cloud.Posts';
	this.bubbleParent = properties.bubbleParent || undefined;

	return this;
}

Posts.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

Posts.prototype.create = function(){};

Posts.prototype.getApiName = function(){ return this.apiName; };

Posts.prototype.getBubbleParent = function(){ return this.bubbleParent; };

Posts.prototype.query = function(){};

Posts.prototype.remove = function(){};

Posts.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

Posts.prototype.show = function(){};

Posts.prototype.update = function(){};

module.exports = function(properties){ return new Posts(properties); };