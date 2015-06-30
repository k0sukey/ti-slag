function Utils(properties) {
	properties = properties || {};

	this.apiName = 'Titanium.Utils';
	this.bubbleParent = properties.bubbleParent || undefined;

	return this;
}

Utils.prototype.addEventListener = function(){};

Utils.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

Utils.prototype.base64decode = function(){ return {}; };

Utils.prototype.base64encode = function(){ return {}; };

Utils.prototype.fireEvent = function(){};

Utils.prototype.getApiName = function(){ return this.apiName; };

Utils.prototype.getBubbleParent = function(){ return this.bubbleParent; };

Utils.prototype.md5HexDigest = function(){ return ''; };

Utils.prototype.removeEventListener = function(){};

Utils.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

Utils.prototype.sha1 = function(){ return ''; };

Utils.prototype.sha256 = function(){ return ''; };

module.exports = function(properties){ return new Utils(properties); };