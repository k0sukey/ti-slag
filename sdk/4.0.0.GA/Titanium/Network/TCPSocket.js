function TCPSocket(properties) {
	properties = properties || {};

	this.apiName = 'Titanium.Network.TCPSocket';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.hostName = properties.hostName || undefined;
	this.isValid = properties.isValid || undefined;
	this.mode = properties.mode || undefined;
	this.port = properties.port || undefined;
	this.stripTerminator = properties.stripTerminator || undefined;

	return this;
}

TCPSocket.prototype.addEventListener = function(){};

TCPSocket.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

TCPSocket.prototype.close = function(){};

TCPSocket.prototype.connect = function(){};

TCPSocket.prototype.fireEvent = function(){};

TCPSocket.prototype.getApiName = function(){ return this.apiName; };

TCPSocket.prototype.getBubbleParent = function(){ return this.bubbleParent; };

TCPSocket.prototype.getHostName = function(){ return this.hostName; };

TCPSocket.prototype.getIsValid = function(){ return this.isValid; };

TCPSocket.prototype.getMode = function(){ return this.mode; };

TCPSocket.prototype.getPort = function(){ return this.port; };

TCPSocket.prototype.getStripTerminator = function(){ return this.stripTerminator; };

TCPSocket.prototype.listen = function(){};

TCPSocket.prototype.removeEventListener = function(){};

TCPSocket.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

TCPSocket.prototype.setHostName = function(property){ this.hostName = property; };

TCPSocket.prototype.setIsValid = function(property){ this.isValid = property; };

TCPSocket.prototype.setMode = function(property){ this.mode = property; };

TCPSocket.prototype.setPort = function(property){ this.port = property; };

TCPSocket.prototype.setStripTerminator = function(property){ this.stripTerminator = property; };

TCPSocket.prototype.write = function(){};

module.exports = function(properties){ return new TCPSocket(properties); };