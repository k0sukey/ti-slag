function AnimationStyle(properties) {
	properties = properties || {};

	this.CURL_DOWN = properties.CURL_DOWN || undefined;
	this.CURL_UP = properties.CURL_UP || undefined;
	this.FLIP_FROM_LEFT = properties.FLIP_FROM_LEFT || undefined;
	this.FLIP_FROM_RIGHT = properties.FLIP_FROM_RIGHT || undefined;
	this.NONE = properties.NONE || undefined;
	this.apiName = 'Titanium.UI.iPhone.AnimationStyle';
	this.bubbleParent = properties.bubbleParent || undefined;

	return this;
}

AnimationStyle.prototype.addEventListener = function(){};

AnimationStyle.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

AnimationStyle.prototype.fireEvent = function(){};

AnimationStyle.prototype.getApiName = function(){ return this.apiName; };

AnimationStyle.prototype.getBubbleParent = function(){ return this.bubbleParent; };

AnimationStyle.prototype.removeEventListener = function(){};

AnimationStyle.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

module.exports = function(properties){ return new AnimationStyle(properties); };