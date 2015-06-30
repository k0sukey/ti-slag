function PushSchedules(properties) {
	properties = properties || {};

	this.apiName = 'Titanium.Cloud.PushSchedules';
	this.bubbleParent = properties.bubbleParent || undefined;

	return this;
}

PushSchedules.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

PushSchedules.prototype.create = function(){};

PushSchedules.prototype.getApiName = function(){ return this.apiName; };

PushSchedules.prototype.getBubbleParent = function(){ return this.bubbleParent; };

PushSchedules.prototype.query = function(){};

PushSchedules.prototype.remove = function(){};

PushSchedules.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

module.exports = function(properties){ return new PushSchedules(properties); };