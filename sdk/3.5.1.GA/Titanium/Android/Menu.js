function Menu(properties) {
	properties = properties || {};

	this.apiName = 'Titanium.Android.Menu';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.items = properties.items || undefined;

	return this;
}

Menu.prototype.add = function(){ return {}; };

Menu.prototype.addEventListener = function(){};

Menu.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

Menu.prototype.clear = function(){};

Menu.prototype.close = function(){};

Menu.prototype.findItem = function(){ return {}; };

Menu.prototype.fireEvent = function(){};

Menu.prototype.getApiName = function(){ return this.apiName; };

Menu.prototype.getBubbleParent = function(){ return this.bubbleParent; };

Menu.prototype.getItem = function(){ return {}; };

Menu.prototype.getItems = function(){ return this.items; };

Menu.prototype.hasVisibleItems = function(){ return true; };

Menu.prototype.removeEventListener = function(){};

Menu.prototype.removeGroup = function(){};

Menu.prototype.removeItem = function(){};

Menu.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

Menu.prototype.setGroupEnabled = function(){};

Menu.prototype.setGroupVisible = function(){};

Menu.prototype.size = function(){ return 0; };

module.exports = function(properties){ return new Menu(properties); };