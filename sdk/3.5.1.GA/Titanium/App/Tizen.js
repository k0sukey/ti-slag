function Tizen(properties) {
	properties = properties || {};

	this.apiName = 'Titanium.App.Tizen';
	this.categories = properties.categories || undefined;
	this.iconPath = properties.iconPath || undefined;
	this.id = properties.id || undefined;
	this.installDate = properties.installDate || undefined;
	this.name = properties.name || undefined;
	this.show = properties.show || undefined;
	this.size = properties.size || undefined;

	return this;
}

Tizen.prototype.addEventListener = function(){};

Tizen.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

Tizen.prototype.exit = function(){};

Tizen.prototype.fireEvent = function(){};

Tizen.prototype.getApiName = function(){ return this.apiName; };

Tizen.prototype.getCategories = function(){ return this.categories; };

Tizen.prototype.getIconPath = function(){ return this.iconPath; };

Tizen.prototype.getId = function(){ return this.id; };

Tizen.prototype.getName = function(){ return this.name; };

Tizen.prototype.getShow = function(){ return this.show; };

Tizen.prototype.getSize = function(){ return this.size; };

Tizen.prototype.hide = function(){};

Tizen.prototype.removeEventListener = function(){};

module.exports = function(properties){ return new Tizen(properties); };