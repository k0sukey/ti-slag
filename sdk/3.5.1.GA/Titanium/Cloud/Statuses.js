function Statuses(properties) {
	properties = properties || {};

	this.apiName = 'Titanium.Cloud.Statuses';
	this.bubbleParent = properties.bubbleParent || undefined;

	return this;
}

Statuses.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

Statuses.prototype.create = function(){};

Statuses.prototype.delete = function(){};

Statuses.prototype.getApiName = function(){ return this.apiName; };

Statuses.prototype.getBubbleParent = function(){ return this.bubbleParent; };

Statuses.prototype.query = function(){};

Statuses.prototype.search = function(){};

Statuses.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

Statuses.prototype.show = function(){};

Statuses.prototype.update = function(){};

module.exports = function(properties){ return new Statuses(properties); };