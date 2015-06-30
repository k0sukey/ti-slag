function SystemButtonStyle(properties) {
	properties = properties || {};

	this.BAR = properties.BAR || undefined;
	this.BORDERED = properties.BORDERED || undefined;
	this.DONE = properties.DONE || undefined;
	this.PLAIN = properties.PLAIN || undefined;
	this.apiName = 'Titanium.UI.iPhone.SystemButtonStyle';
	this.bubbleParent = properties.bubbleParent || undefined;

	return this;
}

SystemButtonStyle.prototype.addEventListener = function(){};

SystemButtonStyle.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

SystemButtonStyle.prototype.fireEvent = function(){};

SystemButtonStyle.prototype.getApiName = function(){ return this.apiName; };

SystemButtonStyle.prototype.getBubbleParent = function(){ return this.bubbleParent; };

SystemButtonStyle.prototype.removeEventListener = function(){};

SystemButtonStyle.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

module.exports = function(properties){ return new SystemButtonStyle(properties); };