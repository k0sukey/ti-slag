function Intent(properties) {
	properties = properties || {};

	this.action = properties.action || undefined;
	this.apiName = 'Titanium.Android.Intent';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.className = properties.className || undefined;
	this.data = properties.data || undefined;
	this.flags = properties.flags || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.packageName = properties.packageName || undefined;
	this.type = properties.type || undefined;
	this.url = properties.url || undefined;

	return this;
}

Intent.prototype.addCategory = function(){};

Intent.prototype.addEventListener = function(){};

Intent.prototype.addFlags = function(){};

Intent.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

Intent.prototype.fireEvent = function(){};

Intent.prototype.getAction = function(){ return this.action; };

Intent.prototype.getApiName = function(){ return this.apiName; };

Intent.prototype.getBlobExtra = function(){ return {}; };

Intent.prototype.getBooleanExtra = function(){ return true; };

Intent.prototype.getBubbleParent = function(){ return this.bubbleParent; };

Intent.prototype.getClassName = function(){ return this.className; };

Intent.prototype.getData = function(){ return this.data; };

Intent.prototype.getDoubleExtra = function(){ return 0; };

Intent.prototype.getFlags = function(){ return this.flags; };

Intent.prototype.getIntExtra = function(){ return 0; };

Intent.prototype.getLifecycleContainer = function(){ return this.lifecycleContainer; };

Intent.prototype.getLongExtra = function(){ return 0; };

Intent.prototype.getPackageName = function(){ return this.packageName; };

Intent.prototype.getStringExtra = function(){ return ''; };

Intent.prototype.getType = function(){ return this.type; };

Intent.prototype.getUrl = function(){ return this.url; };

Intent.prototype.hasExtra = function(){ return true; };

Intent.prototype.putExtra = function(){};

Intent.prototype.putExtraUri = function(){};

Intent.prototype.removeEventListener = function(){};

Intent.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

Intent.prototype.setFlags = function(property){ this.flags = property; };

Intent.prototype.setLifecycleContainer = function(property){ this.lifecycleContainer = property; };

module.exports = function(properties){ return new Intent(properties); };