function ProgressIndicator(properties) {
	properties = properties || {};

	this.apiName = 'Titanium.UI.Android.ProgressIndicator';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.cancelable = properties.cancelable || undefined;
	this.canceledOnTouchOutside = properties.canceledOnTouchOutside || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.location = properties.location || undefined;
	this.max = properties.max || undefined;
	this.message = properties.message || undefined;
	this.messageid = properties.messageid || undefined;
	this.min = properties.min || undefined;
	this.type = properties.type || undefined;

	return this;
}

ProgressIndicator.prototype.addEventListener = function(){};

ProgressIndicator.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

ProgressIndicator.prototype.fireEvent = function(){};

ProgressIndicator.prototype.getApiName = function(){ return this.apiName; };

ProgressIndicator.prototype.getBubbleParent = function(){ return this.bubbleParent; };

ProgressIndicator.prototype.getCancelable = function(){ return this.cancelable; };

ProgressIndicator.prototype.getCanceledOnTouchOutside = function(){ return this.canceledOnTouchOutside; };

ProgressIndicator.prototype.getLifecycleContainer = function(){ return this.lifecycleContainer; };

ProgressIndicator.prototype.getLocation = function(){ return this.location; };

ProgressIndicator.prototype.getMax = function(){ return this.max; };

ProgressIndicator.prototype.getMessage = function(){ return this.message; };

ProgressIndicator.prototype.getMessageid = function(){ return this.messageid; };

ProgressIndicator.prototype.getMin = function(){ return this.min; };

ProgressIndicator.prototype.getType = function(){ return this.type; };

ProgressIndicator.prototype.hide = function(){};

ProgressIndicator.prototype.removeEventListener = function(){};

ProgressIndicator.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

ProgressIndicator.prototype.setCancelable = function(property){ this.cancelable = property; };

ProgressIndicator.prototype.setCanceledOnTouchOutside = function(property){ this.canceledOnTouchOutside = property; };

ProgressIndicator.prototype.setLifecycleContainer = function(property){ this.lifecycleContainer = property; };

ProgressIndicator.prototype.setLocation = function(property){ this.location = property; };

ProgressIndicator.prototype.setMax = function(property){ this.max = property; };

ProgressIndicator.prototype.setMessage = function(property){ this.message = property; };

ProgressIndicator.prototype.setMessageid = function(property){ this.messageid = property; };

ProgressIndicator.prototype.setMin = function(property){ this.min = property; };

ProgressIndicator.prototype.setType = function(property){ this.type = property; };

ProgressIndicator.prototype.show = function(){};

module.exports = function(properties){ return new ProgressIndicator(properties); };