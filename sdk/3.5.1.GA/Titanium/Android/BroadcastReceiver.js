function BroadcastReceiver(properties) {
	properties = properties || {};

	this.apiName = 'Titanium.Android.BroadcastReceiver';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.onReceived = properties.onReceived || undefined;
	this.url = properties.url || undefined;

	return this;
}

BroadcastReceiver.prototype.addEventListener = function(){};

BroadcastReceiver.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

BroadcastReceiver.prototype.fireEvent = function(){};

BroadcastReceiver.prototype.getApiName = function(){ return this.apiName; };

BroadcastReceiver.prototype.getBubbleParent = function(){ return this.bubbleParent; };

BroadcastReceiver.prototype.getUrl = function(){ return this.url; };

BroadcastReceiver.prototype.removeEventListener = function(){};

BroadcastReceiver.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

BroadcastReceiver.prototype.setOnReceived = function(property){ this.onReceived = property; };

BroadcastReceiver.prototype.setUrl = function(property){ this.url = property; };

module.exports = function(properties){ return new BroadcastReceiver(properties); };