function Service(properties) {
	properties = properties || {};

	this.apiName = 'Titanium.Android.Service';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.intent = properties.intent || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.serviceInstanceId = properties.serviceInstanceId || undefined;

	return this;
}

Service.prototype.addEventListener = function(){};

Service.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

Service.prototype.fireEvent = function(){};

Service.prototype.getApiName = function(){ return this.apiName; };

Service.prototype.getBubbleParent = function(){ return this.bubbleParent; };

Service.prototype.getIntent = function(){ return this.intent; };

Service.prototype.getLifecycleContainer = function(){ return this.lifecycleContainer; };

Service.prototype.getServiceInstanceId = function(){ return this.serviceInstanceId; };

Service.prototype.removeEventListener = function(){};

Service.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

Service.prototype.setLifecycleContainer = function(property){ this.lifecycleContainer = property; };

Service.prototype.start = function(){};

Service.prototype.stop = function(){};

module.exports = function(properties){ return new Service(properties); };