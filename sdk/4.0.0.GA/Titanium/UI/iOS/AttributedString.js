function AttributedString(properties) {
	properties = properties || {};

	this.apiName = 'Titanium.UI.iOS.AttributedString';
	this.attributes = properties.attributes || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
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

AttributedString.prototype.getText = function(){ return this.text; };

AttributedString.prototype.removeEventListener = function(){};

AttributedString.prototype.setAttributes = function(property){ this.attributes = property; };

AttributedString.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

AttributedString.prototype.setText = function(property){ this.text = property; };

module.exports = function(properties){ return new AttributedString(properties); };