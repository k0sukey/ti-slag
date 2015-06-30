function ProcessingInstruction(properties) {
	properties = properties || {};

	this.apiName = 'Titanium.XML.ProcessingInstruction';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.data = properties.data || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.target = properties.target || undefined;

	return this;
}

ProcessingInstruction.prototype.addEventListener = function(){};

ProcessingInstruction.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

ProcessingInstruction.prototype.fireEvent = function(){};

ProcessingInstruction.prototype.getApiName = function(){ return this.apiName; };

ProcessingInstruction.prototype.getBubbleParent = function(){ return this.bubbleParent; };

ProcessingInstruction.prototype.getData = function(){ return this.data; };

ProcessingInstruction.prototype.getLifecycleContainer = function(){ return this.lifecycleContainer; };

ProcessingInstruction.prototype.getTarget = function(){ return this.target; };

ProcessingInstruction.prototype.removeEventListener = function(){};

ProcessingInstruction.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

ProcessingInstruction.prototype.setData = function(property){ this.data = property; };

ProcessingInstruction.prototype.setLifecycleContainer = function(property){ this.lifecycleContainer = property; };

module.exports = function(properties){ return new ProcessingInstruction(properties); };