function Clients(properties) {
	properties = properties || {};

	this.apiName = 'Titanium.Cloud.Clients';
	this.bubbleParent = properties.bubbleParent || undefined;

	return this;
}

Clients.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

Clients.prototype.geolocate = function(){};

Clients.prototype.getApiName = function(){ return this.apiName; };

Clients.prototype.getBubbleParent = function(){ return this.bubbleParent; };

Clients.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

module.exports = function(properties){ return new Clients(properties); };