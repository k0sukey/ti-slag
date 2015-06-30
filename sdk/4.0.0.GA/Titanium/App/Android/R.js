function R(properties) {
	properties = properties || {};

	this.apiName = 'Titanium.App.Android.R';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;

	return this;
}

R.prototype.addEventListener = function(){};

R.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

R.prototype.fireEvent = function(){};

R.prototype.getApiName = function(){ return this.apiName; };

R.prototype.getBubbleParent = function(){ return this.bubbleParent; };

R.prototype.getLifecycleContainer = function(){ return this.lifecycleContainer; };

R.prototype.removeEventListener = function(){};

R.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

R.prototype.setLifecycleContainer = function(property){ this.lifecycleContainer = property; };

module.exports = function(properties){ return new R(properties); };