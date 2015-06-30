function R(properties) {
	properties = properties || {};

	this.apiName = 'Titanium.App.Android.R';
	this.bubbleParent = properties.bubbleParent || undefined;

	return this;
}

R.prototype.addEventListener = function(){};

R.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

R.prototype.fireEvent = function(){};

R.prototype.getApiName = function(){ return this.apiName; };

R.prototype.getBubbleParent = function(){ return this.bubbleParent; };

R.prototype.removeEventListener = function(){};

R.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

module.exports = function(properties){ return new R(properties); };