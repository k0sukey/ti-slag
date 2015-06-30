function Analytics(properties) {
	properties = properties || {};

	this.apiName = 'Titanium.Analytics';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.lastEvent = properties.lastEvent || undefined;

	return this;
}

Analytics.prototype.addEvent = function(){};

Analytics.prototype.featureEvent = function(){};

Analytics.prototype.getApiName = function(){ return this.apiName; };

Analytics.prototype.getBubbleParent = function(){ return this.bubbleParent; };

Analytics.prototype.getLastEvent = function(){ return this.lastEvent; };

Analytics.prototype.navEvent = function(){};

Analytics.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

Analytics.prototype.settingsEvent = function(){};

Analytics.prototype.timedEvent = function(){};

Analytics.prototype.userEvent = function(){};

module.exports = function(properties){ return new Analytics(properties); };