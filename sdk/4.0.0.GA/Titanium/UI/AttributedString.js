function AttributedString(properties) {
	properties = properties || {};

	this.apiName = 'Titanium.UI.AttributedString';
	this.attributes = properties.attributes || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.text = properties.text || undefined;

	return this;
}

AttributedString.prototype.addAttribute = function(){};

AttributedString.prototype.addEventListener = function(){};

AttributedString.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

AttributedString.prototype.fireEvent = function(){};

AttributedString.prototype.getApiName = function(){ return this.apiName; };

AttributedString.prototype.getAttributes = function(){ return this.attributes; };

AttributedString.prototype.getBubbleParent = function(){ return this.bubbleParent; };

AttributedString.prototype.getLifecycleContainer = function(){ return this.lifecycleContainer; };

AttributedString.prototype.getText = function(){ return this.text; };

AttributedString.prototype.removeEventListener = function(){};

AttributedString.prototype.setAttributes = function(property){ this.attributes = property; };

AttributedString.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

AttributedString.prototype.setLifecycleContainer = function(property){ this.lifecycleContainer = property; };

AttributedString.prototype.setText = function(property){ this.text = property; };

module.exports = function(properties){ return new AttributedString(properties); };