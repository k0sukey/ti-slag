function Properties(properties) {
	properties = properties || {};

	this.apiName = 'Titanium.App.Properties';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;

	return this;
}

Properties.prototype.addEventListener = function(){};

Properties.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

Properties.prototype.fireEvent = function(){};

Properties.prototype.getApiName = function(){ return this.apiName; };

Properties.prototype.getBool = function(){ return true; };

Properties.prototype.getBubbleParent = function(){ return this.bubbleParent; };

Properties.prototype.getDouble = function(){ return 0; };

Properties.prototype.getInt = function(){ return 0; };

Properties.prototype.getLifecycleContainer = function(){ return this.lifecycleContainer; };

Properties.prototype.getList = function(){ return []; };

Properties.prototype.getString = function(){ return ''; };

Properties.prototype.hasProperty = function(){ return true; };

Properties.prototype.listProperties = function(){ return []; };

Properties.prototype.removeEventListener = function(){};

Properties.prototype.removeProperty = function(){};

Properties.prototype.setBool = function(){};

Properties.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

Properties.prototype.setDouble = function(){};

Properties.prototype.setInt = function(){};

Properties.prototype.setLifecycleContainer = function(property){ this.lifecycleContainer = property; };

Properties.prototype.setList = function(){};

Properties.prototype.setObject = function(){};

Properties.prototype.setString = function(){};

module.exports = function(properties){ return new Properties(properties); };