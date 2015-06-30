function Module(properties) {
	properties = properties || {};

	this.apiName = 'Titanium.Module';
	this.bubbleParent = properties.bubbleParent || undefined;

	return this;
}

Module.prototype.addEventListener = function(){};

Module.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

Module.prototype.fireEvent = function(){};

Module.prototype.getApiName = function(){ return this.apiName; };

Module.prototype.getBubbleParent = function(){ return this.bubbleParent; };

Module.prototype.removeEventListener = function(){};

Module.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

module.exports = function(properties){ return new Module(properties); };