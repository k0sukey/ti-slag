function Cookie(properties) {
	properties = properties || {};

	this.apiName = 'Titanium.Network.Cookie';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.comment = properties.comment || undefined;
	this.domain = properties.domain || undefined;
	this.expiryDate = properties.expiryDate || undefined;
	this.httponly = properties.httponly || undefined;
	this.name = properties.name || undefined;
	this.originalUrl = properties.originalUrl || undefined;
	this.path = properties.path || undefined;
	this.secure = properties.secure || undefined;
	this.value = properties.value || undefined;
	this.version = properties.version || undefined;

	return this;
}

Cookie.prototype.addEventListener = function(){};

Cookie.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

Cookie.prototype.fireEvent = function(){};

Cookie.prototype.getApiName = function(){ return this.apiName; };

Cookie.prototype.getBubbleParent = function(){ return this.bubbleParent; };

Cookie.prototype.getComment = function(){ return this.comment; };

Cookie.prototype.getDomain = function(){ return this.domain; };

Cookie.prototype.getExpiryDate = function(){ return this.expiryDate; };

Cookie.prototype.getHttponly = function(){ return this.httponly; };

Cookie.prototype.getName = function(){ return this.name; };

Cookie.prototype.getOriginalUrl = function(){ return this.originalUrl; };

Cookie.prototype.getPath = function(){ return this.path; };

Cookie.prototype.getSecure = function(){ return this.secure; };

Cookie.prototype.getValue = function(){ return this.value; };

Cookie.prototype.getVersion = function(){ return this.version; };

Cookie.prototype.isValid = function(){ return true; };

Cookie.prototype.removeEventListener = function(){};

Cookie.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

Cookie.prototype.setComment = function(property){ this.comment = property; };

Cookie.prototype.setDomain = function(property){ this.domain = property; };

Cookie.prototype.setExpiryDate = function(property){ this.expiryDate = property; };

Cookie.prototype.setHttponly = function(property){ this.httponly = property; };

Cookie.prototype.setOriginalUrl = function(property){ this.originalUrl = property; };

Cookie.prototype.setPath = function(property){ this.path = property; };

Cookie.prototype.setSecure = function(property){ this.secure = property; };

Cookie.prototype.setValue = function(property){ this.value = property; };

Cookie.prototype.setVersion = function(property){ this.version = property; };

module.exports = function(properties){ return new Cookie(properties); };