function Database(properties) {
	properties = properties || {};

	this.FIELD_TYPE_DOUBLE = properties.FIELD_TYPE_DOUBLE || undefined;
	this.FIELD_TYPE_FLOAT = properties.FIELD_TYPE_FLOAT || undefined;
	this.FIELD_TYPE_INT = properties.FIELD_TYPE_INT || undefined;
	this.FIELD_TYPE_STRING = properties.FIELD_TYPE_STRING || undefined;
	this.apiName = 'Titanium.Database';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;

	return this;
}

Database.prototype.addEventListener = function(){};

Database.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

Database.prototype.fireEvent = function(){};

Database.prototype.getApiName = function(){ return this.apiName; };

Database.prototype.getBubbleParent = function(){ return this.bubbleParent; };

Database.prototype.getLifecycleContainer = function(){ return this.lifecycleContainer; };

Database.prototype.install = function(){ return {}; };

Database.prototype.open = function(){ return {}; };

Database.prototype.removeEventListener = function(){};

Database.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

Database.prototype.setLifecycleContainer = function(property){ this.lifecycleContainer = property; };

module.exports = function(properties){ return new Database(properties); };