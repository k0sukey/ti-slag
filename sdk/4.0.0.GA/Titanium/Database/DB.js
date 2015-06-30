function DB(properties) {
	properties = properties || {};

	this.apiName = 'Titanium.Database.DB';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.file = properties.file || undefined;
	this.lastInsertRowId = properties.lastInsertRowId || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	this.name = properties.name || undefined;
	this.rowsAffected = properties.rowsAffected || undefined;

	return this;
}

DB.prototype.addEventListener = function(){};

DB.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

DB.prototype.close = function(){};

DB.prototype.execute = function(){ return {}; };

DB.prototype.fireEvent = function(){};

DB.prototype.getApiName = function(){ return this.apiName; };

DB.prototype.getBubbleParent = function(){ return this.bubbleParent; };

DB.prototype.getFile = function(){ return this.file; };

DB.prototype.getLastInsertRowId = function(){ return this.lastInsertRowId; };

DB.prototype.getLifecycleContainer = function(){ return this.lifecycleContainer; };

DB.prototype.getName = function(){ return this.name; };

DB.prototype.getRowsAffected = function(){ return this.rowsAffected; };

DB.prototype.remove = function(){};

DB.prototype.removeEventListener = function(){};

DB.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

DB.prototype.setLastInsertRowId = function(property){ this.lastInsertRowId = property; };

DB.prototype.setLifecycleContainer = function(property){ this.lifecycleContainer = property; };

DB.prototype.setName = function(property){ this.name = property; };

DB.prototype.setRowsAffected = function(property){ this.rowsAffected = property; };

module.exports = function(properties){ return new DB(properties); };