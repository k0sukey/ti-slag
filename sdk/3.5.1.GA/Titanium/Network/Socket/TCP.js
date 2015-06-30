function TCP(properties) {
	properties = properties || {};

	this.accepted = properties.accepted || undefined;
	this.apiName = 'Titanium.Network.Socket.TCP';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.connected = properties.connected || undefined;
	this.error = properties.error || undefined;
	this.host = properties.host || undefined;
	this.listenQueueSize = properties.listenQueueSize || undefined;
	this.port = properties.port || undefined;
	this.state = properties.state || undefined;
	this.timeout = properties.timeout || undefined;

	return this;
}

TCP.prototype.accept = function(){};

TCP.prototype.addEventListener = function(){};

TCP.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

TCP.prototype.close = function(){};

TCP.prototype.connect = function(){};

TCP.prototype.fireEvent = function(){};

TCP.prototype.getApiName = function(){ return this.apiName; };

TCP.prototype.getBubbleParent = function(){ return this.bubbleParent; };

TCP.prototype.getHost = function(){ return this.host; };

TCP.prototype.getListenQueueSize = function(){ return this.listenQueueSize; };

TCP.prototype.getPort = function(){ return this.port; };

TCP.prototype.getState = function(){ return this.state; };

TCP.prototype.getTimeout = function(){ return this.timeout; };

TCP.prototype.isReadable = function(){ return true; };

TCP.prototype.isWriteable = function(){ return true; };

TCP.prototype.listen = function(){};

TCP.prototype.read = function(){ return 0; };

TCP.prototype.removeEventListener = function(){};

TCP.prototype.setAccepted = function(property){ this.accepted = property; };

TCP.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

TCP.prototype.setConnected = function(property){ this.connected = property; };

TCP.prototype.setError = function(property){ this.error = property; };

TCP.prototype.setHost = function(property){ this.host = property; };

TCP.prototype.setListenQueueSize = function(property){ this.listenQueueSize = property; };

TCP.prototype.setPort = function(property){ this.port = property; };

TCP.prototype.setTimeout = function(property){ this.timeout = property; };

TCP.prototype.write = function(){ return 0; };

module.exports = function(properties){ return new TCP(properties); };